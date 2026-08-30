# DSAP Lecture 3: Discrete Time Fourier Series

## Revision of Lecture 2

- Periodicity of discrete time signal
- Energy signal, power signal
- Even and odd signal
- Transformation of independent variable

## DT Fourier Series — Derivation

Consider a DT periodic signal x[n] with period N such that x[n] = x[n+N].

The sum of harmonically related weighted complex exponentials (synthesis equation) is given by:

$$x[n] = \sum_{k=0}^{N-1} a_k\, e^{jk\omega_0 n} \quad \text{...(1)}$$

Multiplying both sides by $e^{-jl\omega_0 n}$:

$$x[n]\,e^{-jl\omega_0 n} = \sum_{k=0}^{N-1} a_k\, e^{j(k-l)\omega_0 n}\,$$

Summing both sides over n = 0 to N-1:

$$\sum_{n=0}^{N-1} x[n]\,e^{-jl\omega_0 n} = \sum_{n=0}^{N-1}\sum_{k=0}^{N-1} a_k\, e^{j(k-l)\omega_0 n} \quad \text{...(2)}$$

Using the identity $\sum_{n=0}^{N-1} e^{jk\omega_0 n} = N$ for k = 0 (equivalently $\sum a^n = N$ for a = 1), the inner sum collapses at k = l, so equation (2) becomes:

$$\sum_{n=0}^{N-1} x[n]\,e^{-jl\omega_0 n} = a_l N \quad \text{...(3)}$$

Solving for the coefficient (analysis equation), and generalizing l → k:

$$\boxed{a_k = \frac{1}{N}\sum_{n=0}^{N-1} x[n]\,e^{-jk\omega_0 n}}$$

## Worked Example 1: Coefficients of x[n] = cos(πn/3)

Comparing x[n] = cos(ω₀n) = cos(πn/3), we get **ω₀ = π/3**.

Period: N = 2π/ω₀ = 2π/(π/3) = 6.

**Direct computation of a₀** using the analysis equation:

$$a_0 = \frac{1}{6}\left(\cos 0 + \cos\frac{\pi}{3} + \cos\frac{2\pi}{3} + \cos\pi + \cos\frac{4\pi}{3} + \cos\frac{5\pi}{3}\right)$$

$$a_0 = \frac{1}{6}(1 + 0.5 - 0.5 - 1 + 0.5 - 0.5) = 0$$

(a₁, a₂, a₃, a₄, a₅ can be calculated similarly.)

**Alternate method — using Euler's formula directly:**

$$x[n] = \cos\left(\frac{\pi n}{3}\right) = \frac{1}{2}e^{j\frac{\pi}{3}n} + \frac{1}{2}e^{-j\frac{\pi}{3}n}$$

Comparing with the synthesis equation $x[n] = \sum a_k e^{jk\omega_0 n}$:

$$a_1 = \frac{1}{2}, \quad a_{-1} = \frac{1}{2} \; (\text{equivalently } a_5 = \tfrac{1}{2} \text{ using periodicity mod } N=6)$$

**Result summary:**

| Coefficient | Value |
|---|---|
| a₀ | 0 |
| a₁ | 1/2 |
| a₂ | 0 |
| a₃ | 0 |
| a₄ | 0 |
| a₅ | 1/2 |

## Worked Example 2: Coefficients of x[n] = {1, 1, 0, 0}

N = 4. Analysis equation: $a_k = \frac{1}{4}\sum_{n=0}^{3} x[n]\,e^{-jk\omega_0 n}$, with ω₀ = 2π/4 = π/2.

**a₀:**
$$a_0 = \frac{1}{4}(x[0]+x[1]+x[2]+x[3]) = \frac{1}{4}(1+1+0+0) = \frac{1}{2}$$

**a₁:**
$$a_1 = \frac{1}{4}\left(x[0]e^{0} + x[1]e^{-j\frac{\pi}{2}}\right) = \frac{1}{4}(1 + \cos\tfrac{\pi}{2} - j\sin\tfrac{\pi}{2}) = \frac{1}{4}(1-j)$$

**a₂:**
$$a_2 = \frac{1}{4}\left(x[0]e^0 + x[1]e^{-j\pi}\right) = \frac{1}{4}(1 + \cos\pi - j\sin\pi) = \frac{1}{4}(1-1+0) = 0$$

**a₃:**
$$a_3 = \frac{1}{4}\left(x[0]e^0 + x[1]e^{-j\frac{3\pi}{2}}\right) = \frac{1}{4}\left(1 + \cos\frac{3\pi}{2} - j\sin\frac{3\pi}{2}\right) = \frac{1}{4}(1 + 0 + j) = \frac{1}{4}(1+j)$$

**Result summary:**

| Coefficient | Value |
|---|---|
| a₀ | 1/2 |
| a₁ | (1-j)/4 |
| a₂ | 0 |
| a₃ | (1+j)/4 |

(Magnitude/phase can be found via $\lvert x \rvert = \sqrt{a^2+b^2}$, $\angle x = \tan^{-1}(b/a)$ for x = a+jb.)

## Parseval's Theorem for DT Periodic Signal

$$P_{avg} = \frac{1}{N}\sum_{n=0}^{N-1} |x[n]|^2 = \sum_{k=0}^{N-1} |a_k|^2$$

**Proof sketch:**

$$P_{avg} = \frac{1}{N}\sum_{n=0}^{N-1} x[n]x^*[n] = \frac{1}{N}\sum_{n=0}^{N-1}\sum_{k=0}^{N-1} x[n]\,a_k^*\,e^{-jk\omega_0 n}$$

$$= \sum_{k=0}^{N-1} a_k^* \left(\frac{1}{N}\sum_{n=0}^{N-1} x[n]e^{-jk\omega_0 n}\right) = \sum_{k=0}^{N-1} a_k^* a_k = \sum_{k=0}^{N-1} |a_k|^2$$

## Worked Example 3: x[n] = sin(ω₀n), N = 5

Plot magnitude and phase spectra; find average power.

Using Euler's formula:

$$\sin(\omega_0 n) = \frac{e^{j\omega_0 n} - e^{-j\omega_0 n}}{2j}, \quad \omega_0 = \frac{2\pi}{5}$$

Rewriting the negative-frequency term using periodicity (mod N = 5), the coefficients come out as:

| Coefficient | Value |
|---|---|
| a₀ | 0 |
| a₁ | 1/(2j) |
| a₂ | 0 |
| a₃ | 0 |
| a₄ (≡ a₋₁) | -1/(2j) |

*(Original slide labels the negative-index coefficient "a₅" using mod-N indexing.)*

> *Figure not reproduced: magnitude and phase spectrum plot (original slide is graphic-only).*

**Average power (via Parseval's theorem):**

$$P_{avg} = \sum_{k=0}^{4}|a_k|^2 = 0 + \left|\frac{1}{2j}\right|^2 + 0 + 0 + \left|\frac{1}{2j}\right|^2 = \frac{1}{4}+\frac{1}{4} = \frac{1}{2}$$

## Properties of DT Fourier Series

- Linearity
- Time shifting
- Time reversal
- Conjugation
- Frequency shifting
- Multiplication

*(Frequency shifting was noted in the lecture as part of Assignment 3, not derived on slide.)*

### Linearity Property

If $x[n] \xrightarrow{FS} a_k$ and $y[n] \xrightarrow{FS} b_k$, then:

$$z[n] = Ax[n] + By[n] \xrightarrow{FS} c_k = Aa_k + Bb_k$$

### Time Shifting Property

If $x[n] \xrightarrow{FS} a_k$, then:

$$x(n-n_0) \xrightarrow{FS} b_k = a_k\, e^{-jk\omega_0 n_0}$$

### Time Reversal Property

If $x[n] \xrightarrow{FS} a_k$, then:

$$x[-n] \xrightarrow{FS} b_k = a_{-k}$$

### Multiplication Property

If $x(n) \xrightarrow{FS} a_k$ and $y(n) \xrightarrow{FS} b_k$, then:

$$z(n) = x(n)y(n) \xrightarrow{FS} c_k = \sum_{l=-\infty}^{\infty} a_l\, b_{k-l}$$

(discrete convolution of the coefficient sequences)

### Conjugation and Conjugate Symmetry

If $x(n) \xrightarrow{FS} a_k$, then:

$$x^*(n) \xrightarrow{FS} b_k = a_{-k}^*$$

---
*Source: DSAP leccture 3.pdf*
