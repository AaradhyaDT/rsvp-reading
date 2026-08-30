# DSAP Lecture 14: FIR Digital Filters

## FIR System — General Form

The output of a general LTI system is:

$$y(n) = \sum_{k=-\infty}^{\infty} h(k)\,x[n-k]$$

For a **FIR** system considering M samples:

$$y(n) = \sum_{k=0}^{M-1} h(k)\,x[n-k] \quad \text{...(1)}$$

Expanding:

$$y(n) = h(0)x(n)+h(1)x(n-1)+h(2)x(n-2)+\cdots+h(M-1)x(n-M+1)$$

Taking the Z-transform:

$$Y(z) = h(0)X(z)+h(1)X(z)z^{-1}+h(2)X(z)z^{-2}+\cdots+h(M-1)X(z)z^{-(M-1)}$$

$$\boxed{H(z) = \frac{Y(z)}{X(z)} = h(0)+h(1)z^{-1}+h(2)z^{-2}+\cdots+h(M-1)z^{-(M-1)} = \sum_{n=0}^{M-1}h(n)z^{-n}} \quad \text{...(2)}$$

## Direct Form Structure for FIR Filters

From eq(1): $y(n)=\sum_{k=0}^{M-1}h(k)x[n-k]$

Realization requires:
- M-1 delay blocks
- M-1 storage elements
- M multiplications and M-1 additions

### Worked Example

Determine the direct form realization of:

$$H(z)=1+2z^{-1}-3z^{-2}-4z^{-3}+5z^{-4}$$

*(Block diagram is graphic-only in the original slide — the coefficients above are the tap weights h(0)=1, h(1)=2, h(2)=-3, h(3)=-4, h(4)=5 for a direct-form 5-tap FIR realization.)*

## Cascaded Form for FIR Filters

$$H(z)=\sum_{k=0}^{M-1}b_k z^{-k}$$

Cascaded form is a simple factorization of H(z) into (typically second-order) subsystems:

$$H(z)=H_1(z)\,H_2(z)\,H_3(z)\cdots H_K(z)$$

### Worked Example 1

Obtain the cascaded form realization of:

$$H(z)=(1+2z^{-1}-z^{-2})(1+z^{-1}-z^{-2})$$

This is already given in factored (cascade) form: $H(z)=H_1(z)H_2(z)$ with $H_1(z)=1+2z^{-1}-z^{-2}$, $H_2(z)=1+z^{-1}-z^{-2}$.

### Worked Example 2

Determine direct form and cascaded form realization of:

$$H(z)=\left(1-\frac{1}{4}z^{-1}+\frac{3}{8}z^{-2}\right)\left(1-\frac{1}{8}z^{-1}-\frac{1}{2}z^{-2}\right)$$

Multiplying out gives the direct form (single polynomial):

$$H(z)=1-\frac{3}{8}z^{-1}-\frac{3}{32}z^{-2}+\frac{5}{64}z^{-3}-\frac{3}{36}z^{-4}$$

*(Note: the coefficients in the expanded direct form above are transcribed as they appear in the source slide; the last-term denominator "36" looks like it may be an OCR/slide artifact of "64" given the pattern of the other terms — flagging rather than silently changing, since the original multiplication is not shown step-by-step on the slide.)*

## Lattice Structure for FIR Filters

For a FIR filter with system function H(z), lattice realizations are built up stage-by-stage:

- **Single-stage lattice**
- **Two-stage lattice**
- **N-stage lattice**

*(Lattice stage diagrams are graphic-only in the original slides and not reproduced here.)*

### Direct Form ↔ Lattice Conversion

The lecture covers conversion in both directions:
- Direct form → Lattice
- Lattice → Direct form

*(Conversion diagrams/formulas for the FIR lattice case are graphic-only in the original slides — for the analogous IIR lattice conversion formula, see Lecture 11–12 / Lecture 13 notes: $k_m=a_m(m)$, with the recursive relation for lower-order coefficients.)*

---
*Source: DSAP leccture 14.pdf*
