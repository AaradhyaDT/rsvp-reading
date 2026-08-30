# DSAP Lecture 24: FFT — Radix-2 Decimation-in-Time (DIT) Algorithm

## Revision: DFT Properties Covered

- Circular correlation
- Time reversal
- Parseval's theorem
- Circular convolution
- Linear convolution by circular convolution

## FFT: Fast Fourier Transform — Motivation

$$X(k)=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}kn}=\sum_{n=0}^{N-1}x(n)W_N^{kn}$$

Direct DFT computation requires:

- For each $k$: $N$ complex multiplications, $N-1$ complex additions
- For all $k$: $N^2$ complex multiplications, $N(N-1)$ complex additions

The computational requirement is very high. The DFT saw little practical use until Cooley and Tukey's FFT in the 1970s, which reduces the complexity to roughly $\dfrac{N}{2}\log_2N$ complex multiplications — a major reduction that made real-time DSP feasible.

## Radix-2 FFT

We compute an $N$-point FFT where $N=2^v$ (radix-2 representation); $v$ is the number of stages in the FFT. E.g. $N=8=2^3 \Rightarrow v=3$ stages.

Radix-2 FFT is implemented in two ways:

- **Decimation in Time (DIT) FFT**
- **Decimation in Frequency (DIF) FFT**

### Twiddle Factor Properties

$$W_N=e^{-j\frac{2\pi}{N}}$$

- $W_N^{(k)}=W_N^{(N+k)}$ (periodicity)
- $W_N^{\left(k+\frac{N}{2}\right)}=-W_N^{(k)}$ (symmetry)
- $W_N^2=W_{N/2}$

## Radix-2 DIT FFT — Derivation

Let $x(n)$ be a discrete-time signal with $N$ samples, $n=0,\ldots,N-1$.

$$X(k)=\sum_{n=0}^{N-1}x(n)W_N^{kn}$$

For DIT, split $x(n)$ into even- and odd-indexed samples:

$$x(n)=f_1(m)+f_2(m)$$

where:

$$f_1(m)=x(2m), \quad m=0,1,\ldots,\tfrac{N}{2}-1 \quad \text{(even component, length } N/2\text{)}$$

$$f_2(m)=x(2m+1), \quad m=0,1,\ldots,\tfrac{N}{2}-1 \quad \text{(odd component, length } N/2\text{)}$$

$$X(k)=\sum_{n \text{ even}}x(n)W_N^{kn}+\sum_{n \text{ odd}}x(n)W_N^{kn}=\sum_{m=0}^{N/2-1}x(2m)W_N^{2km}+\sum_{m=0}^{N/2-1}x(2m+1)W_N^{k(2m+1)}$$

$$=\sum_{m=0}^{N/2-1}f_1(m)W_N^{2km}+W_N^k\sum_{m=0}^{N/2-1}f_2(m)W_N^{2km}$$

Since $W_N^2=W_{N/2}$, both sums are $\frac{N}{2}$-point DFTs:

$$X(k)=F_1(k)+W_N^kF_2(k) \qquad \text{...eq(1)}$$

Using $F_1\left(k+\frac{N}{2}\right)=F_1(k)$ and $F_2\left(k+\frac{N}{2}\right)=F_2(k)$ (periodicity of the $N/2$-point DFT), and replacing $k$ with $k+\frac{N}{2}$ in eq(1):

$$X\left(k+\frac{N}{2}\right)=F_1(k)+W_N^{k+N/2}F_2(k)=F_1(k)-W_N^kF_2(k) \qquad \text{...eq(2)}$$

$F_1(k)$ and $F_2(k)$ are each $\frac{N}{2}$-point DFTs.

## 8-Point Example (First Stage)

For $N=8$, $\frac{N}{2}=4$, $k=0,1,2,3$:

$$X(k)=F_1(k)+W_8^kF_2(k)$$

$$X(0)=F_1(0)+W_8^0F_2(0), \quad X(1)=F_1(1)+W_8^1F_2(1), \quad X(2)=F_1(2)+W_8^2F_2(2), \quad X(3)=F_1(3)+W_8^3F_2(3)$$

$$X(k+4)=F_1(k)-W_8^kF_2(k)$$

$$X(4)=F_1(0)-W_8^0F_2(0), \quad X(5)=F_1(1)-W_8^1F_2(1), \quad X(6)=F_1(2)-W_8^2F_2(2), \quad X(7)=F_1(3)-W_8^3F_2(3)$$

This "combine with $+W_N^k$ / $-W_N^k$" pair is the **butterfly** operation.

## Second Stage of Decimation

Each of $f_1(m)$ and $f_2(m)$ (length $N/2$) is further split into even/odd components:

$$g_{11}(n)=f_1(2m)\ \text{(even)}, \quad g_{12}(n)=f_1(2m+1)\ \text{(odd)}$$

$$g_{21}(n)=f_2(2m)\ \text{(even)}, \quad g_{22}(n)=f_2(2m+1)\ \text{(odd)}$$

with $m,n=0,1,\ldots,\frac{N}{4}-1$, so:

$$f_1(m)=g_{11}(n)+g_{12}(n), \qquad f_2(m)=g_{21}(n)+g_{22}(n)$$

By the same butterfly relation applied at length $N/4$:

$$F_1(k)=G_{11}(k)+W_N^kG_{12}(k) \qquad \text{...eq(3)}$$

$$F_1\left(k+\frac{N}{4}\right)=G_{11}(k)-W_N^kG_{12}(k) \qquad \text{...eq(4)}, \qquad k=0,\ldots,\frac{N}{4}-1$$

Similarly for $F_2(k)$:

$$F_2(k)=G_{21}(k)+W_N^kG_{22}(k), \qquad F_2\left(k+\frac{N}{4}\right)=G_{21}(k)-W_N^kG_{22}(k)$$

### For N = 8 (N/4 = 2, k = 0,1)

$$F_1(0)=G_{11}(0)+W_8^0G_{12}(0), \qquad F_1(1)=G_{11}(1)+W_8^1G_{12}(1)$$

$$F_1(2)=G_{11}(0)-W_8^0G_{12}(0), \qquad F_1(3)=G_{11}(1)-W_8^1G_{12}(1)$$

$$F_2(0)=G_{21}(0)+W_8^0G_{22}(0), \qquad F_2(1)=G_{21}(1)+W_8^1G_{22}(1)$$

$$F_2(2)=G_{21}(0)-W_8^0G_{22}(0), \qquad F_2(3)=G_{21}(1)-W_8^1G_{22}(1)$$

## Base Case: 2-Point DFT

$$G_{11}(k)=\sum_{n=0}^{1}g_{11}(n)W_2^{kn}, \quad k=0,1$$

$$G_{11}(0)=g_{11}(0)+g_{11}(1)$$

$$G_{11}(1)=g_{11}(0)W_2^0+g_{11}(1)W_2^1=g_{11}(0)-g_{11}(1)$$

This is the smallest butterfly — an add/subtract with no twiddle multiply needed (since $W_2^0=1$, $W_2^1=-1$).

## Combining the Stages (8-Point Radix-2 DIT Flow Graph)

> **Figure — not extractable:** the source presents the full 8-point DIT signal-flow graph (bit-reversed input ordering → 3 butterfly stages → natural-order output) as a diagram across two slides ("Combination 2 stages" and "Combining"). Consult the original PDF (`DSAP lecture 24.pdf`, pages 12 and 14) for the flow graph itself.

## Worked Example (Setup Only)

> Find the 8-point DFT of $x(n)=\{0.5,0.5,0.5,0,0,0\}$ using radix-2 DIT FFT.

> **Note:** the source slide poses this problem but the worked solution is not present in the extracted text (likely hand-drawn on the slide/board). See `DSAP fft.pdf` for a closely related version of this same problem (with $x(n)=\{0.5,0.5,0.5,0.5,0,0\}$) and the companion DIF-FFT version.

## Computational Complexity of FFT

An $N$-point DFT computed via radix-2 FFT has $\log_2N$ stages, with $N/2$ butterflies per stage.

- Each butterfly: 1 complex multiplication + 2 complex additions
- $N/2$ butterflies per stage: $N/2$ complex multiplications + $N$ complex additions
- Over $\log_2N$ stages: $\left(\dfrac{N}{2}\right)\log_2N$ complex multiplications and $N\log_2N$ complex additions

For an 8-point DFT: 3 stages, 4 butterflies per stage.

This is a substantial reduction from the direct DFT's $N^2$ multiplications and $N(N-1)$ additions — see the comparison table in the `DSAP fft.pdf` notes.
