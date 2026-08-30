# DSAP Lecture 23: Circular Convolution, Linear-via-Circular Convolution, Remaining DFT Properties

## Revision: Properties of DFT Covered So Far

- Periodicity
- Linearity
- Circular Shift (time shift and frequency shift)
- Convolution property
- Circular Convolution

## Circular Convolution — Worked Example

$$x(n)=\{1,2,0,1\}, \quad h(n)=\{2,2,1,1\}$$

$$y(n)=x(n)\circledast_N h(n)=\sum_{m=0}^{N-1}x(m)h(n-m)_N$$

Since both sequences have 4 elements, $N=4$:

$$y(n)=\sum_{m=0}^{3}x(m)h(n-m)_4 = x(0)h(n)_4+x(1)h(n-1)_4+x(2)h(n-2)_4+x(3)h(n-3)_4$$

$$= h(n)_4+2h(n-1)_4+h(n-3)_4$$

$$y(n)=\{6,7,6,5\}$$

## Linear Convolution by Circular Convolution

**Linear convolution:**

$$y(n)=x(n)*h(n)=\sum_{m=0}^{N-1}x(m)h(n-m)$$

- Length of $x(n)$: $N$
- Length of $h(n)$: $N$
- Length of $y(n)$: $2N-1$

**Circular convolution:**

$$z(n)=x(n)\circledast_N h(n)=\sum_{m=0}^{N-1}x(m)h(n-m)_N$$

- Length of $z(n)$: $N$

Linear convolution can be obtained from circular convolution by doing sufficient zero-padding so that the circular length matches (or exceeds) the linear-convolution length $2N-1$.

### Worked Example: Linear Convolution via Circular Convolution

$$x(n)=\{-1,1\}, \quad h(n)=\{2,3,1,-2\}$$

- Length of $x$ = 2, length of $h$ = 4
- Length of linear convolution $y$: $4+2-1=5$

Zero-pad both sequences to length 5:

$$x(n)=\{-1,1,0,0,0\}, \qquad h(n)=\{2,3,1,-2,0\}$$

Perform 5-point circular convolution:

$$y(n)=x(n)\circledast_5 h(n)=\sum_{m=0}^{4}x(m)h(n-m)_5$$

$$=x(0)h(n)_5+x(1)h(n-1)_5+x(2)h(n-2)_5+x(3)h(n-3)_5+x(4)h(n-4)_5$$

$$=-h(n)_5+h(n-1)_5$$

$$y(n)=\{-2,-1,2,3,-2\}$$

## Worked Example: DFT Convolution Property

If $X_1(k)$ and $X_2(k)$ are the 5-point DFTs of $x_1(n)=3^n,\ 0\le n\le 3$ and $x_2(n)=2^n,\ 0\le n\le 4$, find $x_3(n)$ if $X_3(k)=X_1(k)X_2(k)$.

$$x_1(n)=\{1,3,9,27\}, \qquad x_2(n)=\{1,2,4,8,16\}$$

**Conventional approach:** compute 5-point DFT of each, multiply pointwise to get $X_3(k)$, then take the 5-point IDFT to recover $x_3(n)$.

**Shortcut via the convolution property:** since $X_3(k)=X_1(k)X_2(k) \;\Leftrightarrow\; x_3(n)=x_1(n)\circledast_5 x_2(n)$, the circular convolution can be computed directly in the time domain, bypassing the DFT/IDFT round trip.

Zero-pad $x_1(n)$ to length 5:

$$x_1(n)=\{1,3,9,27,0\}, \qquad x_2(n)=\{1,2,4,8,16\}$$

$$x_3(n)=x_1(n)\circledast_5 x_2(n)=\sum_{m=0}^{4}x_1(m)h(n-m)_5$$

$$=x_1(0)h(n)_5+x_1(1)h(n-1)_5+x_1(2)h(n-2)_5+x_1(3)h(n-3)_5+x_1(4)h(n-4)_5$$

$$= h(n)_5+3h(n-1)_5+9h(n-2)_5+27h(n-3)_5$$

> **Note:** source slide is truncated at this point (numerical result not shown in original).

## Remaining DFT Properties

### Time Reversal

$$x(n)\xrightarrow{\text{DFT}_N}X(k)$$

$$x(-n)_N\xrightarrow{\text{DFT}_N}X(-k)_N$$

Since the range of $n$ and $k$ must lie between $0$ and $N-1$, we write $x(-n)_N=x(N-n)$ and $X(-k)_N=X(N-k)$.

**Proof:**

$$\mathrm{DFT}\{x(-n)_N\}=\mathrm{DFT}\{x(N-n)\}=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}k(N-n)}$$

$$=\sum_{n=0}^{N-1}x(n)e^{-j2\pi k}e^{j\frac{2\pi}{N}kn}$$

Since $e^{-j2\pi k}=1$ for integer $k$:

$$=\sum_{n=0}^{N-1}x(n)e^{j\frac{2\pi}{N}kn}=X(-k)=X(N-k)$$

### Circular Correlation

$$x(n)\xrightarrow{\text{DFT}_N}X(k), \qquad y(n)\xrightarrow{\text{DFT}_N}Y(k)$$

$$r_{xy}(l)\xrightarrow{\text{DFT}_N}R_{xy}(k)=X(k)Y^*(k)$$

$$r_{xy}(l)=\sum_{n=0}^{N-1}x(n)\,y^*(n-l)_N$$

Rewriting the shift and substituting $l=n$ (standard circular-correlation manipulation):

$$r_{xy}(l)=\sum_{n=0}^{N-1}x(n)\,y^*\big(-(l-n)\big)_N = x(l)\circledast_N y^*(-l)_N$$

So $R_{xy}(k)=\mathrm{DFT}\{r_{xy}(l)\}=X(k)Y^*(k)$.

### Parseval's Theorem

$$x(n)\xrightarrow{\text{DFT}_N}X(k)$$

$$\sum_{n=0}^{N-1}|x(n)|^2=\frac{1}{N}\sum_{k=0}^{N-1}|X(k)|^2$$

**Proof:**

$$\sum_{n=0}^{N-1}|x(n)|^2=\sum_{n=0}^{N-1}x(n)x^*(n)$$

Using $x^*(n)=\dfrac{1}{N}\sum_{k=0}^{N-1}X^*(k)e^{-j\frac{2\pi}{N}kn}$:

$$=\sum_{n=0}^{N-1}x(n)\cdot\frac{1}{N}\sum_{k=0}^{N-1}X^*(k)e^{-j\frac{2\pi}{N}kn}$$

$$=\frac{1}{N}\sum_{k=0}^{N-1}X^*(k)\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}kn}$$

$$=\frac{1}{N}\sum_{k=0}^{N-1}X^*(k)X(k)=\frac{1}{N}\sum_{k=0}^{N-1}|X(k)|^2$$

## DFT: Practical Consideration

$$X(k)=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}kn}=\sum_{n=0}^{N-1}x(n)W_N^{kn}$$

To compute the DFT directly:

- For each $k$: $N$ complex multiplications, $N-1$ complex additions
- For all $k$: $N^2$ complex multiplications, $N(N-1)$ complex additions

This computational cost is very high — the DFT was rarely used in practice until Cooley and Tukey introduced the **FFT (Fast Fourier Transform)** in the 1970s. FFT reduces the multiplicative complexity to roughly $\frac{N}{2}\log_2 N$, and revolutionized DSP across communications and image processing.
