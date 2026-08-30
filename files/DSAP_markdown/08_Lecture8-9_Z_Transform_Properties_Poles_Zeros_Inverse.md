# DSAP Lectures 8–9: Z-Transform Properties, Poles/Zeros, Inverse Z-Transform

*(Lecture 9's slides largely repeat and continue Lecture 8's material — both are consolidated here in a single, non-redundant pass.)*

## Recap: Two-Sided Signal Example (from Lecture 7)

$x(n)=a^n u(n) + b^n u(-n-1)$:

$$X_1(Z) = \frac{1}{1-az^{-1}}, \; |Z|>|a| \qquad X_2(Z) = -\frac{1}{1-bz^{-1}}, \; |Z|<|b|$$

- If $|a|>|b|$: no common ROC → X(z) doesn't exist.
- If $|b|>|a|$: common ROC exists:

$$X(Z)=\frac{1}{1-az^{-1}}-\frac{1}{1-bz^{-1}}, \qquad |a|<|Z|<|b|$$

## Infinite Duration Signals and ROC

**Cases of two-sided signal:**
- Right-sided
- Left-sided
- Finite-duration two-sided

## Properties of the Z-Transform

- Linearity
- Time shifting
- Scaling in the Z-domain
- Time reversal
- Differentiation in the Z-domain
- Convolution

### Linearity

$$x_1(n)\xrightarrow{Z}X_1(Z), \quad x_2(n)\xrightarrow{Z}X_2(Z)$$
$$ax_1(n)+bx_2(n) \xrightarrow{Z} aX_1(Z)+bX_2(Z)$$

ROC of the overall transform is the **intersection** of the individual ROCs.

### Time Shifting

$$x(n)\xrightarrow{Z}X(Z) \quad\Rightarrow\quad x(n-k)\xrightarrow{Z}z^{-k}X(Z)$$

ROC is the same as that of x(n), except possibly for $z=0$ (if $k>0$) and $z=\infty$ (if $k<0$).

### Scaling in the Z-Domain

If $x(n)\xrightarrow{Z}X(Z)$ with ROC $r_1<|Z|<r_2$, then:

$$a^n x(n) \xrightarrow{Z} X(a^{-1}Z), \qquad \text{ROC: } |a|r_1<|Z|<|a|r_2$$

**Derivation:**

$$Z[a^n x(n)] = \sum_{n=-\infty}^{\infty}a^n x(n)z^{-n} = \sum_{n=-\infty}^{\infty}x(n)(a^{-1}z)^{-n} = X(a^{-1}Z)$$

### Time Reversal

If $x(n)\xrightarrow{Z}X(Z)$ with ROC $r_1<|Z|<r_2$, then:

$$x(-n)\xrightarrow{Z}X(Z^{-1}), \qquad \text{ROC: } \frac{1}{r_2}<|Z|<\frac{1}{r_1}$$

**Derivation:** let $l=-n$:

$$Z[x(-n)] = \sum_{l=-\infty}^{\infty}x(l)z^{l} = \sum_{l=-\infty}^{\infty}x(l)(Z^{-1})^{-l} = X(Z^{-1})$$

### Differentiation in the Z-Domain

If $x(n)\xrightarrow{Z}X(Z)$ with ROC $r_1<|Z|<r_2$, then:

$$n\,x(n) \xrightarrow{Z} -Z\frac{d}{dZ}X(Z), \qquad \text{ROC: } r_1<|Z|<r_2$$

**Derivation:**

$$\frac{d}{dZ}X(Z) = \sum_{n=-\infty}^{\infty}-n\,x(n)z^{-n-1} = -Z^{-1}\sum_{n} n\,x(n)z^{-n} = -Z^{-1}\,Z[n\,x(n)]$$

$$\Rightarrow \quad Z[n\,x(n)] = -Z\frac{d}{dZ}X(Z)$$

### Convolution

If $x_1(n)\xrightarrow{Z}X_1(Z)$, $x_2(n)\xrightarrow{Z}X_2(Z)$, then:

$$x_1(n)*x_2(n) \xrightarrow{Z} X_1(Z)X_2(Z)$$

**Derivation:** starting from $x_1(n)*x_2(n) = \sum_{k=-\infty}^{\infty}x_1(k)x_2(n-k)$:

$$X(Z) = \sum_{n=-\infty}^{\infty}\left[\sum_{k=-\infty}^{\infty}x_1(k)x_2(n-k)\right]z^{-n} = \sum_{k=-\infty}^{\infty}x_1(k)z^{-k}\sum_{n=-\infty}^{\infty}x_2(n-k)z^{-(n-k)} = X_1(Z)X_2(Z)$$

ROC of the overall transform is the **intersection** of the individual ROCs.

**Practice problem:** determine the Z-transform of $x(n)=n\,a^n u(n)$ (uses the differentiation property above).

**Additional practice (Lecture 9):** find the Z-transform of:
1. $x(n)=[3(2)^n-4(3)^n]u(n)$
2. $x(n)=\cos(\omega_0 n)u(n)$

## Poles and Zeros of the Z-Transform

The Z-transform can be represented as a ratio of two polynomials in $z^{-1}$ (or z):

$$X(Z) = \frac{N(Z)}{D(Z)} = \frac{b_0+b_1z^{-1}+b_2z^{-2}+\cdots+b_Mz^{-M}}{a_0+a_1z^{-1}+a_2z^{-2}+\cdots+a_Mz^{-M}} = \frac{\sum_{k=0}^{M}b_k z^{-k}}{\sum_{k=0}^{M}a_k z^{-k}}$$

**Poles:** values of z for which $X(Z)=\infty$.
**Zeros:** values of z for which $X(Z)=0$.

## Inverse Z-Transform

Given X(Z), we recover x(n) using one of three methods:
1. Direct evaluation by contour integration
2. Power series expansion
3. Partial fraction expansion

### Method 1: Inversion by Power Series Expansion

A Z-transform X(Z) with a given ROC can be expanded as a power series:

$$X(Z) = \sum_{n=-\infty}^{\infty}c_n z^{-n} \quad \Rightarrow \quad x(n) = c_n$$

### Worked Example: Power Series Expansion

$$X(Z)=\frac{1}{1-1.5z^{-1}+0.5z^{-2}}$$

**Case 1: |Z| > 1** (expand as right-sided sequence via long division)

$$x(n) = \left\{1, \tfrac{3}{2}, \tfrac{7}{4}, \tfrac{15}{8}, \tfrac{31}{16}, \ldots\right\}$$

**Case 2: |Z| < 0.5** (expand as left-sided sequence)

$$x(n) = \{\ldots, 62, 30, 14, 6, 2, 0, 0\}$$

### Method 2: Inversion by Partial Fraction

**Practice problem 1:** find the inverse Z-transform of

$$X(Z)=\frac{1}{1-1.5z^{-1}+0.5z^{-2}}$$

for (a) $|Z|>1$, (b) $|Z|<0.5$, (c) $0.5<|Z|<1$ — the three different ROC choices give three different (right-sided, left-sided, two-sided) inverse sequences from the same X(Z), illustrating that ROC is essential to a unique inverse.

**Practice problem 2:** determine the causal signal x(n) where:

$$X(Z)=\frac{1+z^{-1}}{1-z^{-1}+0.5z^{-2}}$$

**Practice problem 3:** determine the causal signal x(n) where:

$$X(Z)=\frac{1}{(1+z^{-1})(1-z^{-1})^2}$$

---
*Sources: DSAP lecture 8.pdf, DSAP lecture 9.pdf*
