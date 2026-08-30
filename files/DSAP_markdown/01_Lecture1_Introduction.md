# DSAP Lecture 1: Introduction

## Syllabus

- Discrete time signals and systems
- Z-transform
- Analysis of LTI system in frequency domain
- Discrete filter structures
- FIR filter design
- IIR filter design
- Discrete Fourier transform

## Marks Distribution

- End Semester Exam: 80 marks
- Internal Marks: 20
  - Assessment: 50%
  - Assignment: 25%
  - Attendance + class performance: 25%
- Lab: 25 marks
  - Attendance: 40%
  - Report: 40%
  - Lab Work + performance: 20%

## Chapter 1: Discrete Time Signal and System

- Discrete time signal, basic signal types
- Energy signal, power signal
- Periodicity of discrete time signal
- Transformation of independent variable
- Discrete time Fourier series and properties
- Discrete time Fourier transform and properties
- Discrete time system properties
- Linear time invariant (LTI) system convolution sum, properties of LTI system
- Frequency response of LTI system
- Sampling of continuous time signal, spectral properties of sampled signal

## What is a Signal?

A signal is a function of one or more independent variables which conveys information about the behavior or nature of some phenomenon.

- Example: an electric signal — voltage as a function of time.

## Classification Based on Dimensions

**One Dimensional Signal**
- Function of only one independent variable.
- Example: speech signal — amplitude depends on time.

**Multidimensional Signal**
- Function of more than one independent variable.
- Example: an image on a computer screen is a two-dimensional signal — intensity at each point is a function of two spatial variables: intensity at a pixel = f(x, y).

## Classification of One Dimensional Signal

**Continuous Time (CT) Signal**
- Defined at every instant of time under consideration.
- Represented as x(t).
- Example: an electric signal with voltage defined at every instant of time.

**Discrete Time (DT) Signal**
- Defined only at certain time instants; amplitude between two time instances is not defined.
- Represented as x[n].

> *Figure not reproduced: comparison plot of CT and DT sine waves (original slide is graphic-only).*

## Representation of DT Signal

1. Graphical representation
2. Functional representation
3. Tabular representation
4. Sequence representation

**Functional representation example:**

```
x[n] = 1   for -1 ≤ n ≤ 2
     = -1  for n = 3
     = 0   otherwise
```

**Tabular representation:**

| n    | ... | -2 | -1 | 0 | 1 | 2 | 3  | 4 | ... |
|------|-----|----|----|---|---|---|----|---|-----|
| x[n] | ... | 0  | 1  | 1 | 1 | 1 | -1 | 0 | ... |

**Sequence representation:**

x[n] = {..., 0, 0, 1, 1, 1, 1, -1, 0, 0, ...}

## Some Basic Signals

1. Unit impulse signal
2. Unit step signal
3. Ramp signal
4. Signum signal
5. Sinusoidal signal
6. Exponential signal
7. Rectangular signal
8. Sinc signal

### Unit Impulse Signal (delta / Dirac delta)

DT: δ[n] = 1 for n = 0; δ[n] = 0 otherwise

### Unit Step Signal

DT: u[n] = 1 for n ≥ 0; u[n] = 0 for n < 0

### Unit Ramp Signal

DT: r[n] = n for n ≥ 0; r[n] = 0 for n < 0

### Signum Signal

DT: sgn[n] = 1 for n > 0; sgn[n] = 0 for n = 0; sgn[n] = -1 for n < 0

### Sinusoidal Signal

Includes sine or cosine as a function of time.

DT: x[n] = A sin(ωn), y[n] = A cos(ωn)

### Exponential Signal

CT: x(t) = c·e^(at), where c and a are real numbers.
- If a > 0: growing exponential.
- If a < 0: decaying exponential.

DT: x[n] = c·e^(an), where c and a are real numbers.
- If a > 0: growing exponential.
- If a < 0: decaying exponential.

### Rectangular Signal and Sinc Signal

> *Figures not reproduced: CT/DT rectangular pulse and sinc function plots (original slides are graphic-only).*

## Revision of Lecture 1

- Course introduction
- What is a signal?
- One dimensional and multidimensional signal
- CT and DT signal
- Unit step, unit impulse, ramp, signum, ...

---
*Source: DSAP leccture 1.pdf*
