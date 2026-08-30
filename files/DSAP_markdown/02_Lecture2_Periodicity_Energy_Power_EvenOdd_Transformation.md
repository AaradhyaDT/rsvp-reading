# DSAP Lecture 2: Periodicity, Energy/Power Signals, Even/Odd Signals, Transformation of Independent Variable

## Lecture 2 Topics

- Periodicity of discrete time signal
- Energy signal, power signal
- Even and odd signal
- Transformation of independent variable

## Periodic and Aperiodic Signal

**Periodic Signal**
- Repeats itself at a fixed interval of time.
- CT: x(t) = x(t + T), where T is the period.
- DT: x[n] = x[n + N], where N is the period and is always an integer.

**Aperiodic Signal**
- Does not repeat itself after a fixed interval of time.
  - CT: x(t) ≠ x(t + T)
  - DT: x[n] ≠ x[n + N]
- Assumed to repeat itself at infinity.

## Condition for a DT Signal to Be Periodic

Let x[n] be a DT signal. It must satisfy x[n] = x[n+N] to be periodic, where N is the period.

Let x[n] = A cos(2πf₀n + θ) ... (1)

Then x[n+N] = A cos(2πf₀(n+N) + θ) = A cos(2πf₀n + 2πf₀N + θ) ... (2)

For periodicity, x[n] = x[n+N] (using cos(2π + A) = cos(A)):

2πf₀N = 2πk, where k is an integer

Solving: **f₀ = k/N**

Hence, a DT signal is periodic if its frequency is the ratio of two integers.

## Condition for Periodicity (Sum of Signals)

For x[n] = x₁[n] + x₂[n] to be periodic:
- x₁[n] and x₂[n] must each be periodic.
- The ratio of the frequencies of x₁ and x₂ must be integer/integer.

Period of x[n] = LCM of the periods of x₁[n] and x₂[n].

### Worked Examples: Check Periodicity and Find Period

**Example: x[n] = cos(3n)**

2πf₀ = 3 → f₀ = 3/(2π)

Comparing with x[n] = cos(ω₀n): ω₀ = 3

Since the frequency is not the ratio of two integers, the signal is **not periodic**.

**Example: x[n] = cos(21πn)**

ω₀ = 21π → 2πf₀ = 21π → f₀ = 21/2

Since the frequency is the ratio of two integers, the signal **is periodic**, with period 2.

**Practice (left as exercise in the lecture):**
- x[n] = cos(21πn) + cos(n)
- x[n] = cos(21πn) + cos(πn)

## Energy Signal and Power Signal

**Energy Signal**
- Finite energy and zero average power.
- Usually aperiodic signals are energy signals.

**Power Signal**
- Infinite energy and finite non-zero average power.
- Usually periodic signals are power signals.

### Worked Example

Determine whether x[n] = {3, 1, 0, 2+2j, 7} is an energy or power signal.

Since both the energy and average power are finite, the given DT signal is **neither** a pure energy signal nor a pure power signal (finite-length aperiodic sequence — finite energy, zero average power in the strict periodic sense, but treated here as an edge case per the lecture).

**Additional practice problems (left as exercises):**
- x[n] = (1/4)ⁿ u(n) — determine energy or power signal.
- x[n] = sin(πn/3) — determine energy or power signal.

## Even and Odd Signals

**Even Signal** (aka symmetric signal)
- CT: x(t) = x(-t)
- DT: x[n] = x[-n]

**Odd Signal** (aka antisymmetric signal)
- CT: x(t) = -x(-t)
- DT: x[n] = -x[-n]

### Decomposing a Signal into Odd-Even Components

Let x(n) = xₑ(n) + xₒ(n) ... (i)

Substituting n = -n:
x(-n) = xₑ(-n) + xₒ(-n) = xₑ(n) - xₒ(n) ... (ii)

(using xₑ(n) = xₑ(-n) for even signals, and xₒ(n) = -xₒ(-n) for odd signals)

Adding (i) and (ii): **xₑ(n) = ½[x(n) + x(-n)]** — even component

Subtracting (ii) from (i): **xₒ(n) = ½[x(n) - x(-n)]** — odd component

## Transformation of Independent Variable

Three operations: **shifting**, **scaling**, **folding (inversion)**.

### Shifting

Let x(t) be the original signal. The shifted version is x(t+a) and x(t-a).
- x(t+a): signal advanced by a.
- x(t-a): signal delayed by a.

### Scaling

Let x(t) be the original signal. The scaled version is x(at).
- If a < 1 in x(at): the signal is expanded by 1/a.
- If a > 1 in x(at): the signal is compressed by a.

### Inversion / Folding

Let x(t) be the original signal. The folded version is x(-t).

### Precedence Rule

If more than one operation is involved in a signal, follow this precedence order:
1. Shifting
2. Scaling
3. Folding

### Worked Example (Combined Operations)

For a given signal, find x(t-1), x(t+1), x(-t), x(1-t), x(2t+1), x(4-t/2).

> *Figures not reproduced: graphical construction of each transformed signal (original slides are graphic-only, showing original/advanced/delayed/folded/compressed/expanded waveforms).*

**Additional exercise:** find x[2n] and x[-n-2] (graphical solutions in original slides).

---
*Source: DSAP leccture 2.pdf*
