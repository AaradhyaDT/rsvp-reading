# DSAP Lecture 15: Design of Digital Filters — Windows Method (Introduction)

## Design of Digital Filters — Overview

Designing a filter means determining the coefficients of a causal FIR or IIR filter that closely approximates a desired frequency response. Desired filter characteristics are specified in the frequency domain in terms of desired magnitude and phase response.

- Type of filter (FIR or IIR) depends on the problem and the specification of the desired frequency response.
- **FIR filters** are used where linear phase in the passband is required.
- **IIR filters** have lower sidelobes in the stopband than an FIR filter with the same number of parameters, involve fewer parameters, and need less memory / lower computational complexity.

## Magnitude and Phase Response of a Digital Filter

Let h(n) be the impulse response. Then:

$$H(e^{j\omega}) = \text{DTFT}(h(n)) = a+jb = |H(e^{j\omega})|\,e^{j\varphi(\omega)}$$

**Magnitude response:**
$$M(\omega) = |H(e^{j\omega})| = \sqrt{a^2+b^2}$$

**Phase response:**
$$\varphi(\omega) = \tan^{-1}\left(-\frac{b}{a}\right)$$

## Linear Phase, Phase Delay, and Group Delay

$$\text{phase delay } (\tau_p) = -\frac{\varphi(\omega)}{\omega}, \qquad \text{group delay } (\tau_g) = -\frac{d\varphi(\omega)}{d\omega}$$

**Linear phase filters** are those for which phase delay and group delay are both **constant** (independent of frequency).

For phase response to be linear:

$$\frac{\varphi(\omega)}{\omega} = -\alpha \quad \text{for } -\pi\le\omega\le\pi \quad\Rightarrow\quad \varphi(\omega)=-\alpha\omega$$

## Symmetric and Antisymmetric FIR Filters

An FIR filter is symmetric or antisymmetric in terms of h(n):

**Symmetric** (if it satisfies):
$$h(n)=h(M-1-n), \qquad n=0,1,\ldots,M-1$$

**Antisymmetric** (if it satisfies):
$$h(n)=-h(M-1-n), \qquad n=0,1,\ldots,M-1$$

*(Worked examples with M=6 illustrating each condition are graphic-only in the original slides.)*

**Note:** a linear phase filter satisfies the condition for symmetry or antisymmetry — i.e., $h(n) = \pm h(M-1-n)$.

## Magnitude Characteristics of a Practical Filter

> *Figure not reproduced: passband/stopband/transition-band magnitude plot (graphic-only slide — for the labeled version of this plot, see the separately supplied `Passband Stopband.pdf` in this folder).*

## FIR Filter Design Methods

Three methods:
1. Using windows
2. Using frequency sampling
3. Optimal FIR filter design (Parks–McClellan / Remez — covered separately, see optimal filter notes)

## Design of Linear Phase FIR Filter Using Windows

Let $H_d(\omega)$ be the desired frequency response, with corresponding impulse response $h_d(n)$.

- $h_d(n)$ obtained this way is (in general) an **infinite series**.
- To implement an M-point FIR filter, $h_d(n)$ must be **truncated** to a finite series from n=0 to n=M-1.
- This truncation is achieved by multiplying by a **window function**.

### Rectangular Window

$$w_R(n) = 1 \text{ for } n=0,1,\ldots,M-1; \qquad w_R(n)=0 \text{ elsewhere}$$

The FIR filter's impulse response is obtained by multiplying $h_d(n)$ by $w_R(n)$:

$$h(n)=h_d(n) \text{ for } n=0,1,\ldots,M-1; \qquad h(n)=0 \text{ otherwise}$$

## Gibbs Phenomenon

- Desired frequency response: $H_d(\omega)$; obtained frequency response of the truncated FIR filter: $H(\omega)$.
- Oscillation/ringing occurs near the band edge ($\omega_c$) of the filter.
- This ringing is caused by sidelobes in the frequency response of the window function.
- This oscillatory behavior near the filter's band edge is known as the **Gibbs phenomenon**.

## Common Window Functions

The lecture lists (with individual window definitions shown as graphics, not reproduced here):
- Rectangular
- Bartlett
- Hanning
- Blackman
- Hamming
- Kaiser

*(Comparison chart of the different windows is also graphic-only in the original slide.)*

## Worked Example: Symmetric FIR Lowpass Filter Design (Rectangular Window)

**Design task:** design a symmetric FIR lowpass filter for a given desired frequency response, with filter length 7 and $\omega_c=1$.

$h_d(n)$ is derived from the ideal lowpass frequency response (via inverse DTFT — standard sinc-based impulse response), then windowed with the rectangular window for M=7.

*(The full numeric derivation of $h_d(n)$ and the resulting truncated coefficients is graphic-only in the original slides; the design continues into Lecture 16–17 using the Hanning window on the same specification.)*

---
*Source: DSAP lecture 15.pdf*
