# DSAP Lecture 5: Discrete Time Systems, LTI Systems, and Convolution Sum

## System

A system is a set of elements or functional blocks which produce an output in response to an input. The output of a system depends on the system's transfer function.

### DT System

- Discrete time system: associated signals are discrete time in nature — both input and output are DT.
- Examples: semiconductor memories, microprocessor, accumulator, etc.

## Properties of a System

1. Static and dynamic system
2. Invertibility
3. Causality
4. Stability
5. Time invariance
6. Linearity

### Static and Dynamic System

**Static System** (memoryless)
- Output at a given time depends only on the input at that same time.
- Example: y[n] = 2x[n] - x²[n]

**Dynamic System** (system with memory)
- Output at a given time depends on input values from the past as well.
- Example: y[n] = 2x[n-1] - x²[n]

### Invertibility of a System

- In an invertible system there exists a one-to-one relationship between input and output.
- We can retrieve the input from the output.
- An invertible system has an inverse system.

### Causality

**Causal System**
- Output at any instant depends only on the value of the input at the present or past time.
- Example: y(n) = x(n) + x(n-1)
- Example: y[n] = ... + x[-1] + x[0] + x[1] + ... + x[n]

**Non-Causal System**
- Output at any instant depends on the value of input at a future time.
- Example: y(n) = x(n) + x(n+1)

### Stability

Stability is defined in terms of BIBO — **Bounded Input Bounded Output**.

If input x(t) is finite, output y(t) must be finite for BIBO stability:
- $|x(n)| \le M_x < \infty$
- $|y(n)| \le M_y < \infty$

Example: $y(n) = x^2(n)$ is BIBO stable.

Example: $y(n) = \dfrac{1}{x(n-1)}$ is **not** BIBO stable.

### Time Invariance

If a shift in input results in a corresponding shift in the output, the system is time invariant.

**Test:** if $y(n-n_0) = y(n, n_0)$, the system is time invariant.

**Worked example — check time invariance for y(n) = sin[x(n)]:**

$y(n) = f[x(n)] = \sin[x(n)]$. Since $y(n,n_0) = y(n-n_0)$, the signal **is time invariant**.

**Worked example — check time invariance for y(n) = x(2n):**

Since $y(n,n_0) \neq y(n-n_0)$, the signal **is not time invariant**.

### Linearity

Follows the superposition and scaling property.

**Worked example — check linearity for y(n) = n·x(n):**

$$y_3(n) = n\,x_3(n) = n\{ax_1(n)+bx_2(n)\} = a\,n x_1(n) + b\,n x_2(n) = a y_1(n) + b y_2(n)$$

Since $y_3(n) = ay_1(n)+by_2(n)$, the system **is linear**.

**Worked example — check linearity for y(n) = x²(n):**

$$y_3(n) = x_3^2(n) = (ax_1(n)+bx_2(n))^2 = a^2 x_1^2(n) + b^2 x_2^2(n) + 2ab\, x_1(n)x_2(n)$$
$$= a^2 y_1(n) + b^2 y_2(n) + 2ab\, x_1(n)x_2(n)$$

Since $y_3(n) \neq a y_1(n)+by_2(n)$ in general, the system **is not linear**.

*(Note: original slide text says "the given signal is linear" here — this appears to be an error in the source material; the derivation itself shows the extra cross term $2ab\,x_1(n)x_2(n)$ that breaks superposition, so the system should be classified as non-linear. Flagging this discrepancy rather than silently correcting the source.)*

**Practice problem (left as exercise):** check whether $y(n) = \sin[x(n+2)]$ is memoryless, causal, stable, linear, and time invariant.

## LTI System

- Linear Time Invariant System.
- Characterized by the impulse response of the system, h(t) [or h[n] for DT].

### Output of an LTI System

- CT LTI system: output via **convolution integral** — $y(t) = x(t) * h(t)$
- DT LTI system: output via **convolution sum** — $y[n] = x[n] * h[n]$

## Convolution Sum — Derivation

Any DT signal can be expressed as a weighted sum of shifted impulses:

$$x[n] = \sum_{k=-\infty}^{\infty} x[k]\,\delta[n-k]$$

Applying the system operator T to x[n]:

$$y[n] = T\{x[n]\} = T\left\{\sum_k x[k]\delta[n-k]\right\}$$

For an LTI system (using linearity and time-invariance), this reduces to:

$$\boxed{y[n] = \sum_{k=-\infty}^{\infty} x[k]\,h[n-k] = x[n]*h[n]}$$

where h[n] is the impulse response of the system.

## Worked Convolution Examples

### Example A

$x[n]=1$ for $-1\le n\le 1$, 0 otherwise. $h[n]=1$ for $-1\le n\le 2$, 0 otherwise.

$$y[n]=x[n]*h[n] = x[-1]h[n+1]+x[0]h[n]+x[1]h[n-1] = h[n+1]+h[n]+h[n-1]$$

Result: **y[n] = {1, 2, 3, 3, 2, 1}**

### Example B

$x[n]=u[n]$, $h[n]=a^n u[n]$, $0<a<1$.

$$y[n] = h[0]x[n]+h[1]x[n-1]+h[2]x[n-2]+\cdots = x[n]+ax[n-1]+a^2x[n-2]+\cdots$$

giving the running partial sums:

$$y[0]=1,\quad y[1]=1+a,\quad y[2]=1+a+a^2,\quad \ldots \quad y[n] = 1+a+a^2+\cdots+a^n$$

### Example C (repeat of A, other convolution order)

Same x[n], h[n] as Example A: $y[n]=h[n]*x[n] = h[-1]x[n+1]+h[0]x[n]+h[1]x[n-1]+h[2]x[n-2]$

Result: **y[n] = {1, 2, 3, 3, 2, 1}** (commutative — same as Example A).

### Example D

$x[n] = \delta[n] + 2\delta[n-1] - \delta[n-3]$, $h[n] = 2\delta[n+1] + 2\delta[n-1]$

$$y[n] = h[-1]x[n+1] + h[0]x[n] + h[1]x[n-1] = 2x[n+1] + 2x[n-1]$$

## Tabular "Trick" Method for Convolution

**Example: x = {1,1,1}, h = {1,1,1,1}**

| | 1 | 1 | 1 | 1 |
|---|---|---|---|---|
| **1** | 1 | 1 | 1 | 1 |
| **1** | 1 | 1 | 1 | 1 |
| **1** | 1 | 1 | 1 | 1 |
| **0** | 0 | 0 | 0 | 0 |

Diagonal summation gives: **y = {1, 2, 3, 3, 2, 1, 0}**

**Example: x = {1,2,0,-1}, h = {2,0,2}**

| | 2 | 0 | 2 | 0 |
|---|---|---|---|---|
| **1** | 2 | 0 | 2 | 0 |
| **2** | 4 | 0 | 4 | 0 |
| **0** | 0 | 0 | 0 | 0 |
| **-1** | -2 | 0 | -2 | 0 |

Diagonal summation gives: **y = {2, 4, 2, 2, 0, -2, 0}**

## Properties of LTI Systems

- Commutative
- Distributive
- Associative
- Memoryless
- Stability
- Causality
- Invertibility

### Commutative Property

$$x(t)*h(t) = h(t)*x(t)$$

**Proof:** starting from $x(t)*h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)\,d\tau$, substitute $t-\tau=\lambda$ (so $\tau = t-\lambda$, $d\tau=-d\lambda$):

$$x(t)*h(t) = \int_{-\infty}^{\infty} h(\lambda)x(t-\lambda)\,d\lambda = h(t)*x(t)$$

Similarly for DT: $x[n]*h[n] = h[n]*x[n]$.

### Distributive Property

$$x(t)*\{h_1(t)+h_2(t)\} = x(t)*h_1(t) + x(t)*h_2(t)$$

**Proof:** Let $h(t)=h_1(t)+h_2(t)$.

$$x(t)*h(t) = \int_{-\infty}^{\infty}x(\tau)\big(h_1(\tau)+h_2(\tau)\big)(t-\tau)... = \int x(\tau)h_1(t-\tau)d\tau + \int x(\tau)h_2(t-\tau)d\tau = x(t)*h_1(t)+x(t)*h_2(t)$$

### Associative Property

Stated but derivation not shown in the slides (graphic-only slide in original).

### Causality (for LTI systems)

A system is causal if the output at any time depends only on the input at the past or present.
- Example: y(t) = x(t) + x(t-1)
- An LTI system is causal iff h(t) = 0 for t < 0 (equivalently h[n] = 0 for n < 0).

### Stability (for LTI systems)

- A CT LTI system is stable if its impulse response h(t) is **absolutely integrable**: $\int_{-\infty}^{\infty}|h(\tau)|\,d\tau < \infty$
- A DT LTI system is stable if its impulse response h[n] is **absolutely summable**: $\sum_{n=-\infty}^{\infty}|h[n]| < \infty$

### Memoryless (for LTI systems)

An LTI system is memoryless if h(t) = 0 for t ≠ 0 (equivalently h[n] = 0 for n ≠ 0). Example: h(t) = kδ(t).

### Invertibility (for LTI systems)

If h₁(t) and h₂(t) are in cascade, and h₂(t) is the reverse system of h₁(t), then for an invertible system we must be able to retrieve the input from the output. Hence:

$$h(t) = h_1(t)*h_2(t) = \delta(t)$$

---
*Source: DSAP lecture 5.pdf*
