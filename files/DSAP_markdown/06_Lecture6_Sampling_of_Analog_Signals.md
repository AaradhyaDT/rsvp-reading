# DSAP Lecture 6: Sampling of Analog Signals

## Revision of Lecture 5

- System
- System properties
- LTI system
- Output of LTI system
- Properties of LTI system

## Sampling of Analog Signals

Let $x_a(t)$ be an analog signal, and $x(n)$ the DT signal obtained by sampling $x_a(t)$ every T seconds:

$$x(n) = x_a(nT), \quad -\infty < n < \infty$$

The time interval T between successive samples is the **sampling period** (sample interval); its reciprocal $1/T = F_s$ is the **sampling rate**.

### Deriving Normalized Frequency

Let $x_a(t) = A\cos(2\pi F t + \theta)$ ... (i) be sampled at rate $F_s = 1/T$:

$$x_a(nT) = x(n) = A\cos(2\pi F n T + \theta) \quad \text{...(ii)}$$

$$x(n) = A\cos\left(\frac{2\pi n F}{F_s}+\theta\right) \quad \text{...(iii)}$$

Also, $x(n)=A\cos(\omega n +\theta) = A\cos(2\pi f n +\theta)$ ... (iv)

Comparing (iii) and (iv):

$$\boxed{f = \frac{F}{F_s}}$$

### Sampling Theorem and Nyquist Rate

**Sampling Theorem:** any CT signal can be represented by its samples, and the original signal can be reconstructed from the samples if $F_s \ge 2F_m$, where $F_s$ is the sampling frequency and $F_m$ is the maximum frequency component in the original signal.

**Nyquist rate:** minimum sampling frequency, $F_s = 2F_m$.

**Nyquist interval:** $T_s = 1/F_s = 1/(2F_m)$.

## Worked Example 1: Aliasing Demonstration

**Question 1:** Find the DT signal for $x_1(t)=\cos 2\pi(10)t$ sampled at $F_s=40$ Hz.

$$f = \frac{F}{F_s} = \frac{10}{40} = \frac{1}{4} \quad \Rightarrow \quad x_1(n) = \cos(2\pi f n) = \cos\left(\frac{\pi}{2}n\right)$$

**Question 2:** Find the DT signal for $x_2(t)=\cos 2\pi(50)t$ sampled at $F_s=40$ Hz.

$$f = \frac{F}{F_s} = \frac{50}{40} = \frac{5}{4} \quad \Rightarrow \quad x_2(n) = \cos\left(\frac{5\pi}{2}n\right) = \cos\left(\left(2\pi+\frac{\pi}{2}\right)n\right) = \cos\left(\frac{\pi}{2}n\right)$$

**Conclusion:** $x_1(n) = x_2(n) = \cos(\pi n/2)$ — the two DT signals are **identical**. F₂ = 50 Hz is called the **alias** of F₁ = 10 Hz at sampling frequency 40 Hz. Given just the sampled signal, we cannot distinguish whether it came from $x_1(t)$ or $x_2(t)$.

## Worked Example 2

Consider $x_a(t) = 3\cos(100\pi t)$.

**(a) Minimum sampling frequency to avoid aliasing:**
$F_m = 50$ Hz → $F_s = 2F_m = 100$ Hz.

**(b) DT signal if sampled at $F_s=200$ Hz:**
$$x[n]=3\cos(2\pi f n) = 3\cos\left(2\pi\frac{F}{F_s}n\right) = 3\cos\left(\frac{\pi}{2}n\right)$$

**(c) DT signal if sampled at $F_s=75$ Hz:**
$$x[n]=3\cos\left(2\pi\frac{F}{F_s}n\right) = 3\cos\left(\frac{4\pi}{3}n\right) = 3\cos\left(\left(2\pi-\frac{2\pi}{3}\right)n\right) = 3\cos\left(\frac{2\pi}{3}n\right)$$

**(d) Frequency $0<F<F_s/2$ yielding samples identical to (c):**
$$f = F/F_s = 1/3, \quad F_s = 75\text{ Hz} \Rightarrow F = fF_s = 25\text{ Hz}$$
Sinusoid: $y(t) = 3\cos(2\pi F t) = 3\cos(50\pi t)$

## Worked Example 3: Multi-Component Signal

Consider $x_a(t) = 3\cos(50\pi t) + 10\sin(300\pi t) - \cos(100\pi t)$.

**(a) Nyquist rate:**

From the signal: $F_1 = 25$ Hz, $F_2 = 150$ Hz, $F_3 = 50$ Hz. So $F_{max}=150$ Hz.

$$F_s = 2F_{max} = 2(150) = 300 \text{ Hz (Nyquist rate)}$$

**(b) DT signal after sampling at Nyquist rate:**

$$x[n] = 3\cos\left(\frac{50\pi}{300}n\right)+10\sin\left(\frac{300\pi}{300}n\right)-\cos\left(\frac{100\pi}{300}n\right) = 3\cos\left(\frac{\pi}{6}n\right)+10\sin(\pi n)-\cos\left(\frac{\pi}{3}n\right)$$

**Important observation:** the component $10\sin(300\pi t)$, sampled at the Nyquist rate of 300 Hz, results in the sample $10\sin(\pi n)$, which is **identically zero** — we are sampling at the signal's zero crossings and miss that component entirely. The remedy is to sample at a rate higher than the Nyquist rate.

## Worked Example 4: Reconstruction and Aliasing

Consider $x_a(t)=3\cos(2000\pi t)+5\sin(6000\pi t)+10\cos(12000\pi t)$.

- $F_1=1$ kHz, $F_2=3$ kHz, $F_3=6$ kHz → $F_{max}=6$ kHz.
- Nyquist rate $= 2F_{max}=12$ kHz.

**Sampling at 5 kHz**, the DT signal is:

$$x[n]=3\cos\left(\frac{2000\pi}{5000}n\right)+5\sin\left(\frac{6000\pi}{5000}n\right)+10\cos\left(\frac{12000\pi}{5000}n\right)$$

Reducing each argument modulo 2π and simplifying (using aliasing relations for frequencies beyond $F_s/2$):

$$x[n]=3\cos\left(\frac{2\pi}{5}n\right)+5\sin\left(\frac{6\pi}{5}n\right)+10\cos\left(\frac{12\pi}{5}n\right)$$

$$=3\cos\left(2\pi\cdot\frac{1}{5}n\right)+5\sin\left(2\pi\left(1-\frac{4}{5}\right)n\right)+10\cos\left(2\pi\left(1+\frac{1}{5}\right)n\right)$$

Simplifying with periodicity of sin/cos in 2π, combining terms:

$$\boxed{x[n]=13\cos\left(2\pi\frac{1}{5}n\right)-5\sin\left(2\pi\frac{2}{5}n\right)}$$

**Reconstructing the CT signal from this sampled signal** (naively, from the sampled frequencies alone) gives:

$$x(t)=13\cos(2000\pi t)-5\sin(4000\pi t)$$

This is **not the same** as the original signal — this is due to **aliasing**, since $F_s < 2F_m$.

## Sampling of a CT Signal and Spectral Properties

Let x(t) be a band-limited signal limited to $\omega_m$. To find the samples of x(t), multiply x(t) by an impulse train $\delta_{T_S}(t)$:

$$\delta_{T_S}(t) = \sum_{k=-\infty}^{\infty}\delta(t-kT_S)$$

**Fourier series (trigonometric form) of the impulse train:**

$$\delta_{T_S}(t) = a_0 + \sum_{n=1}^{\infty}a_n\cos(n\omega_s t), \qquad a_0=\frac{1}{T_s},\quad a_n=\frac{2}{T_s}$$

$$\delta_{T_S}(t) = \frac{1}{T_s}\Big(1+2\cos(\omega_s t)+2\cos(2\omega_s t)+2\cos(3\omega_s t)+\cdots\Big)$$

**Sampled signal:**

$$g(t) = \delta_{T_S}(t)\,x(t) = \frac{1}{T_s}\Big(x(t)+2x(t)\cos(\omega_s t)+2x(t)\cos(2\omega_s t)+\cdots\Big)$$

Using the modulation property of the Fourier transform ($x(t)\to X(j\omega)$, and $2x(t)\cos(k\omega_s t)\to X(j\omega-jk\omega_s)+X(j\omega+jk\omega_s)$):

$$G(j\omega) = \frac{1}{T_s}\sum_{k=-\infty}^{\infty} X(j\omega - jk\omega_s)$$

### Recovery Condition

Recovery of x(t) from g(t) requires recovering X(jω) from G(jω), which is only possible if there is **no overlapping** between successive spectral copies (images) of G(jω):

$$\omega_s \ge 2\omega_m \quad \text{i.e.} \quad f_s \ge 2f_m$$

Once this condition is met, X(jω) can be recovered from G(jω) using a **low-pass filter**.

---
*Source: DSAP lecture 6.pdf*
