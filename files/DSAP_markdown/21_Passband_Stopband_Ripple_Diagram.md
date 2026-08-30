# DSAP Reference: Passband/Stopband Ripple and Transition Band (FIR/IIR Filter Design)

*(Source file: `Passband Stopband.pdf` — single reference diagram, no accompanying lecture text)*

Standard filter-specification diagram used throughout the FIR/IIR design lectures (windowing, Kaiser, Parks–McMcClellan, Butterworth/Chebyshev):

- **Passband:** magnitude response ripples between $1+\delta_1$ and $1-\delta_1$, up to passband edge frequency $f_p$.
- **Transition band:** $\Delta f = f_s - f_p$, the region between passband edge $f_p$ and stopband edge $f_s$ where the response rolls off.
- **Stopband:** magnitude response ripples between $0$ and $\delta_2$, from $f_s$ onward to Nyquist ($f_s/2$ normalized to $0.5$).

Key quantities:

$$\delta_1 = \text{passband ripple}, \qquad \delta_2 = \text{stopband ripple (attenuation)}, \qquad \Delta f = f_s - f_p = \text{transition bandwidth}$$

This is the reference template against which all FIR window designs (Lecture 15–17), the optimal/equiripple design (Parks–McClellan), and IIR designs (impulse invariance, bilinear transform, Butterworth, Chebyshev — Lecture 18–20) specify their design targets.

> **Figure only:** this file is a text wrapper around a single diagram. See `Passband Stopband.pdf` for the original image (magnitude-vs-frequency plot with $1+\delta_1$, $1$, $1-\delta_1$ passband ripple band; $\delta_2$, $0$ stopband ripple band; $f_p$, $f_s$, and $0.5\,(f_s/2)$ marked on the frequency axis).
