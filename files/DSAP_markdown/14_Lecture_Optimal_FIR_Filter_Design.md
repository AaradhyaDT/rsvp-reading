# DSAP: Optimal FIR Filter Design (Parks–McClellan / Remez)

## Motivation

The window method and frequency sampling method are relatively simple techniques for designing linear-phase FIR filters, but they have minor disadvantages that can make them undesirable for certain applications — notably, the inability to precisely control the critical frequencies (e.g. $\omega_p$, $\omega_s$) and the deviation between the required and actual frequency responses.

**Optimal filter:** defined as the design in which the weighted approximation error between the desired and actual frequency responses is spread evenly across the passband and stopband, minimizing the maximum error.

## Design Setup

Consider a lowpass filter with passband edge frequency $\omega_p$ and stopband edge frequency $\omega_s$:

$$1-\delta_1 \le H_r(\omega) \le 1-\delta_2 \quad \text{for } |\omega|\le\omega_p$$
$$0 \le H_r(\omega) \le \delta_2 \quad \text{for } |\omega|>\omega_s$$

- $\delta_1$, $\delta_2$ represent the ripple in the passband and stopband, respectively.
- The other filter parameter is **M**, the filter length.

Let $H_r(\omega)$ be the real-valued frequency response of h(n). It can be represented as:

$$H_r(\omega) = Q(\omega)P(\omega)$$

### Four Symmetry Cases

| Filter type | Condition |
|---|---|
| Symmetric and odd | $h(n)=h(M-1-n)$, M odd |
| Symmetric and even | $h(n)=h(M-1-n)$, M even |
| Antisymmetric and odd | $h(n)=-h(M-1-n)$, M even *(as given in source; see note below)* |
| Antisymmetric and even | $h(n)=-h(M-1-n)$, M odd *(as given in source; see note below)* |

> *Note: the source slide pairs "odd" with "M even" and "even" with "M odd" for the antisymmetric cases, which looks inverted relative to standard convention (normally "odd length" ↔ M odd, "even length" ↔ M even, consistently across both symmetric and antisymmetric cases). Transcribed exactly as it appears on the slide — flagging the likely inconsistency rather than silently correcting it. Worth double-checking against your textbook/PYQ for the exam.*

### Q(ω) and P(ω) for Each Case

| Filter type | Q(ω) | P(ω) |
|---|---|---|
| Symmetric, odd | 1 | $\sum_{k=0}^{(M-1)/2} a_k\cos(\omega k)$ |
| Symmetric, even | $\cos(\omega/2)$ | $\sum_{k=0}^{M/2-1} \tilde b_k\cos(\omega k)$ |
| Antisymmetric, odd | $\sin(\omega)$ | $\sum_{k=0}^{(M-3)/2} \tilde c_k\cos(\omega k)$ |
| Antisymmetric, even | $\sin(\omega/2)$ | $\sum_{k=0}^{M/2-1} \tilde d_k\cos(\omega k)$ |

## Error Function and Weighting

Let $W(\omega)$ be a weighting function on the approximation error, and $H_{dr}(\omega)$ the desired real-valued frequency response (1 in the passband, 0 in the stopband).

**Approximation error:**

$$E(\omega) = W(\omega)\big[H_{dr}(\omega)-H_r(\omega)\big]$$

Substituting $H_r(\omega)=Q(\omega)P(\omega)$:

$$E(\omega) = W(\omega)\big[H_{dr}(\omega)-Q(\omega)P(\omega)\big] = W(\omega)Q(\omega)\left[\frac{H_{dr}(\omega)}{Q(\omega)}-P(\omega)\right]$$

Defining $\tilde W(\omega) = W(\omega)Q(\omega)$ and $\tilde H_{dr}(\omega) = \dfrac{H_{dr}(\omega)}{Q(\omega)}$:

$$E(\omega) = \tilde W(\omega)\big[\tilde H_{dr}(\omega)-P(\omega)\big]$$

where $P(\omega)$ can commonly be written as:

$$P(\omega) = \sum_{k=0}^{L} a_k\cos(\omega k)$$

**Convention:** normalize $W(\omega)$ to unity in the stopband, and set $W(\omega)=\delta_2/\delta_1$ in the passband.

The optimal filter design problem is to find filter parameters $a(k)$ that **minimize the maximum absolute value of E(ω)**.

The solution is due to **Parks and McClellan**, who applied a theorem from Chebyshev approximation theory called the **Alternation Theorem**.

## Alternation Theorem

Let S be a compact subset of the interval $(0,\pi)$.

A necessary and sufficient condition for $P(\omega)=\sum_{k=0}^{L}a_k\cos(\omega k)$ to be the unique best approximation is that the error function $E(\omega)$ exhibit **at least L+2 frequencies** $\{\omega_i\}$ in S such that $\omega_1<\omega_2<\cdots<\omega_{L+2}$, with:

$$E(\omega_i) = -E(\omega_{i+1}), \qquad |E(\omega_i)| = \max_\omega |E(\omega)|, \quad i=1,2,\ldots,L+2$$

The error function alternates in sign between two successive extremal frequencies — hence "alternation theorem."

**Consequences:**
- $H_r(\omega)$ can have at most L+1 maxima or minima.
- $E(\omega)$ can have at most L+3 maxima or minima.
- The theorem states there are L+2 extremal frequencies in E(ω).
- The error function can have either L+2 or L+3 extrema.
- If L+3 alternations are present, it is called a **maximal ripple filter**.

## Remez Exchange Algorithm

The alternation theorem guarantees a unique solution for the approximation:

$$E(\omega_n) = \tilde W(\omega_n)\big[\tilde H_{dr}(\omega_n)-P(\omega_n)\big] = (-1)^n\delta$$

where $\omega_n$ are the desired extremal frequencies and δ is the maximum value of the error function E(ω).

Initially, none of $\omega_n$, $a(k)$, or δ are known. To solve this, an **iterative method** called the **Remez Exchange Algorithm** is used.

*(Full algorithm flowchart is graphic-only in the original slide and not reproduced here.)*

---
*Source: DSAP-optimal filter.pdf*
