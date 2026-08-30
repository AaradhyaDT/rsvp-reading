# DSAP Lecture 7: Chapter 3 — Z-Transform (Introduction, ROC)

## Chapter 3 Overview

- Definition of the z-transform
- One-sided and two-sided transforms, ROC, left-sided, right-sided, and two-sided sequences, region of convergence, relationship to causality
- Inverse z-transform — by long division, by partial fraction expansion
- Z-transform properties: delay, advance, convolution, Parseval's theorem
- Z-transform function H(z) — transient and steady-state sinusoidal response, pole-zero relationship, stability
- **Marks weight: 10–12 marks**

## Z-Transform: Definition

The Z-domain (complex Z-plane) makes analysis of DT signals and LTI systems easier. The Z-transform of DT signal x(n) is defined as the power series:

$$X(Z) = \sum_{n=-\infty}^{\infty} x[n]\,z^{-n}$$

where Z is a complex variable. We can obtain x(n) back from X(Z) via the **inverse z-transform**: $x(n) \xleftrightarrow{Z} X(Z)$.

Since X(z) is an infinite power series, it exists only for values of z where the series converges. The **Region of Convergence (ROC)** is the set of z values for which X(Z) attains a finite value.

## Practice: Find Z-Transform and ROC

1. $x_1(n)=\{1,2,5,7,0,1\}$
2. $x_2(n)=\{1,2,5,7,0,1\}$ (shifted variant)
3. $x_2(n)=\{0,0,1,2,5,7,0,1\}$
4. $x_2(n)=\{2,4,5,7,0,1\}$
5. $x_2(n)=\delta(n)$
6. $x_2(n)=\delta(n-k)$
7. $x_2(n)=\delta(n+k)$

(Finite duration signals — problem set; worked solutions not detailed on these slides.)

## Worked Example 1: Z-Transform of $x[n]=(1/2)^n u(n)$

$$X(Z) = \sum_{n=-\infty}^{\infty}x[n]z^{-n} = \sum_{n=0}^{\infty}\left(\frac{1}{2}\right)^n z^{-n}$$

Using the geometric series identity $\sum_{n=0}^{\infty}A^n = \frac{1}{1-A}$ if $|A|<1$:

$$X(Z) = \sum_{n=0}^{\infty}\left(\frac{1}{2}z^{-1}\right)^n = \frac{1}{1-\frac{1}{2}z^{-1}}, \qquad \text{if } \left|\frac{1}{2}z^{-1}\right|<1 \;\Rightarrow\; \boxed{|Z|>\frac{1}{2}}$$

## Worked Example 2: Z-Transform of $x[n]=a^n u(n)$

$$X(Z) = \sum_{n=0}^{\infty}a^n z^{-n} = \sum_{n=0}^{\infty}(az^{-1})^n = \frac{1}{1-az^{-1}}, \qquad \text{ROC: } |Z|>|a|$$

## Worked Example 3: Z-Transform of $x[n]=-a^n u(-n-1)$

$$X(Z) = \sum_{n=-\infty}^{-1} -a^n z^{-n}$$

Let $l=-n$:

$$X(Z) = -\sum_{l=1}^{\infty}(a^{-1}z)^l = -\frac{a^{-1}z}{1-a^{-1}z}, \qquad \text{if }|a^{-1}z|<1$$

$$\boxed{X(Z) = \frac{1}{1-az^{-1}}, \qquad \text{ROC: } |z|<|a|}$$

## Worked Example 4: Two-Sided Signal

$x(n)=a^n u(n) + b^n u(-n-1)$.

Split into two parts:

$$X_1(Z) = \sum_{n=0}^{\infty}(az^{-1})^n = \frac{1}{1-az^{-1}}, \qquad |Z|>|a|$$

$$X_2(Z) = -\sum_{l=1}^{\infty}(b^{-1}z)^l = -\frac{1}{1-bz^{-1}}, \qquad |Z|<|b|$$

**Convergence cases:**
- If $|a|>|b|$: no common ROC region → the z-transform does not converge; X(z) does not exist.
- If $|b|>|a|$: there is a common region of ROC, and the transform converges:

$$X(Z) = \frac{1}{1-az^{-1}}-\frac{1}{1-bz^{-1}}, \qquad \text{ROC: } |a|<|Z|<|b|$$

## Infinite Duration Signals and ROC — Cases of Two-Sided Signal

- Right-sided
- Left-sided
- Finite-duration two-sided

---
*Source: DSAP lecture 7.pdf*
