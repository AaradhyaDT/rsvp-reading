# DSAP Lectures 11–12: Implementation / Structures of IIR Discrete-Time Systems

## Implementation of Discrete-Time Systems

Focused on realization of LTI discrete-time systems. Various configurations/structures for realizing any FIR or IIR discrete-time system:

- Direct forms (I and II)
- Cascade and parallel form
- Lattice and ladder structures

## Basic Structure for IIR Systems

A causal IIR system is represented by the difference equation:

$$\sum_{k=0}^{N} a_k\, y[n-k] = \sum_{k=0}^{M} b_k\, x[n-k]$$

Rearranged (isolating y(n), with a₀ normalized to 1):

$$y(n) = -\sum_{k=1}^{N}a_k\,y(n-k) + \sum_{k=0}^{M}b_k\,x(n-k)$$

Taking the Z-transform:

$$Y(z)\left[1+\sum_{k=1}^{N}a_k z^{-k}\right] = X(z)\sum_{k=0}^{M}b_k z^{-k}$$

$$\boxed{H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^{M}b_k z^{-k}}{1+\sum_{k=1}^{N}a_k z^{-k}}}$$

## Direct Form Realizations of IIR Filters

The transfer function factors into two cascaded stages: $H(z)=H_1(z)H_2(z)$

$$H_1(z) = \sum_{k=0}^{M}b_k z^{-k}, \qquad H_2(z) = \frac{1}{1+\sum_{k=1}^{N}a_k z^{-k}}$$

**Direct Form I** implements $H_1(z)$ then $H_2(z)$ in cascade (zeros stage, then poles stage).
**Direct Form II** swaps the order — poles stage $H_1(z)$ then zeros stage $H_2(z)$ — sharing delay elements to reduce memory.

### Direct Form I — Derivation

For H₁(z) (all-zero stage), with intermediate signal w(n):

$$\frac{W(z)}{X(z)} = b_0 z^0+b_1z^{-1}+b_2z^{-2}+\cdots+b_Mz^{-M}$$

Inverse Z-transform:

$$w(n)=b_0x(n)+b_1x(n-1)+b_2x(n-2)+\cdots+b_Mx(n-M)$$

For H₂(z) (all-pole stage):

$$\frac{W(z)}{Y(z)} = 1+a_1z^{-1}+a_2z^{-2}+\cdots+a_Nz^{-N}$$

Solving for Y(z) and inverse transforming:

$$y(n)=w(n)-a_1y(n-1)-a_2y(n-2)-\cdots-a_Ny(n-N)$$

**Computational complexity (Direct Form I):**
- Multiplications: M+N+1
- Memory locations: M+N
- Additions: M+N

### Direct Form II — Derivation

Here the pole stage comes first, with intermediate signal u(n):

$$\frac{X(z)}{U(z)} = 1+a_1z^{-1}+a_2z^{-2}+\cdots+a_Nz^{-N}$$

$$u(n)=x(n)-a_1u(n-1)-a_2u(n-2)-\cdots-a_Nu(n-N)$$

Then the zero stage:

$$\frac{Y(z)}{U(z)} = b_0z^0+b_1z^{-1}+\cdots+b_Mz^{-M}$$

$$y(n)=b_0u(n)+b_1u(n-1)+b_2u(n-2)+\cdots+b_Mu(n-M)$$

**Computational complexity (Direct Form II):**
- Multiplications: M+N+1
- Memory locations: **largest of [M, N]** (fewer than Direct Form I — the key advantage)
- Additions: M+N

## Worked Example: Direct Form I & II Realization

Given: $H(Z)=\dfrac{0.28z^2+0.319z+0.04}{0.5z^3+0.3z^2+0.17z-0.2}$

Normalizing to the standard form $H(z)=\dfrac{\sum b_k z^{-k}}{1+\sum a_k z^{-k}}$ (dividing through so the leading denominator coefficient is 1):

$$H(Z)=\frac{0.56z^{-1}+0.638z^{-2}+0.08z^{-3}}{1+0.6z^{-1}+0.34z^{-2}-0.4z^{-3}}$$

*(Direct Form I / II block diagrams are graphic-only in the original slides and are not reproduced here.)*

## Cascade Form for IIR Filters

Total transfer function expressed as a product of multiple lower-order transfer functions:

$$H(z)=H_1(z)H_2(z)H_3(z)\cdots H_k(z)$$

### Worked Example

$$H(z)=\frac{2(z+2)}{z(z-0.1)(z+0.5)(z+0.4)}$$

Multiplying numerator and denominator to express in terms of $z^{-1}$ and factoring out the common $z^{-4}$ scaling gives the cascade form:

$$H(z)=\frac{2z^{-3}(1+2z^{-1})}{(1-0.1z^{-1})(1+0.5z^{-1})(1+0.4z^{-1})}$$

$$H(z)=2\,H_1(z)\,H_2(z)\,H_3(z)\,H_4(z)$$

### Worked Example: Realize a Difference Equation in Cascade Form

$$y(n)=\frac{3}{4}y(n-1)-\frac{1}{8}y(n-2)+x(n)+\frac{1}{3}x(n-1) \quad \text{in cascade form}$$

Taking the Z-transform:

$$Y(z)=\frac{3}{4}z^{-1}Y(z)-\frac{1}{8}z^{-2}Y(z)+X(z)+\frac{1}{3}z^{-1}X(z)$$

$$H(z)=\frac{Y(z)}{X(z)} = \frac{1+\frac{1}{3}z^{-1}}{1-\frac{3}{4}z^{-1}+\frac{1}{8}z^{-2}} = \frac{1+\frac{1}{3}z^{-1}}{\left(1-\frac{1}{2}z^{-1}\right)\left(1-\frac{1}{4}z^{-1}\right)}$$

Factoring the denominator into two first-order stages gives:

$$H_1(z) = \frac{1+\frac{1}{3}z^{-1}}{1-\frac{1}{2}z^{-1}}, \qquad H_2(z)=\frac{1}{1-\frac{1}{4}z^{-1}}$$

$$H(z)=H_1(z)H_2(z)$$

## Parallel Form for IIR Filters

Starting from the general transfer function:

$$H(z) = \frac{\sum_{k=0}^{M}b_k z^{-k}}{1+\sum_{k=1}^{N}a_k z^{-k}}$$

Using **partial fractions**, this can be represented as:

$$H(z)=C+H_1(z)+H_2(z)+\cdots+H_k(z)$$

This is the parallel form. It is generally used for **high-speed filtering applications**.

### Worked Example

$$H(Z)=\frac{3(2z^2+5z+4)}{(2z+1)(z+2)}$$

Rewrite and divide by z:

$$F(z)=\frac{H(z)}{z} = \frac{\frac{3}{2}(2z^2+5z+4)}{z(z+\frac{1}{2})(z+2)}$$

Partial fraction expansion:

$$F(z)=\frac{A_1}{z}+\frac{A_2}{z+\frac{1}{2}}+\frac{A_3}{z+2}$$

Solving (left as exercise per the lecture): $A_1=6$, $A_2=-4$, $A_3=1$.

$$F(z)=\frac{6}{z}-\frac{4}{z+\frac{1}{2}}+\frac{1}{z+2}$$

$$H(z)=z\,F(z) = 6 - \frac{4}{1+\frac{1}{2}z^{-1}}+\frac{1}{1+2z^{-1}}$$

## Lattice Structure of an IIR System (All-Pole)

For an all-pole system with system function:

$$H(z) = \frac{1}{1+\sum_{k=1}^{N}a_N(k)z^{-k}} = \frac{1}{A_N(z)}$$

Taking the inverse Z-transform:

$$y(n) = x(n) - \sum_{k=1}^{N}a_N(k)\,y(n-k)$$

### N = 1 Stage

$$y(n)=x(n)-a_1(1)y(n-1)$$

Lattice form definitions:
$$x(n)=f_1(n), \qquad y(n)=f_0(n)=g_0(n)$$
$$f_0(n)=f_1(n)-k_1 g_0(n-1) = x(n)-k_1y(n-1)$$
$$g_1(n)=k_1f_0(n)+g_0(n-1)=k_1y(n)+y(n-1)$$
$$k_1 = a_1(1)$$

### N = 2 Stage

$$y(n)=x(n)-a_2(1)y(n-1)-a_2(2)y(n-2)$$

Lattice recursion:
$$f_2(n)=x(n)$$
$$f_1(n)=f_2(n)-k_2g_1(n-1)$$
$$g_2(n)=k_2f_1(n)+g_1(n-1)$$
$$f_0(n)=f_1(n)-k_1g_0(n-1)$$
$$g_1(n)=k_1f_0(n)+g_0(n-1)$$

Substituting through and comparing coefficients:

$$y(n)=x(n)-k_1(1+k_2)y(n-1)-k_2y(n-2)$$

$$\Rightarrow \quad a_2(1)=k_1(1+k_2), \qquad a_2(2)=k_2$$

And similarly:

$$g_2(n)=k_2y(n)+k_1(1+k_2)y(n-1)-k_2y(n-2)$$

### Lattice Structure Conversion Formula (General Recursion)

$$k_m = a_m(m), \qquad 1\le m\le N$$

$$a_{m-1}(k) = \frac{a_m(k)-a_m(m)\,a_m(m-k)}{1-a_m^2(m)}$$

## Lattice-Ladder Structure

For a general IIR filter with both zeros and poles:

$$H(z) = \frac{B_M(z)}{A_N(z)} = \frac{\sum_{k=0}^{M}b_M(k)z^{-k}}{1+\sum_{k=1}^{N}a_N(k)z^{-k}}$$

First implement the **lattice** structure using coefficients $k_m$ for the denominator $A_N(z)$; implement the remaining part using the **ladder** structure.

Output:

$$y(n) = \sum_{m=0}^{M}c_m\,g_m(n)$$

where $c_m$ is the ladder coefficient, obtained by the recursive relation:

$$c_m = b_m - \sum_{i=m+1}^{M}c_i\,a_i(i-m), \qquad m=M,M-1,\ldots,0$$

### Worked Example: Convert IIR Filter to Lattice-Ladder Form

$$H(Z)=\frac{1+2z^{-1}+2z^{-2}+z^{-3}}{1+\frac{13}{24}z^{-1}+\frac{5}{8}z^{-2}+\frac{1}{3}z^{-3}}$$

From $A_N(z)$: $a_3(0)=1$, $a_3(1)=\frac{13}{24}$, $a_3(2)=\frac{5}{8}$, $a_3(3)=\frac{1}{3}$.

$B_M(z) = 1+2z^{-1}+2z^{-2}+z^{-3}$, M = 3, N = 3.

$$k_3 = a_3(3) = \frac{1}{3}$$

Using the recursion $a_{m-1}(k)=\dfrac{a_m(k)-a_m(m)a_m(m-k)}{1-a_m^2(m)}$, compute successive reflection coefficients $k_2, k_1$ (left as continued exercise).

**Ladder coefficients:**

$$c_m = b_m - \sum_{i=m+1}^{M}c_i\,a_i(i-m), \qquad m=M,\ldots,0$$

$$c_3 = b_3 = 1$$

(remaining ladder coefficients computed by working down from m=3 to m=0)

---
*Sources: DSAP leccture 11and12.pdf*
