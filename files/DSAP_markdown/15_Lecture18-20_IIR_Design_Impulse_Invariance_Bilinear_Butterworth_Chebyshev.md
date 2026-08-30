# DSAP Lectures 18–20: IIR Filter Design from Continuous-Time Filters

## Design of IIR Filters — Overview

To design digital IIR filters: design an analog filter first, then convert it to a digital filter.

**Two conversion methods:**
1. Impulse Invariant Method
2. Bilinear Transformation

## Impulse Invariant Method

An analog filter is designed from the given specification, then replaced by a digital filter via proper conversion (transformation of $H_a(s) \to H(z)$).

### Design Steps

1. **Step 1:** obtain the analog transfer function $H_a(s)$ from the given specification.
2. **Step 2:** if required, expand $H_a(s)$ using partial fraction expansion.
3. **Step 3:** obtain the Z-transform of each partial fraction term using the impulse invariance transformation.
4. **Step 4:** combine all Z-transform terms to obtain H(z) for the digital IIR filter.

**Relation between analog and digital frequency:** $\omega = \Omega T$

### Worked Example

Determine H(z) using the impulse invariance method, at 5 Hz sampling frequency, from:

$$H_a(s)=\frac{2}{(s+1)(s+2)}$$

Partial fraction expansion (standard form $\frac{A_1}{s+1}+\frac{A_2}{s+2}$) gives $A_1=2$ and $A_2=-2$. Each first-order term $\frac{A}{s+a}$ maps to $\frac{A}{1-e^{-aT}z^{-1}}$ under impulse invariance, giving H(z) (final combination step is graphic-only in the source slide).

## Bilinear Transformation

Consider an analog filter $H_a(s)=\dfrac{b}{s+a}$.

**Relation between analog and digital frequency:**

$$\Omega = \frac{2}{T}\tan\left(\frac{\omega}{2}\right), \qquad \omega = 2\tan^{-1}\left(\frac{\Omega T}{2}\right)$$

**Substitution for s:**

$$s = \frac{2}{T}\left(\frac{z-1}{z+1}\right)$$

### Worked Example

Given $H_a(s)=\dfrac{3}{(s+2)(s+3)}$ with $T=0.1$ sec, design a digital IIR filter using BLT (bilinear transformation) — substitute $s=\frac{2}{T}\left(\frac{z-1}{z+1}\right)$ into $H_a(s)$ and simplify (full algebraic simplification is graphic-only in the source slide).

## Basic Analog Filter Approximations

1. **Butterworth**
2. **Chebyshev**

## Butterworth Filter Design Procedure

### Design Steps

For the given digital filter specification, obtain the equivalent analog filter frequency:

- **Impulse invariance:** $\Omega = \dfrac{\omega}{T}$
- **Bilinear transformation:** $\Omega = \dfrac{2}{T}\tan\left(\dfrac{\omega}{2}\right)$

**Order of the filter (N):** calculated from the passband/stopband specification (formula shown as graphic in the source slide; standard Butterworth order formula based on $\Omega_p, \Omega_s, \delta_1, \delta_2$, or in dB form).

**Cutoff frequency $\Omega_c$:**

- Impulse invariance: $\Omega_c = \dfrac{\omega_c}{T}$
- Bilinear transformation: $\Omega_c = \dfrac{2}{T}\tan\left(\dfrac{\omega_c}{2}\right)$
- If $\omega_c$ is not given, or specification is in dB, use alternate formulas (graphic-only in source).

**Poles:** calculated using the standard Butterworth pole-location formula (graphic-only in source), then used to build $H_a(s)$.

### Worked Example: Butterworth Filter via Bilinear Transformation

Design a Butterworth filter satisfying given digital filter specifications, converted to an analog specification using bilinear transformation. Sampling time T not given, so **assume T = 1 sec**.

Since $\omega_c$ is not given directly, it must be derived from the specification. The order comes out to:

$$N \approx 2$$

**Cutoff frequency (bilinear transformation):**

$$\Omega_c = \frac{2}{T}\tan\left(\frac{\omega_c}{2}\right)$$

**Pole locations** (stable poles only, since Butterworth poles come in conjugate pairs symmetric about the imaginary axis, and only the left-half-plane poles are kept for a stable, causal analog filter):

$$p_0 = -0.53+j0.53, \qquad p_1=-0.53-j0.53$$

**Convert to H(z)** using bilinear transformation, $s=\dfrac{2}{T}\left(\dfrac{z-1}{z+1}\right)$, with T = 1 sec (final algebraic substitution is graphic-only in the source slide).

## Chebyshev Filter

Two types are named in the lecture:
- **Type-1 Chebyshev Filter**
- **Type-2 Chebyshev Filter**

*(Defining equations/plots for each type are graphic-only in the original slides.)*

### Chebyshev Lowpass Filter Design

- Pole locations of the Chebyshev filter are given by a standard formula (graphic-only in source).
- At the cutoff frequency $\Omega_c=1$, and for determining the order of the filter, standard Chebyshev design formulas are used (graphic-only in source).
- The resulting system transfer function is obtained from the pole locations (graphic-only in source — final numeric example not fully captured in text extraction; several trailing slides in this lecture PDF are diagram/equation-image only).

---
*Source: DSAP lecture 18,19and 20.pdf*

**Coverage note:** several worked-example derivation steps in this particular PDF (the BLT algebraic simplification, the Butterworth order formula, and the full Chebyshev worked example) appear on slides that are equation-image-only and did not extract as text. The conceptual steps and structure of each method are captured faithfully above; for the specific numeric derivations, refer to the original PDF pages directly.
