# RF and Microwave Engineering — Chapter 1


## Slide 2

Course Outline
1. Introduction to RF and Microwaves: History and Applications, Standard
frequency bands, Circuit behaviors. [8]
2. RF and M/W Transmission Lines: Types and Theory of transmission lines,
impedance transformations and matching analysis using Smith Chart. [10]
3. RF and M/W Network Theory and Analysis: Scattering Matrix and its
properties, S-Parameters for Multi-Port Networks. [8]
4. RF and M/W Components and Devices: Coupling probes and loops, Field
equations of Rectangular and Circular Waveguides and its analysis,
Working principle of Waveguide Termination, Phase-Shifter, Attenuators,
Directional Couplers, Gunn Diode, Microwave transistor, MASER and
Resonator and Circulators. [10]

## Slide 3

Course Outline……
5. Microwave Generators: Transit-time effect, Limitations of conventional tubes,
Working principle of Two and multi-cavity klystrons, Reflex klystron,
Travelling Wave Tube (TWT) and Magnetrons. [8]
6. RF Design Practice: RF LPF design using Insertion Loss, Frequency Scaling
and Micro strip implementation method, RF Amplifier and Oscillator Design
Theory, Real World Design Considerations. [20]
7. Microwave Antennas and Propagation: Antenna Types, Propagation
Characteristics, RF and M/W radiation Hazards, Safety Practices and
Standards. [8]
8. RF/Microwave Measurements: Power Measurement ( Calorimeter, Bolometer
and Thermocouple Methods), Measurement of Impedance, Frequency,
Spectrum, Unknown loads, Reflection Coefficient, VSWR and Noise. [8]

## Slide 4

Lab Session
1. Illustration of Smith Chart and Load analysis.
2. Design and Verification of Basic RF filters using ADS.
3. Design and Verification of Impedance matching stubs using ADS.
4. Design and Verification of RF Amplifier Design using ADS.
5. Familiarization with RF and Microwave Parameters measurement.

## Slide 5

Reference Books
1. Microwave Electronics- K.C Gupta, Tata McGraw Hill
2. Microwave Engineering- A.K. Gautam, S.K.Kataria & Sons
3. Microwave Techniques-D.C. Agrawal, Tata Mc Graw-hill
4. Microwave Devices and Circuits-Samuel Y. Liao, PHI 3rd Edition,1994
5. Microwave Engineering-David M. Pozar, 2nd Edition, Newington CT:
6. Engineering Electromagnetic-W.H. Hyatt, McGraw-Hill Book Company
7. Electronic Transmission Technology: Lines, Waves and Antennas-William
Sinnema, Prentice Hall

## Slide 6

Reference Books on Antennas
1. J. D. Kraus, Ronald J. Marhefka, Ahmad Khan, Antennas and WavePropogation,
4th Edition, Tata McGraw Hill, 2017
2. Constantine A. Balanis, Antenna Theory: Analysis and Design, Wiley,4th Edition,
3. G. Kumar and K.P. Ray, Broadband Microstrip Antennas, Artech House, 2003

## Slide 7

RF/Microwave
• RF or Radio Frequency is a term that is often used to describe
the number of times per second or oscillation of an
electromagnetic radiation.
• Anything between 3KHz and 300GHz is referred as RF waves.
• Microwave is the general term used to describe RF waves that
starts from UHF (0.3-3GHz), SHF (3-30GHz) and EHF (30-
300GHz) signals.
• Frequency Range: 300MHz-300GHz Wavelength: 1mm – 1m
• Lower frequencies are referred to as radio waves while higher
frequencies are called millimeter waves.

## Slide 8

Typical Frequencies and Applications

## Slide 9

Microwave Frequency defined by IEEE
Band Frequency Range Common Applications
L Band 1 – 2 GHz GPS, mobile satellite, radar
S Band 2 – 4 GHz Weather radar, Wi-Fi, satellite communication
C Band 4 – 8 GHz Satellite TV, radar
X Band 8 – 12 GHz Military radar, marine radar
Ku Band 12 – 18 GHz Satellite broadcasting
K Band 18 – 27 GHz Radar, experimental systems
Ka Band 27 – 40 GHz High-speed satellite internet, 5G
V Band 40 – 75 GHz Millimeter-wave communication
W Band 75 – 110 GHz Imaging radar, sensing

## Slide 10

Properties of Microwave
• High Frequency Range: Span from 300MHz to 300GHz.
• Wi-Fi operates at 2.4GHz and 5GHz
• Short Wavelength: 1m to 1mm
• Allows the design of compact antennas. E.g. Satellite dishes (DTH
TV) use small parabolic antenna
• LOS Propagation: cannot bend over obstacles easily
• e.g. Microwave tower communication requires clear LOS between
tower.
• High Bandwidth: supports high data transmission rates due to loarge
available spectrum.
• E.g. 5G mobile networks in mmWave offer Gigabit speeds.

## Slide 11

Properties of Microwave
• Reflection and refraction: Reflects off metallic surfaces and buildings
• Refracted by atmospheric layers, especially in long distance
communication.
• E.g. radar uses reflected microwaves to detect aircraft and weather
patterns.
• Low Diffraction: Cannot bend around obstacles well, unlike lower
frequency signals. E.g. microwave signals are blocked by walls, unlike
AM radio waves.
• Polarization Sensitivity: microwave signals can linearly, circularly or
elliptically polarized. E.g. Satellite TV antennas must be aligned with the
correct polarization angle.

## Slide 12

Properties of Microwave
• Susceptible to Atmospheric Absorption: affected by rain, fog, and
gases like oxygen and water vapor. E.g. Ka-band signals are heavily
attenuated in rain, affecting satellite link.
• Multipath propagation and fading: multipath reflected paths cause
interference and signal fading. E.g. In urban areas, mobile phone
signals often experience multipath due to buildings.
• Penetration capabilities: Low frequency microwave (L and S bands)
can penetrate walls, vegetation, and atmosphere ( used in remote
sensing and ground penetration)
• High frequency microwave (Ka band and above) have limited
penetration but enable high data throughput.

## Slide 13

Properties of Microwave
• High Directionality: Microwave antennas are highly directional. E.g.
Point-to-point microwave links for long distance telecommunication use
narrow beams.
• Supports complex digital modulation like QPSK, 16-QAM, OFDM. E.g.
4G and 5G systems use OFDM in Microwave frequencies for efficient data
transmission.
• Presence of Skin Effect: At microwave frequencies, current flows mostly
on the surface of conductors that increases AC resistance of components.
E.g. RF coils are plated with silver or gold to reduce skin-effect losses.
• Susceptible to resonance effects: Passive components exhibit resonance
and parasitic effects at high frequencies. E.g capacitor may behave like an
inductor above its self-resonant frequency.

## Slide 14

Advantages of Microwave
• Supports larger bandwidth and hence more information is transmitted. For this
reason, microwaves are used for point-to-point communications.
• More antenna gain is possible.
• Higher data rates are transmitted as the bandwidth is more.
• Antenna size gets reduced, as the frequencies are higher.
• Low power consumption as the signals are of higher frequencies.
• Effect of fading gets reduced by using line of sight propagation.
• Provides effective reflection area in the radar systems.
• Satellite and terrestrial communications with high capacities are possible.
• Low-cost miniature microwave components can be developed.
• Effective spectrum usage with wide variety of applications in all available
frequency ranges of operation.
• Difficulty in jamming( military applications)
• Less crowded spectrum

## Slide 15

Disadvantages of Microwave
• Cost of equipment or installation cost is high.
• Higher atmospheric loss.
• They are hefty and occupy more space.
• Electromagnetic interference may occur.
• Variations in dielectric properties with temperatures may occur.
• Reliance in GaAs technology rather than Si technology.
• Attenuation by solid objects: birds, rain, snow and fog.
• Radiation Hazards

## Slide 16

Frequency Bands in Nepal
Service Frequency Status in Nepal
AM Radio 535–1605 kHz Limited use
FM Radio 88–108 MHz Widely used
Aviation Navigation 108–117.95 MHz Active
Aviation Communication 118–137 MHz Active
CDMA 800/850 MHz Legacy / limited use
GSM 900/1800 MHz Active (NT, Ncell)
Aviation Surveillance 1030/1090 MHz, 2.7–2.9 GHz Active
GPS 1575.43 MHz (L1) Active
4G LTE 800/1800 MHz, 900 MHz in some cases Active (NT, Ncell)
WCDMA (3G) 900/2100 MHz Active (NT, Ncell)
WiMAX 2300 MHz Limited / NT
Wi-Fi 2400–2483 MHz, 5.2/5.8 GHz bands Active
5G 3.3–3.8 GHz planned bands Trial / limited deployment
Satellite and Defense
HF to mm-wave range Active
Communications

## Slide 17

Microwave Applications
Wireless Communication Military and RADAR
Bluetooth, WiMAX, DBS Aircraft Safety and Navigation
Vehicle Collision Avoidance • Wi-Fi RADAR, SONAR, Weather Forecasting
Outdoor Broadcasting Transmission Missile Guidance and Control
Food Industry Radio Astronomy
Applications of
Roasting food Celestial body research
grains/beans
Detection of radiations
Microwave
Drying, Moisture
leveling
Medical Commercial Uses
Cancer / Tumor Detection Motion Detectors, Burglar Alarm
Medical Diagnostics and Therapy Cell Phones
X-Ray, MRI, CT Scan Remote Sensing, Microwave Oven

## Slide 18

Emerging & Modern Microwave Technologies
5G & mm-Wave Networks Satellite & Space Comms Autonomous Vehicles
• 5G NR sub-6 GHz & mmWave bands • LEO / MEO / GEO satellite links • 77 GHz automotive RADAR
• Massive MIMO beamforming • Deep-space telemetry & tracking • Pedestrian & obstacle detection
• Ultra-low latency backhaul links • CubeSat microwave payloads • Vehicle-to-Everything (V2X)
Medical & Healthcare Wireless Power Transfer IoT & Smart Systems
• Microwave ablation therapy • Microwave Power Beaming (MPB) • Smart city sensor networks
• Non-invasive glucose monitoring • EV wireless charging pads • Industrial IoT (IIoT) monitoring
• Hyperthermia cancer treatment • Space-based solar power relay • Microwave-linked smart meters
Remote Sensing & Earth Obs. Security & Defense Tech
• SAR (Synthetic Aperture Radar) imaging • Active Denial (crowd control) systems
• Soil-moisture & crop health mapping • Microwave EMP countermeasures
• Arctic ice-sheet monitoring (SMOS, SMAP) • Quantum radar (stealth detection R&D)

## Slide 19

Microwave Communication Systems
Transmitter
Modulating
Antenna
Signal
System
Modulator
HPA
Upconverter
Carrier
Signal
Receiver
Free Space
Loss
Display
device/
Mixer Demodulator
LNA Downconverter
speaker
LO

## Slide 20

Explanation
. Information Source
•Analog (voice, video) or digital (data, text)
•Sends the original message to be transmitted
. Modulator
•Converts baseband information into a modulated RF signal
•Common schemes: QPSK, QAM, FSK etc.
Upconverter
•Shifts the modulated signal to a microwave carrier frequency
•Uses mixers and local oscillators
High Power Amplifier (HPA)
•Boosts the signal to required transmission power level
•Types: TWT (Traveling Wave Tube), SSPA (Solid-State Power Amplifier)

## Slide 21

Explanation
Transmitting Antenna
•Converts electrical signal into electromagnetic wave
•Types: Parabolic dish, Horn antenna, Patch antenna
Free-Space Channel
•Air or vacuum between Tx and Rx
•Affected by attenuation, weather, multipath, noise
Receiving Antenna
•Captures the transmitted electromagnetic wave
•Similar design as Tx antenna for efficiency
Low Noise Amplifier (LNA)
•Amplifies weak received signal with minimal added noise
•Enhances signal-to-noise ratio (SNR)

## Slide 22

Explanation
Downconverter
•Translates signal from high microwave frequency back to intermediate frequency
(IF) or baseband
•Uses mixers and local oscillators
Demodulator
•Recovers original information from the modulated carrier
•Matches modulation technique used in transmitter
Output
•Delivers recovered audio, video, or data to end user or device

## Slide 23

Microwave Components and Systems
Passive Microwave Components Microwave Systems
➢T-line
➢ Mobile Phone
➢Antenna
➢ Mobile Phone Jammer
➢Power Divider / Combiner
➢Coupler ➢ Repeater / Signal Enhancer
➢Filter
➢ RFID
➢Attenuator
➢ RF Transceiver
Active Microwave Components ➢ GPS and GSM Modules
➢ Radar
➢Amplifier
➢Oscillator
➢ RF Energy Harvesting
➢Mixer
➢ Microwave Equipment
➢RF Switch
➢ High Power Microwave System
➢Phase Shifter

## Slide 24

Behavior of circuits at Microwave bands
Resistor
:

## Slide 25

Behavior of circuits at Microwave bands Cont..
Resistor Continue….

## Slide 26

Behavior of circuits at Microwave bands Cont..
Capacitor:

## Slide 27

Behavior of circuits at Microwave bands Cont..
Inductor:

## Slide 28

Behavior of circuits at Microwave bands Cont..
Inductor Continue…

## Slide 29

Summary
Parasitic Behavior Below
Component At SRF Above SRF
Elements SRF
Resistive +
Resistor Lead L, Stray C — Capacitive
inductive
Capacitive ↓ Pure resistive (min Inductive ↑
Capacitor ESL (lead L), ESR
impedance Z) impedance
Inductive ↑ Pure resistive Capacitive ↓
Inductor Winding C, DCR
impedance (max Z) impedance
Abbreviation Full Form
SRF Self-Resonant Frequency
ESL Equivalent Series Inductance
ESR Equivalent Series Resistance
DCR DC Resistance

## Slide 30

Low Frequency Band Vs Microwave Bands
Microwave
Low Frequency
• Provide large bandwidth so its possible
• Bandwidths are limited hence small no.
to adjust large no. of channels.
of channels can be adjusted.
• It uses distributed circuit theory
• It uses lumped element circuit theory.
(ohm/m, H/m, F/m).
• Current flow and voltage drops are used
• Scattering phenomena like absorption,
to calculate power.
reflection, refraction, etc. are used in
• Open wire, twisted cables, co-axial
power calculation.
cables are used as transmission lines.
• Optical fibers, waveguides, strip lines,
• Lumped circuit elements are used such
micro-strip lines are common
as resistors, filters, oscillators, etc.
transmission lines.
• Large circuit size.
• Cavity resonators or resonant lines are
used as oscillators, resonators, etc.
• Smaller circuit size.

## Slide 31

Low Frequency Band Vs Microwave Bands
Microwave
Low Frequency
• Density modulation or velocity
• It uses current modulated mode.
modulation are used using magnetrons,
• Almost all the solid state devices can be
klystrons, TWTs, etc.
used.
• Vacuum tube like devices, micro-
• It can handle low power.
miniaturized solid state devices like
• It has no health hazards.
Gunn diodes, tunnel diodes, IMPITT,
• Lumped circuit elements are used such
TRAPPIT, etc. are used.
as resistors, filters, oscillators, etc.
• It can handle higher power.
• No Line of Sight (LOS) communication.
• It has health hazards.
• Cavity resonators or resonant lines are
used as oscillators, resonators, etc.
• Line of Sight (LOS) communication.

## Slide 32

Thank You
Any Questions???
