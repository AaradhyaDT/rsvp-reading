# RF and Microwave Engineering — Chapter 6: RF Design Practice


## Slide 1

Chapter 6: RF Design Practice

## Slide 2

RF Low Pass Filter Design

## Slide 3

Microwave Filter
• A filter is a two-port network used to control the frequency response at a certain
point in an RF or microwave system by providing transmission at frequencies within
the pass band of the filter and attenuation in the stop band of the filter.
• Typical frequency responses include LP, HP, BP, and BR characteristics.
• Applications can be found in virtually any type of RF or microwave communication,
radar, or test and measurement system.
• The image parameter method of filter design was developed in the late 1930s and
was useful for low-frequency filters in radio and telephony.
• Today, most microwave filter design is done with sophisticated computer-aided
design (CAD ) packages based on the insertion loss method.
• Filters designed using the image parameters method consist of a cascade of simpler
two port filter sections to provide the desired cutoff frequencies and attenuation
characteristics but do not allow the specification of a particular frequency response
over the complete operating range.

## Slide 4

Microwave Filter
Types of Filters:
Low Pass Filter (LPF)
High Pass Filter (HPF)
Band Pass Filter (BPF)
Band Reject Filter(BRF/BSF/Notch)
All Pass Filter – Not required at microwave frequency
Amplitude Response of
Ideal Filters

## Slide 5

Microwave Filter
• Thus, although the procedure is relatively simple, the design of filters by the image
parameter method often must be iterated many times to achieve the designed results.
• The insertion loss method, uses network synthesis techniques to design filters with a
completely specified frequency response.
• The design is simplified by beginning with low-pass filter prototypes that are
normalized in terms of impedance and frequency.
• Transformations are then applied to convert the prototype designs to the desired
frequency range and impedance level.
• Both the image parameter and insertion loss methods of filter design lead to circuits
using lumped elements (capacitors and inductors)
• For microwave applications such designs usually must be modified to employ
distributed elements consisting of transmission line sections.

## Slide 6

Low Pass Filter (LPF)

## Slide 7

Lumped Element Realization for LPF

## Slide 8

Characterization by Power Loss Ratio

## Slide 9

Some practical Filter Response

## Slide 10

Some Practical Filter Response

## Slide 11

Some Practical Filter Response

## Slide 12

Some Practical Filter Response

## Slide 13

Comparison of LPF Response

## Slide 14

Comparison of Order of LPF

## Slide 15

Insertion Loss Method (ILM)
• We know that Γ(𝜔) 2 is an even function of 𝜔; therefore it can be expressed as a
M ω
polynomial in 𝜔2 . Thus we can write Γ(ω) 2 =
2 2
M ω +N ω
• Where M and N are real polynomials in 𝜔2 . Applying this and calculating for power
loss ratio as;
𝑀 𝜔2
𝑃 = 1 +
𝐿𝑅
𝑁 𝜔2

## Slide 16

The insertion loss method in microwave filter design means starting with the desired
frequency response (especially insertion loss vs frequency), deriving a prototype filter
(e.g., Chebyshev), and then converting it into a physical circuit using microwave
components like microstrip stubs or resonators.
The insertion loss method is preferred because it offers clear control over
performance, flexibility in filter types, and strong alignment with microwave
circuit needs.

## Slide 17

Design of Microwave Filter using ILM

## Slide 18

General Procedure of Filter Design using ILM

## Slide 19

Transformation from LPF to HPF, BPF and BSF

## Slide 20

Transformation from LPF to HPF, BPF and BSF

## Slide 21

Transformation from LPT to HPF

## Slide 22

Impedance and Frequency Scaling

## Slide 23

Micro-strip Realization
• Microstrip is a type of electrical transmission line which can be fabricated using PCB
technology and used to convey Microwave frequency signals.
• It consists of a conducting strip separated from a ground plane by a dielectric layer
known as the substrate.
• Microwave components such as antennas, couplers, filters, power dividers etc. can be
formed from microstrip, the entire device existing as the pattern of metallization on
the substrate.
• Compared to waveguide:
• Less expensive, lower power handling capacity, higher losses, susceptible to cross-
talk and unintentional radiation.
• Why Microstrips?
• Compatibility with the microwave active devices that can be very easily mounted on
the substrate, Enormous reduction in volume and weight, Increase in reliability,
Reduction in cost

## Slide 24

• A microstrip line is a type of transmission line consisting of a conducting strip on
top of a dielectric substrate, with a ground plane on the bottom.
• It guides high-frequency signals using electromagnetic fields between the strip and
ground.
• A microstrip has one conductor on top of the substrate and a ground plane below,
with fields partially in the air.
• A stripline is embedded between two ground planes inside the substrate, leading to
better shielding but more complex fabrication.
• Key Components of a microstrip circuit:
• Conducting Strip
• Dielectric substrate
• Ground plane

## Slide 25

Because of lightweight, compact, support high-frequency operation, and can be
integrated with antennas and other components they can used in satellite
communications systems.
Microstrip patch antennas are etched directly onto the same board as other RF
components, saving space and reducing interconnect losses.
Best practices to reduce losses:
• Ensuring thermal stability
• Minimizing radiation losses
• Using space-grade, radiation-tolerant materials(Teflon-based laminates)

## Slide 26

• Characteristic impedance of a microstrip line depends on the width of the conductor,
the thickness and dielectric constat of the substrate.
• The substrate affects impedance, loss, signal speed, and radiation. Low-loss, stable
substrates are preferred for high-frequency or sensitive designs.
• A higher dielectric constant reduces the size of the circuit but increases signal loss
and dispersion.
• Lower dielectric constants result in larger circuit but better performance.
• Common substrates:
• Rogers RO4000 series
• FR-4 ( Flame-retardant)(for low-cost, low- frequency)
• Duroid (RT/duroid 5880, 6010)
• Teflon-based laminates for high-performance designs

## Slide 27

Micro-strip Realization Contd..
Applications:
• Microwave circuits find extensive applications in radar systems, microwave
communication links, satellite communication systems, wireless and mobile
communication systems, medical equipment etc.
• We can implement LPF in microstrip or stripline by using alternating sections of
very high and very low characteristics impedance lines.
• These filters are also called stepped-impedance or High-Zo Low Zo filters.
• Advantages of using such filters are easier to design and take up less space than a
similar LPF using stubs.
• Because of the approximations involved, however their electrical performance is not
good so the use of such filters is usually limited to applications where a sharp cut-off
is not required.

## Slide 28

Microstrip Line Realization for LPF
Generally,
Low Zo ( C ) ≈ 20 
High Zo ( L ) ≈ 100 

## Slide 29

Microstrip Realization for Elliptical Filter

## Slide 30

Example

## Slide 31

Example

## Slide 32

Microstrip Realization for Series L & C
L
C
z z
z z
s L
s L
z z
s L
z z
s L
OR
z z
s L

## Slide 33

Microstrip Realization for Shunt L & C
z z
s C z s L z
L L
z z
s L z z
s L

## Slide 34

 and T Network LPF
L
L L
1 3
C
1 C z C z
s 2 L
C C
1 3
L
L
z
z
L
s L
z
z L
s C

## Slide 35

Double Section (Double Pad) LPF
L L
2 4
C
C C
3 5
C C C
1 3 5
z
z
L
s L
2 L

## Slide 36

T and  Network HPF
C C
C
1 3
z
z
z z s L L
L
s L L 1 3
C
C
1 L L
1 3
z
z
z L z
s L s C L
2 2

## Slide 37

LC Shunt and Series Resonant Circuit
L C
z
z L
L z
C s
z L
s
z
L
Short
Circuit
z z
z s L
z
s
L

## Slide 38

Double Section BPF
L C L C
2 2 4 4
z L 1 C 1 L 3 C 3 L 5 C 5 z L
s
Short
Short
Circuit
Circuit
z z
s L

## Slide 39

RF Amplifier Design

## Slide 40

Microwave Amplifier
• Early microwave Amplifiers are relied on tubes such as klystrons and TWT or solid
state reflection amplifiers based on the –ve resistance characteristics of tunnel or
varactor diode.
• Most of RF and Microwave amplifier today use transistor devices such as Si BJTs,
GaAs or SiGe, InP FET and GaAs HEMT (High Electron Mobility transistor).
• Transistor Amplifier can be used as frequencies in excess of 100GHz in a wide range
of application requiring small size, low noise figure, broad bandwidth and medium to
high power capacity.
Transistor Amplifier relay on:
• S-parameters
• Stability
• Maximum Gain
• Specified Gain
• Low noise Figure

## Slide 41

Inverting Amplifier using Op-Amp 741

## Slide 44

Power Gain of an Amplifier

## Slide 45

Power Gain of an Amplifier (Contd..)

## Slide 46

Three Cases of Amplifier Gain

## Slide 47

Stability of an Amplifier

## Slide 48

Derivation of Stability Circles

## Slide 49

Derivation of Stability Circles (Contd..)

## Slide 50

Derivation of Stability Circles (Contd..)

## Slide 51

Amplifier Stability Example

## Slide 52

Amplifier Stability Example

## Slide 53

Constant Gain Circles: Unilateral Case

## Slide 54

Constant Gain Circles: Unilateral Case

## Slide 55

Unilateral Figure of Merit

## Slide 56

Unilateral Figure of Merit (Contd..)

## Slide 57

Design of an Amplifier

## Slide 58

Design of an Amplifier (Contd..)

## Slide 59

Design of an Amplifier (Contd..)

## Slide 60

Design of an Amplifier (Contd..)

## Slide 61

Design of an Amplifier ( and  selection)
S L

## Slide 62

Design of an Amplifier (for  )
S

## Slide 63

Design of an Amplifier (for  )
L

## Slide 64

Design of an Amplifier (Final Circuit)

## Slide 65

RF Oscillator Design

## Slide 66

Amplifier with Positive Feedback

## Slide 67

Amplifier with Positive Feedback

## Slide 68

Two Port Oscillator

## Slide 69

Two Port Oscillator (Contd..)

## Slide 70

Negative Resistance

## Slide 71

Derivation for One Port Oscillator

## Slide 72

One Port Oscillator (Contd..)

## Slide 73

Two Port Oscillator Design Steps

## Slide 75

Thank You
Any Questions???
