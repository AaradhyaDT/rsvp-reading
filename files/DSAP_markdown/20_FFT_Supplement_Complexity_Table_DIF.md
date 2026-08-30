# DSAP Supplement: FFT Computational Complexity Table, DIF FFT, IDFT via FFT

*(Source file: `DSAP fft.pdf` — supplementary slide set following Lecture 24, worked examples and DIF variant)*

## Worked Example (Setup Only)

> Find the 8-point DFT of $x(n)=\{0.5,0.5,0.5,0.5,0,0\}$ using radix-2 DIT FFT.

> **Figure — not extractable:** pages 3–5 of the source contain the step-by-step butterfly-diagram solution to this problem (bit-reversed input, stage-by-stage combination). No text content on these slides — consult `DSAP fft.pdf` pages 3–5 directly.

## Computational Complexity of FFT (Recap)

$$X(k)=\sum_{n=0}^{N-1}x(n)e^{-j\frac{2\pi}{N}kn}=\sum_{n=0}^{N-1}x(n)W_N^{kn}$$

Direct computation: $N^2$ complex multiplications, $N(N-1)$ complex additions.

Via radix-2 FFT: $N\text{-point DFT}$ has $\log_2N$ stages, $N/2$ butterflies per stage, each butterfly costing 1 complex multiplication + 2 complex additions.

- $N/2$ complex multiplications and $N$ complex additions per stage
- Over $\log_2N$ stages: $\left(\dfrac{N}{2}\right)\log_2N$ complex multiplications, $N\log_2N$ complex additions

For 8-point DFT: 3 stages, 4 butterflies/stage.

## Comparison: Direct Computation vs. FFT

| N (points) | Direct: Complex Mult. ($N^2$) | Direct: Complex Add. ($N(N-1)$) | FFT: Complex Mult. ($\frac{N}{2}\log_2N$) | FFT: Complex Add. ($N\log_2N$) |
|---|---|---|---|---|
| 4 | 16 | 12 | 2 | 4 |
| 8 | 64 | 56 | 12 | 24 |
| 16 | 256 | 240 | 32 | 64 |
| 32 | 1024 | 992 | 40 | 80 |
| 64 | 4096 | 4032 | 96 | 192 |
| 128 | 16,384 | 16,256 | 234 | 448 |

> **Flagged:** the table above is copied verbatim from the source slide, but its multiplication/addition columns do not consistently match the stated formula $\frac{N}{2}\log_2N$ / $N\log_2N$ — e.g. formula gives 4/8 for N=4 (source: 2/4), 32/64 for N=16 (source matches), 80/160 for N=32 (source: 40/80, exactly half). The N=8, 16, 64, 128 rows match the formula exactly; N=4 and N=32 do not (both off by a factor of ~2). Likely a source/OCR transcription error on those two rows — not corrected here, flagged for the reader.

## Radix-2 N-Point Decimation-in-Frequency (DIF) FFT

> **Figure — not extractable:** the source slide title-cards this section ("Radix-2 N-point Decimation in Frequency (DIF) FFT") with the derivation presented as a diagram, not text.

### Worked Example (Setup Only)

> Find the 8-point DFT of $x(n)=\{0.5,0.5,0.5,0,0,0\}$ using radix-2 DIF FFT.

> **Figure — not extractable:** solution presented as a butterfly diagram on the source slide, no extractable text.

## Computation of IDFT Using FFT

$$\text{IDFT: } x(n)=\frac{1}{N}\sum_{k=0}^{N-1}X(k)W_N^{-kn} \qquad \text{DFT: } X(k)=\sum_{n=0}^{N-1}x(n)W_N^{kn}$$

> **Note:** source slide ends here — the actual "compute IDFT via FFT" trick (conjugate-and-swap method: apply the FFT algorithm to $X^*(k)$, conjugate and scale the result by $1/N$) is not spelled out in the extracted text.
