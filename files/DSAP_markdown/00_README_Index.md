# CT704 — Digital Signal Analysis and Processing (DSAP): Markdown Notes Index

Converted from source PDFs (`DSAP.zip`) — Gaurav Gautam, Sr. Lecturer, Dept. of Electronics, Communication and Information Engineering.

Coursework map reference: CT704, order 2/6, exam Sep 8, 2026 (2083 Bhadra 23). NLM: `bc8653c3-a1d3-42b7-bca1-cd8e4effc038`.

## Lecture Order

| # | File | Topic |
|---|---|---|
| 1 | `01_Lecture1_Introduction.md` | Introduction, signal classification, basic signals |
| 2 | `02_Lecture2_Periodicity_Energy_Power_EvenOdd_Transformation.md` | Periodicity, energy/power signals, even/odd, transformations |
| 3 | `03_Lecture3_DT_Fourier_Series.md` | DT Fourier Series — derivation, worked examples, Parseval's |
| 4 | `04_Lecture4_DTFT.md` | DTFT — derivation, properties |
| 5 | `05_Lecture5_Systems_LTI_Convolution.md` | Systems, LTI, convolution sum |
| 6 | `06_Lecture6_Sampling_of_Analog_Signals.md` | Sampling theorem, aliasing |
| 7 | `07_Lecture7_Z_Transform_Intro_ROC.md` | Z-transform intro, ROC |
| 8 | `08_Lecture8-9_Z_Transform_Properties_Poles_Zeros_Inverse.md` | Z-transform properties, poles/zeros, inverse Z-transform |
| 9 | `09_Lecture11-12_IIR_Filter_Structures.md` | IIR structures — Direct Form I/II, cascade, parallel, lattice |
| 10 | `10_Lecture13_Lattice_Ladder_Continued.md` | Lattice-ladder structure (continued) |
| 11 | `11_Lecture14_FIR_Digital_Filters.md` | FIR filters — direct/cascade/lattice forms |
| 12 | `12_Lecture15_FIR_Design_Windows_Intro.md` | FIR design via windows, Gibbs phenomenon |
| 13 | `13_Lecture16-17_Kaiser_Window_Frequency_Sampling.md` | Kaiser window, frequency sampling method |
| 14 | `14_Lecture_Optimal_FIR_Filter_Design.md` | Optimal filter — Parks–McClellan, alternation theorem, Remez |
| 15 | `15_Lecture18-20_IIR_Design_Impulse_Invariance_Bilinear_Butterworth_Chebyshev.md` | IIR design — impulse invariance, bilinear transform, Butterworth, Chebyshev |
| 16 | `16_Lecture21_DFT_Introduction.md` | DFT introduction |
| 17 | `17_Lecture22_DFT_Properties_Periodicity_Linearity_CircularShift_Convolution.md` | DFT properties — periodicity, linearity, circular shift, convolution |
| 18 | `18_Lecture23_DFT_Circular_Convolution_Remaining_Properties.md` | Circular convolution, linear-via-circular, time reversal, correlation, Parseval's |
| 19 | `19_Lecture24_Radix2_DIT_FFT.md` | FFT — Radix-2 Decimation-in-Time derivation |
| 20 | `20_FFT_Supplement_Complexity_Table_DIF.md` | FFT complexity comparison table, DIF FFT, IDFT via FFT |
| 21 | `21_Passband_Stopband_Ripple_Diagram.md` | Reference diagram — passband/stopband ripple, transition band |

## Skipped

- **`New Microsoft Word Document.docx`** — confirmed empty (0 KB of actual content). Not converted.

## Known Issues Flagged During Conversion (not silently fixed)

- **Lecture 5:** a linearity worked example's stated conclusion appears to contradict its own derivation.
- **Lecture 14:** one coefficient in an expanded polynomial looks like a possible OCR artifact.
- **Optimal filter lecture:** the antisymmetric-odd/even ↔ M-odd/even pairing looks inverted vs. standard convention.
- **Lecture 23:** the convolution-property worked example is truncated in the source (final numeric result not shown).
- **Lecture 24:** the 8-point DIT worked example is posed but not solved in the extracted text; the two-stage flow-graph combination is diagram-only (not extractable).
- **FFT supplement:** the complexity comparison table's N=4 and N=32 rows don't match the stated $\frac{N}{2}\log_2N$ / $N\log_2N$ formula (both off by ~2×) — copied verbatim from source, flagged rather than corrected.

## Figure-Only Slides (Not Convertible to Text)

Several slides across the deck are diagrams with no extractable text (e.g. signal classification graphics, CT/DT sine wave plots, filter structure block diagrams, FFT butterfly flow graphs, the passband/stopband ripple plot). These are noted inline in the relevant lecture file with a pointer back to the source PDF and page number where identified.
