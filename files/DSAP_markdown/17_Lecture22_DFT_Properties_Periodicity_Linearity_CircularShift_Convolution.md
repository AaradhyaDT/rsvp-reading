# DSAP Lecture 22: Properties of DFT — Periodicity, Linearity, Circular Shift, Convolution

## Revision: DFT / IDFT / Twiddle Factor / Matrix Form

$$X(k)=\sum_{n=0}^{N-1}x(n)\,e^{-j\frac{2\pi}{N}kn}, \quad k=0,\ldots,N-1 \qquad x(n)=\frac{1}{N}\sum_{k=0}^{N-1}X(k)\,e^{j\frac{2\pi}{N}kn}, \quad n=0,\ldots,N-1$$

In twiddle factor form: $X(k)=\sum_{n=0}^{N-1}x(n)W_N^{kn}$, $x(n)=\dfrac{1}{N}\sum_{k=0}^{N-1}X(k)W_N^{-kn}$, with $W_N=e^{-j\frac{2\pi}{N}}$.

Matrix form: $X_N=W_Nx_N$ (DFT), $x_N=\dfrac{1}{N}W_N^{*}X_N$ (IDFT).

**Revision worked example:** 2-point DFT of x(n)={1,1} → X(k) = {2, 0} (see Lecture 21 for full derivation).

## Properties of DFT

- Periodicity
- Linearity
- Symmetry properties
- Circular time shift
- Circular convolution
- Time reversal
- Circular correlation
- Parseval's theorem

## Periodicity

$$x(n)\xrightarrow{\text{DFT}_N}X(k) \quad\Rightarrow\quad X(k+N)=X(k)$$

**Proof:**

$$X(k+N)=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}(k+N)n} = \sum_{n=0}^{N-1}x(n)\left(\cos\left(\frac{2\pi}{N}(k+N)n\right)+j\sin\left(\frac{2\pi}{N}(k+N)n\right)\right)$$

Since $\frac{2\pi}{N}(k+N)n = \frac{2\pi}{N}kn + 2\pi n$, and cosine/sine are periodic in $2\pi$:

$$X(k+N)=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}kn} = X(k)$$

Similarly, for IDFT: $x(n+N)=x(n)$ (replace n by n+N in the IDFT synthesis sum).

## Linearity

$$x_1(n)\xrightarrow{\text{DFT}_N}X_1(k), \qquad x_2(n)\xrightarrow{\text{DFT}_N}X_2(k)$$

$$ax_1(n)+bx_2(n) \xrightarrow{\text{DFT}_N} aX_1(k)+bX_2(k)$$

**Proof:**

$$X(k)=\sum_{n=0}^{N-1}\big(ax_1(n)+bx_2(n)\big)e^{-j\frac{2\pi}{N}kn} = a\sum_{n=0}^{N-1}x_1(n)e^{-j\frac{2\pi}{N}kn}+b\sum_{n=0}^{N-1}x_2(n)e^{-j\frac{2\pi}{N}kn} = aX_1(k)+bX_2(k)$$

## Circular Shift

During DFT operation, the range of n and k must always stay within 0 to N-1 — moving beyond this range gives unexpected results.

Consider $x(n)=\{x_0,x_1,x_2,x_3\}$, N=4, n runs 0 to 3.

- Shifting (delaying) x(n) by 1, i.e. x(n-1), pushes the range beyond N-1 — not directly usable for DFT.
- Shifting (advancing) x(n) by 1, i.e. x(n+1), pushes the range below 0 — also not directly usable.

**Solution: circular shift** (also called modulo shift). If x(n) is the original signal, $x(n-a)_N$ and $x(n+a)_N$ denote the circular shift of x(n), where N is the number of elements in x(n) — the shift is always kept within range 0 to N-1.

### Circular Shift Examples via Modulo Arithmetic

**$x(n-1)_4 = x((n-1)\bmod 4)$:**

| n | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| x(n) | x₀ | x₁ | x₂ | x₃ |
| n-1 | -1 | 0 | 1 | 2 |
| (n-1)%4 | 3 | 0 | 1 | 2 |

**$x(n-2)_4$:**

| n | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| n-2 | -2 | -1 | 0 | 1 |
| (n-2)%4 | 2 | 3 | 0 | 1 |

**$x(n-3)_4$:**

| n | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| n-3 | -3 | -2 | -1 | 0 |
| (n-3)%4 | 1 | 2 | 3 | 0 |

**$x(n+1)_4$:**

| n | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| n+1 | 1 | 2 | 3 | 4 |
| (n+1)%4 | 1 | 2 | 3 | 0 |

**$x(n+2)_4$:**

| n | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| n+2 | 2 | 3 | 4 | 5 |
| (n+2)%4 | 2 | 3 | 0 | 1 |

*(Circular vs. linear-scale visual representations for each shift are graphic-only in the original slides.)*

## Time Shift and Frequency Shift Properties

**Time Shift Property:**

$$x(n)\xrightarrow{\text{DFT}_N}X(k) \quad\Rightarrow\quad x(n-n_0)_N \xrightarrow{\text{DFT}_N} W_N^{kn_0}X(k), \qquad W_N^{kn_0}=e^{-j\frac{2\pi}{N}kn_0}$$

**Frequency Shift Property:**

$$x(n)\xrightarrow{\text{DFT}_N}X(k) \quad\Rightarrow\quad W_N^{-k_0n}x(n) \xrightarrow{\text{DFT}_N} X(k-k_0)_N, \qquad W_N^{-k_0n}=e^{j\frac{2\pi}{N}k_0n}$$

## Convolution Property

Convolution in the time domain results in multiplication in the frequency domain.

If x(n) and h(n) are both defined from 0 to N-1 (each of length N), the ordinary **linear convolution**:

$$y(n)=x(n)*h(n)=\sum_{m=0}^{N-1}x(m)h(n-m)$$

has length **2N-1** — too long to be represented by an N-point DFT directly. We therefore define **circular convolution** to resolve this:

$$x(n)\circledast_N h(n) = \sum_{m=0}^{N-1}x(m)\,h(n-m)_N$$

This has length exactly N, and:

$$x(n)\circledast_N h(n) \xrightarrow{\text{DFT}_N} X(k)H(k)$$

Also (dual relation): $x(n)h(n) \xrightarrow{\text{DFT}_N} \dfrac{1}{N}\left(X(k)\circledast_N H(k)\right)$

## Worked Example: Circular Convolution

$x(n)=\{1,2,0,1\}$ and $h(n)=\{2,2,1,1\}$. Both have 4 elements, so N=4.

$$y(n)=x(n)\circledast_4 h(n) = \sum_{m=0}^{3}x(m)h(n-m)_4$$

$$= x(0)h(n)_4 + x(1)h(n-1)_4 + x(2)h(n-2)_4 + x(3)h(n-3)_4 = h(n)+2h(n-1)_4+h(n-3)_4$$

$$\boxed{y(n)=\{6,7,6,5\}}$$

---
*Source: DSAP lecture 22.pdf*
