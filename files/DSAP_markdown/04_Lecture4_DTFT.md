# DSAP Lecture 4: Discrete Time Fourier Transform (DTFT)

## Revision of Lecture 3

- Fourier series

## Discrete Time Fourier Transform — Derivation

Consider a DT aperiodic signal x[n]. Let x̂[n] be the periodic signal formed by repeating x[n] with period N.

Since x̂[n] is periodic, the Fourier series is applicable:

$$\hat{x}[n] = \sum_{k=-N/2}^{N/2} a_k\, e^{jk\omega_0 n}, \qquad a_k = \frac{1}{N}\sum_{n=-N/2}^{N/2} \hat{x}[n]\, e^{-jk\omega_0 n}$$

In the range $-N/2$ to $N/2$, $\hat{x}[n]$ tends to $x[n]$ (as N → ∞, the periodic extension recovers the original aperiodic signal within any finite window). So:

$$N a_k = \sum_{n=-N/2}^{N/2} x[n]\, e^{-jk\omega_0 n}$$

As $N \to \infty$: let $Na_k = X(e^{j\omega})$ and $k\omega_0 = \omega$. Then:

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]\, e^{-j\omega n}$$

**This is the DTFT equation.**

Also, as N → ∞: $\hat{x}[n] \to x[n]$, $\omega_0 \to 0$, and the sum over k becomes an integral over ω (spacing dω = ω₀):

$$x[n] = \frac{1}{2\pi}\int_{-\pi}^{\pi} X(e^{j\omega})\, e^{j\omega n}\, d\omega$$

**This is the inverse DTFT (synthesis equation).**

## Worked Example 1: DTFT of the Unit Impulse

Find the DTFT of x[n] = δ[n].

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]\,e^{-j\omega n} = \sum_{n=0}^{\infty}\delta[n]e^{-j\omega n}$$

Wait — more precisely, since δ[n] is nonzero only at n=0:

$$X(e^{j\omega}) = x[0]\,e^{0} = 1$$

## Worked Example 2: DTFT of x[n] = aⁿu[n], |a| < 1

$$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-j\omega n} = \sum_{n=0}^{\infty} a^n e^{-j\omega n} = \sum_{n=0}^{\infty}(a e^{-j\omega})^n = \frac{1}{1-ae^{-j\omega}}$$

## Worked Example 3: DTFT of a Rectangular Pulse

Find the DTFT of $x[n] = 1$ for $-N_1 \le n \le N_1$, and 0 otherwise.

$$X(e^{j\omega}) = \sum_{n=-N_1}^{N_1} e^{-j\omega n}$$

Substituting $m = n + N_1$:

$$X(e^{j\omega}) = e^{j\omega N_1}\sum_{m=0}^{2N_1} (e^{-j\omega})^m = e^{j\omega N_1}\cdot \frac{1-e^{-j\omega(2N_1+1)}}{1-e^{-j\omega}}$$

Simplifying by factoring out half-angle exponentials (standard geometric series / Dirichlet kernel manipulation):

$$\boxed{X(e^{j\omega}) = \frac{\sin\left(\omega\left(N_1+\tfrac{1}{2}\right)\right)}{\sin(\omega/2)}}$$

## Properties of DTFT

- **Periodicity** — DTFT of any signal is periodic about 2π:
  $$X(e^{j(\omega+2\pi)}) = X(e^{j\omega}e^{j2\pi}) = X(e^{j\omega})$$
- **Linearity**
- **Time shifting**
- **Frequency shifting**
- **Time reversal**
- **Conjugation**
- **Convolution**

### Linearity Property

If $x(n)\to X(e^{j\omega})$ and $y(n)\to Y(e^{j\omega})$, then:

$$z(t)=Ax(t)+By(t) \;\to\; Z(e^{j\omega})=AX(e^{j\omega})+BY(e^{j\omega})$$

### Time Shifting Property

If $x(n)\to X(e^{j\omega})$, and $y(n)=x(n-n_0)$:

$$Y(e^{j\omega}) = X(e^{j\omega})\,e^{-j\omega n_0}$$

### Frequency Shifting Property

If $x(n)\to X(e^{j\omega})$, and $y(n) = e^{j\omega_0 n}x(n)$:

$$Y(e^{j\omega}) = X(e^{j(\omega-\omega_0)})$$

### Time Reversal Property

If $x(n)\to X(e^{j\omega})$, then $x(-n)\to X(e^{-j\omega})$.

### Conjugation Property

If $x(n)\to X(e^{j\omega})$, then $x^*(n)\to X^*(e^{-j\omega})$.

### Convolution Property

If $x(n)\to X(e^{j\omega})$, $y(n)\to Y(e^{j\omega})$, and $z(n)=x(n)*y(n)$, then:

$$Z(e^{j\omega}) = X(e^{j\omega})\,Y(e^{j\omega})$$

---
*Source: DSAP leccture 4.pdf*
