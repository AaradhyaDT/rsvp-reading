# RF and Microwave Engineering — Chapter 3


## Slide 1

Chapter-3:
RF & M/W Network Theory and Analysis

## Slide 2

Two-Port Network
• A two-port network (a kind of four-terminal network) is a electrical
network or device with two pairs of terminals to connect to external
circuits.
• Two terminals constitute a port if the currents applied to them satisfy
the essential requirement known as the port condition: the electric
current entering one terminal must equal the current emerging from
the other terminal on the same port.
• The ports constitute interfaces where the network connects to other
networks, the points where signals are applied or outputs are taken.
In a two-port network, often port 1 is considered the input port and
port 2 is considered the output port.

## Slide 3

Two-Port Network Contd…
• The two-port network model is used in mathematical circuit analysis
techniques to isolate portions of larger circuits.
• A two-port network is regarded as a "black box" with its properties
specified by a matrix of numbers. This allows the response of the
network to signals applied to the ports to be calculated easily, without
solving for all the internal voltages and currents in the network.
• It also allows similar circuits or devices to be compared easily. For
example, transistors are often regarded as two-ports, characterized by
their h-parameters which are listed by the manufacturer. Any linear
circuit with four terminals can be regarded as a two-port network
provided that it does not contain an independent source and satisfies the
port conditions.

## Slide 4

Two-Port Network Contd…
• Examples of circuits analyzed as two-ports are filters, matching
networks, transmission lines, transformers and small-signal models for
transistors (such as the hybrid-pi model). The analysis of passive two-port
networks is an outgrowth of reciprocity theorems.
Two port networks can be describes in many ways:
• Z-parameters:
V Z Z I
1 11 12 1
=
V Z Z I
2 21 22 2
• Y-Parameters:
I Y Y V
1 11 12 1
=
I Y Y V
2 21 22 2
• ABCD-Parameters:
V A B V
1 2
=
I C D −I
1 2

## Slide 5

ABCD Parameters

## Slide 6

ABCD Parameters for Series Impedance

## Slide 7

ABCD Parameters for Shunt Admittance

## Slide 8

ABCD Parameters for Cascaded Network

## Slide 9

Limitations of ABCD, Y, Z and h-Parameters
• At low frequencies, physical length of the network is larger than wavelength
(λ) of the signal.
• Therefore the measurable input and output values are voltage and current
analysed in terms of ABCD, Y, Z and h-parameters with well-defined
termination conditions .
• These parameters are analysed under short or open circuit conditions.
• But in microwaves open or short circuit conditions are not easily achievable
and terminating active devices, this way can damage the devices due to the
total reflection of power back into the devices.
• Open or short circuit conditions often results in oscillation for a wide
range of frequencies for active devices such as the transistor and
negative resistance diode.

## Slide 10

Limitations of ABCD, Y, Z and h-Parameters
• Physical length of the components or devices at microwave frequencies
are comparable or much smaller than wavelength (λ).
• Hence the voltage and current are not well defined at each discrete
point. So a distributive analysis is required.
• Z, Y, ABCD and h-parameters often change the biasing conditions such
as junction capacitances at higher frequencies.
• Unavailability of equipment to measure RF/MW total current and
voltage.

## Slide 11

Solution???
• Input-output behavior of network is defined in terms of normalized power
waves.
• Ratio of the power waves is recorded , called scattering parameters.
• S-parameters are measured based on properly terminated transmission lines
(not open/short circuit conditions)

## Slide 12

S-Parameters
• The S-parameters are members of a family of similar parameters, other
examples being: Y-parameters, Z-parameters, H-parameters, and ABCD-
parameters. They differ from these, in the sense that S-parameters do not use
open or short circuit conditions to characterize a linear electrical network;
instead, matched loads are used.
• These terminations are much easier to use at high signal frequencies than
open-circuit and short-circuit terminations. Moreover, the quantities are
measured in terms of power.
• Many electrical properties of networks of components
(inductors, capacitors, resistors) may be expressed using S-parameters, such
as gain, return loss, voltage standing wave ratio (VSWR), reflection
coefficient and amplifier stability.

## Slide 13

S-Parameters
• The term 'scattering' is more common to optical engineering than RF engineering,
referring to the effect observed when a plane electromagnetic wave is incident on an
obstruction or passes across dissimilar dielectric media.
• In the context of S-parameters, scattering refers to the way in which the
traveling currents and voltages in a transmission line are affected when they meet
a discontinuity caused by the insertion of a network into the transmission line. This
is equivalent to the wave meeting an impedance differing from the
line's characteristic impedance.
• Although applicable at any frequency, S-parameters are mostly used for networks
operating at radio frequency (RF) and microwave frequencies where signal power
and energy considerations are more easily quantified than currents and voltages.
• S-parameters change with the measurement frequency, so frequency must be
specified for any S-parameter measurements stated, in addition to the characteristic
impedance or system impedance.
•

## Slide 14

S-Parameters Contd…
• S-parameters are different, and are defined in terms of incident and reflected
waves at ports.
• S-parameters are used primarily at UHF and microwave frequencies where it
becomes difficult to measure voltages and currents directly.
• On the other hand, incident and reflected power are easy to measure
using directional couplers.
b S S a
1 11 12 1
=
b S S a
2 21 22 2
• where the a are the incident waves and the b are the reflected waves at port k. It is
k k
conventional to define the a and b in terms of the square root of power.
k k
Consequently, there is a relationship with the wave voltages
• For reciprocal networks S = S . For symmetrical networks S =S . For
12 21 11 22
antimetrical networks S =-S . For lossless reciprocal networks
11 22
2 2
𝑆 = 𝑆 and 𝑆 + 𝑆 =1.
11 22 11 22 14

## Slide 15

S-Parameters Contd…

## Slide 16

S-Parameters Contd…

## Slide 17

S-Parameters Contd…
Power, voltage and current
can be considered to be in
the form of waves travelling
in both directions.
For a wave incident on Port 1,
some part of this signal
reflects back out of that port
and some portion of the signal
exits other ports.

## Slide 18

S-Parameters Contd…
S refers to the signal
reflected at Port 1 for the
signal incident at Port 1.
Scattering parameter S
is the ratio of the two
waves b1/a1.
S refers to the signal
exiting at Port 2 for the
signal incident at Port 1.
Scattering parameter S
is the ratio of the two
waves b2/a1.

## Slide 19

S-Parameters Contd…

## Slide 20

Signal Flow Graph/Diagram
Where,
S = Return loss at port 1.
S = Return loss at port 2.
S = Isolation loss.
S = Insertion loss.

## Slide 21

Some RF Terminology for S-Parameters
Retrun Loss at Port 1:RL = −20 log S
Insertion Loss: IL = 20log( S )
Isolation Loss:RL = 20log( S )
Retrun Loss at Port 2:RL = −20log( S )

## Slide 22

S-Parameters of N-Port Network
• For describing and analyzing a microwave network the input and output
parameters are defined by scattering matrix.
• Scattering matrix is also known as S-matrix or S-parameters.
• Scattering matrices are widely used in RF and microwave frequencies for
component modelling, component specifications and circuit design.

## Slide 23

S-Parameters for N-Port Network Contd..
• Scattering matrices are widely used in RF and microwave frequencies for
component modeling, component specifications and circuit design.
• S-parameters can be measured by network analyzers.
• For a general n-port network, the s-matrix is given in the following
equations:
a = incident wave voltages at port i
i
b = reflected wave voltages at port i
i

## Slide 24

Properties S-Matrix
• A generalized n-port has n2 scattering coefficients. While the S may be all
ij
independent, in general due to symmetries etc. the number of independent
coefficients is much smaller.
• An n-port is reciprocal when S = S for all i and j. Most passive components
ij ji
are reciprocal (resistors, capacitors, transformers, etc., except for structures
involving magnetized ferrites, plasmas etc.), active components such as
amplifiers are generally non-reciprocal.
• A two-port is symmetric, when it is reciprocal (S = S ) and when the input
21 12
and output reflection coefficients are equal (S = S ).
22 11
• For any matched port i, S =0.
ii
• For a lossless and reciprocal network
N N ∗
σ S 2 = σ S . S = 1
n=1 ni n=1 ni ni

## Slide 25

Properties of S-Matrix Contd...
In general the S-parameters are complex and frequency dependent.

## Slide 26

S-Parameter (Example)

## Slide 27

Assignment
1. Find the S-Parameters of the 3dB attenuator circuit shown in below:
2. A two-port network is known to have the following scattering matrix:
0.15∠0° 0.85∠ − 45°
S =
0.85∠45° 0.2∠0°
Determine if the network is reciprocal, and lossless. If port two is terminated with
a matched load, what is the return loss seen at port 1? If port two is terminated
with a short circuit, what is the return loss seen at port 1?

## Slide 28

Assignment
3. A four-port network has the scattering matrix shown below.
0.1∠90° 0.8∠ − 45° 0.3∠ − 45° 0
0.8∠ − 45° 0 0 0.4∠45°
𝑆 =
0.3∠ − 45° 0 0 0.6∠ − 45°
0 0.4∠45° 0.6∠ − 45° 0
a) Is this network lossless?
b) Is this network reciprocal?
c) What is the return loss at port 1 when all other ports are terminated with
matched loads?
d) What is the insertion loss and phase delay between ports 2 and 4. When all
other ports are terminated with matched loads?
e) What is the reflection coefficient seen at port 1 if a short circuit is placed at
the terminated plane of port 3, and all other ports are terminated with
matched loads?

## Slide 29

Thank You
Any Questions???
