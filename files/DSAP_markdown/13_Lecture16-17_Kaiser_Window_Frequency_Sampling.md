# DSAP Lectures 16–17: Hanning Window Continuation, Kaiser Window, Frequency Sampling Method

## Revision: Symmetric FIR Lowpass Filter Design

Same design task as Lecture 15: filter length 7, $\omega_c=1$, using the **rectangular window**, then continued here using the **Hanning window**.

*(Numeric derivation of $h_d(n)$ for both windows is graphic-only in the original slides.)*

## FIR Design Using the Kaiser Window

The Kaiser window is defined using $I_0(\cdot)$, the **modified Bessel function** (of the first kind, order zero).

Key quantities:
- Let **δ** be the minimum of the passband and stopband ripple, $\delta_1$ and $\delta_2$.
- **Transition width:** $\Delta\omega = \omega_s - \omega_p$

The Kaiser window has two important parameters:
1. **Length:** M+1
2. **Shape parameter:** β

**Order of the filter:** M+1

*(The explicit Kaiser window formula, and the empirical formulas for β and M in terms of δ and the transition width, are graphic-only in the original slide.)*

## Worked Example: Kaiser Window FIR Design

Design a FIR linear phase filter using the Kaiser window to meet a given specification (passband/stopband ripple and edge frequencies).

The specification is rewritten in terms of the Kaiser design parameters, and solving for the filter order gives:

$$M \approx 223$$

*(Intermediate steps for computing β and the transition-width-based order estimate are graphic-only in the original slide.)*

## Design of Linear Phase FIR Filter Using the Frequency Sampling Method

Let $H_d(\omega)$ be the desired frequency response.

1. The desired frequency response is **sampled uniformly at M points**.
2. This sampled response is the **Discrete Fourier Transform**, denoted H(k) — an M-point DFT.
3. h(n), the unit sample response of the FIR filter, is obtained by taking the **inverse DFT** of H(k).

---
*Source: DSAP lecture 16 and 17.pdf*
