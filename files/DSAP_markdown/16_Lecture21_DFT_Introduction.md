# DSAP Lecture 21: Discrete Fourier Transform — Introduction

## Motivation

Frequency analysis of a discrete time signal can be conveniently performed on a digital signal processor. The Fourier transform of a DT signal is the **Discrete Time Fourier Transform (DTFT)**, represented as $X(e^{j\omega})$.

- $X(e^{j\omega})$ is a **continuous** function of frequency ω.
- A continuous function of frequency is not convenient to represent on a digital device.
- We can represent the sequence of samples of this continuous spectrum — this is the **Discrete Fourier Transform (DFT)**.
- DFT is the equally-spaced frequency samples of DTFT over one period.
- Sampling is done at N equally spaced points over the period.
- DFT is denoted X(K) — the discrete frequency sequence of finite length used to represent a discrete time sequence x(n) of finite length.

## DFT — Derivation

Let x(n) be an aperiodic, finite-duration DT signal with N terms (n = 0 to N-1), whose DTFT is:

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x(n)\,e^{-j\omega n} \quad \text{...(1)}$$

$X(e^{j\omega})$ is periodic with period $2\pi$. For simplicity, consider N equidistant samples in the interval 0 to $2\pi$, i.e. $0,1,2,\ldots,N-1$, spaced by $\dfrac{2\pi}{N}$.

Sampling eq(1) at these N points:

$$X\!\left(e^{j\frac{2\pi}{N}k}\right)=\sum_{n=0}^{N-1}x(n)\,e^{-j\frac{2\pi}{N}kn}, \qquad k=0,1,\ldots,N-1 \quad \text{...(2)}$$

In general we write:

$$\boxed{X(k)=\sum_{n=0}^{N-1}x(n)\,e^{-j\frac{2\pi}{N}kn}}$$

**X(k) is the DFT of x(n).**

Like DTFT, DFT exists in a transform pair, and x(n) can be recovered from X(k) — this is the **IDFT**:

$$\boxed{x(n) = \frac{1}{N}\sum_{k=0}^{N-1}X(k)\,e^{j\frac{2\pi}{N}kn}}$$

### Periodicity Note

$X(k)=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}kn}$ is **periodic with period N** — increasing n by N to n+N leaves the value unchanged. Similarly, $X(e^{j\omega})$ is periodic with period $2\pi$, which is divided into N equal intervals.

$x(n)=\text{IDFT}\{X(k)\}$ is also **forced to be periodic by N**, even though x(n) is originally a finite-duration signal.

**Important:** we must be careful to work within the period 0 to N-1 when performing DFT operations — the transform may give the wrong interpretation if we index below 0 or above N-1.

## Twiddle Factor

We define the **twiddle factor**:

$$W_N = e^{-j\frac{2\pi}{N}}$$

DFT and IDFT in terms of the twiddle factor:

$$X(k)=\sum_{n=0}^{N-1}x(n)\,W_N^{kn}, \qquad x(n)=\frac{1}{N}\sum_{k=0}^{N-1}X(k)\,W_N^{-kn}$$

## Worked Example 1: DFT of $x(n)=\delta(n)$

$$X(k)=\sum_{n=0}^{N-1}x(n)\,W_N^{kn} = x(0)e^0 = 1 \quad \text{for all } k$$

So $X(0)=X(1)=\cdots=X(N-1)=1$.

## Worked Example 2: DFT of $x(n)=\delta(n-m)$

$$X(k)=x(m)\,e^{-j\frac{2\pi}{N}km} = W_N^{km}$$

$$X(k)=\left[1,\;W_N^m,\;W_N^{2m},\;W_N^{3m},\;\ldots,\;W_N^{(N-1)m}\right]$$

## Worked Example 3: DFT of $x(n)=\cos\left(\dfrac{2\pi r n}{N}\right)$

Using Euler's formula:

$$x(n) = \cos\left(\frac{2\pi r n}{N}\right) = \frac{e^{j\frac{2\pi r n}{N}}+e^{-j\frac{2\pi r n}{N}}}{2} = \frac{1}{2}\left(W_N^{-rn}+W_N^{rn}\right)$$

$$X(k)=\frac{1}{2}\sum_{n=0}^{N-1}W_N^{-rn}W_N^{kn} + \frac{1}{2}\sum_{n=0}^{N-1}W_N^{rn}W_N^{kn} = X_1(k)+X_2(k)$$

$$X_1(k)=\frac{N}{2} \text{ if } k=r,\; 0 \text{ otherwise} \qquad X_2(k)=\frac{N}{2} \text{ if } k=-r,\; 0 \text{ otherwise}$$

$$\boxed{X(k)=\frac{N}{2} \text{ if } k=r \text{ or } k=N-r; \quad 0 \text{ otherwise}}$$

## DFT as a Linear Transformation (Matrix Form)

$$X(k)=\sum_{n=0}^{N-1}x(n)\,W_N^{kn}, \qquad n,k = 0,1,\ldots,N-1$$

This can be written in matrix form:

$$X_N = W_N x_N \quad \text{...(1)}$$

where:
- $X_N$: N×1 matrix representing X(k)
- $x_N$: N×1 matrix representing x(n)
- $W_N$: N×N matrix of linear transformation, representing the different values of the twiddle factor

### Properties of $W_N$ as a Matrix

$W_N$ is a **symmetric matrix**. Assuming its inverse exists:

$$x_N = W_N^{-1}X_N \quad \text{...(2)}$$

From the IDFT: $x(n)=\dfrac{1}{N}\sum_{k=0}^{N-1}X(k)W_N^{-kn}$, so:

$$x_N = \frac{1}{N}W_N^{*}X_N \quad \text{...(3)}$$

Comparing (2) and (3):

$$W_N^{-1} = \frac{1}{N}W_N^{*} \quad \Rightarrow \quad W_N W_N^{*} = N\,I_N$$

where $I_N$ is the N×N identity matrix.

## Worked Example 4: 2-Point DFT of x(n) = {1, 1}

N=2, n=0,1, k=0,1.

$$W_N^{kn}=e^{-j\frac{2\pi}{N}kn}, \qquad W_2^{kn}=e^{-j\pi kn}$$

$$W_2^0 = e^{0}=1, \qquad W_2^1 = e^{-j\pi}=-1$$

$$X(k)=\sum_{n=0}^{1}x(n)W_2^{kn}$$

$$\boxed{X(k)=\{2,\,0\}}$$

---
*Source: DSAP lecture 21.pdf*
