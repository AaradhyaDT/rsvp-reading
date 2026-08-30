# DSAP Lecture 13: Lattice / Lattice-Ladder Structure (Continued)

*Note: this lecture's content substantially overlaps with the second half of Lecture 11–12 (same derivation of the lattice recursion and the same worked example). It is preserved here as delivered, consolidated to avoid duplicate re-derivation — see Lecture 11–12 notes for the full step-by-step derivation of k₁, k₂ and the N=1/N=2 stage equations.*

## Lattice Structure of an IIR System — Recap

All-pole system:

$$H(z) = \frac{1}{1+\sum_{k=1}^{N}a_N(k)z^{-k}} = \frac{1}{A_N(z)}$$

$$y(n) = x(n) - \sum_{k=1}^{N}a_N(k)\,y(n-k)$$

**N=1:** $y(n)=x(n)-a_1(1)y(n-1)$, with $x(n)=f_1(n)$, $y(n)=f_0(n)=g_0(n)$, $k_1=a_1(1)$.

**N=2:** $y(n)=x(n)-a_2(1)y(n-1)-a_2(2)y(n-2)$, giving $a_2(1)=k_1(1+k_2)$, $a_2(2)=k_2$.

## Lattice Structure Conversion Formula

$$k_m = a_m(m), \qquad 1\le m\le N$$

$$a_{m-1}(k) = \frac{a_m(k)-a_m(m)\,a_m(m-k)}{1-a_m^2(m)}$$

## Lattice-Ladder Structure

For a general IIR filter:

$$H(z) = \frac{B_M(z)}{A_N(z)} = \frac{\sum_{k=0}^{M}b_M(k)z^{-k}}{1+\sum_{k=1}^{N}a_N(k)z^{-k}}$$

First implement the lattice structure (using coefficients $k_m$ derived from $A_N(z)$), then implement the remaining part via the ladder structure.

Output:

$$y(n) = \sum_{m=0}^{M}c_m\,g_m(n)$$

Ladder coefficient recursion:

$$c_m = b_m - \sum_{i=m+1}^{M}c_i\,a_i(i-m), \qquad m=M,M-1,\ldots,0$$

## Worked Example: Convert IIR Filter to Lattice-Ladder Realization

$$H(Z)=\frac{1+2z^{-1}+2z^{-2}+z^{-3}}{1+\frac{13}{24}z^{-1}+\frac{5}{8}z^{-2}+\frac{1}{3}z^{-3}}$$

**Setup:**
- $B_M(z)=1+2z^{-1}+2z^{-2}+z^{-3}$, M = 3
- $A_N(z)=1+\frac{13}{24}z^{-1}+\frac{5}{8}z^{-2}+\frac{1}{3}z^{-3}$, N = 3
- $a_3(0)=1,\; a_3(1)=\frac{13}{24},\; a_3(2)=\frac{5}{8},\; a_3(3)=\frac{1}{3}$

**Reflection coefficient (top stage):**

$$k_3=a_3(3)=\frac{1}{3}$$

Lower-order coefficients $a_2(k)$ then follow from the conversion formula (using $a_3(k)$ and $k_3$), continuing recursively down to $k_1$.

**Ladder coefficients:**

$$c_m = b_m - \sum_{i=m+1}^{M}c_i\,a_i(i-m), \qquad m=M,M-1,\ldots,0$$

$$c_3 = b_3 = 1$$

*(Remaining lattice-ladder block diagram is graphic-only in the original slide and is not reproduced here.)*

---
*Source: DSAP leccture 13.pdf*
