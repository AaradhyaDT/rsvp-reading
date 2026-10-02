#!/usr/bin/env python3
"""
verify.py — Deterministic verification suite for rsvp-reading

Checks:
  1. Frontend manifest and configuration integrity
  2. Source directory file presence
  3. Commit SHA integrity: Prohibits placeholder tokens (relXX, upgXX, xtoolXX, dummy, todo)
     and validates all commit references are authentic 7-40 hex SHAs.

Run:
  python scripts/verify.py
  python scripts/verify.py --verbose

Exit codes: 0 = clean, 1 = errors found
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

errors = []
passes = []

VERBOSE = "--verbose" in sys.argv


def ok(msg):
    passes.append(msg)
    if VERBOSE:
        print(f"  [PASS] {msg}")


def err(msg):
    errors.append(msg)
    print(f"  [FAIL] {msg}")


def check_config_integrity():
    print("\n[1/3] Configuration & manifest integrity")
    for req in ["package.json", "vite.config.js", "svelte.config.js", "index.html"]:
        if os.path.exists(req):
            ok(f"{req} exists")
        else:
            err(f"missing {req}")

    if os.path.exists("package.json"):
        try:
            with open("package.json", "r", encoding="utf-8") as f:
                data = json.load(f)
            if "name" in data:
                ok("package.json is valid JSON with project name")
            else:
                err("package.json missing name field")
        except Exception as e:
            err(f"package.json parsing error: {e}")


def check_source_structure():
    print("\n[2/3] Source code structure")
    if os.path.exists("src/main.js") or os.path.exists("src/main.ts") or os.path.exists("src/App.svelte"):
        ok("root entrypoint found in src/")
    else:
        err("no main.js/main.ts/App.svelte found in src/")


def check_commit_sha_integrity():
    print("\n[3/3] Commit SHA & placeholder integrity")
    placeholder_pattern = re.compile(r"\b(rel\d+|upg\d+|xtool\d+|dummy|todo)\b", re.IGNORECASE)
    commit_url_pattern = re.compile(r"github\.com/[^/]+/[^/]+/commit/([a-zA-Z0-9_\-]+)")
    sha_prop_pattern = re.compile(r"""sha:\s*['"]([^'"]+)['"]""")
    hex_sha_pattern = re.compile(r"^[0-9a-f]{7,40}$", re.IGNORECASE)

    scanned_extensions = {".md", ".json", ".js", ".ts", ".svelte", ".html", ".css", ".ps1"}
    bad_shas = []

    for root_dir, _, files in os.walk("."):
        if any(d in root_dir for d in [".git", "node_modules", "dist", ".venv", "__pycache__"]):
            continue
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in scanned_extensions:
                file_path = os.path.join(root_dir, file)
                try:
                    with open(file_path, "r", encoding="utf-8", errors="ignore") as fh:
                        content = fh.read()
                except Exception:
                    continue

                for m in commit_url_pattern.finditer(content):
                    sha = m.group(1)
                    if placeholder_pattern.match(sha) or not hex_sha_pattern.match(sha):
                        bad_shas.append(f"{file_path}: invalid commit URL SHA '{sha}'")

                for m in sha_prop_pattern.finditer(content):
                    sha = m.group(1)
                    if placeholder_pattern.match(sha) or not hex_sha_pattern.match(sha):
                        bad_shas.append(f"{file_path}: invalid sha property '{sha}'")

    if bad_shas:
        for b in bad_shas:
            err(b)
    else:
        ok("all commit SHAs are authentic 7-40 hex format (0 placeholders found)")


def main():
    print(f"Running deterministic verification in {ROOT}")
    check_config_integrity()
    check_source_structure()
    check_commit_sha_integrity()

    print(f"\n{'='*50}")
    print(f"Passed: {len(passes)}   Errors: {len(errors)}")
    if errors:
        print("\nFAILED — fix the above before proceeding.")
        sys.exit(1)
    print("\nALL CHECKS PASSED DETERMINISTICALLY.")
    sys.exit(0)


if __name__ == "__main__":
    main()
