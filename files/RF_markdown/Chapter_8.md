# RF and Microwave Engineering — Chapter 8


## Slide 1

Chapter 8
RF/Microwave Measurements

## Slide 2

Introduction
• At low frequencies
• parameters such as voltage, current, etc. can be measured.
• from these impedance, power factor and phase angle can be
calculated.
• At microwave frequencies
• It is more convenient to measure power instead of V and I.
• Properties of devices and circuits at microwave frequencies are
characterized by S-parameters, power, frequency and VSWR and
noise figure.

## Slide 3

Power Measurement
❖Power is defined as the quantity of energy dissipated or stored per
unit time.
❖Microwave power is divided into three categories:
❖low power (less than 10mW),
❖medium power (from 10mW to 10W) and
❖high power (greater than 10W).
❖Average power concept is used in microwaves
P = P X Duty cycle
Avg Peak

## Slide 4

Power Measurement
❖ The general measurement technique for average power is to attach a
properly calibrated sensor to the transmission line port at which the
unknown power is to be measured.
❖ The output from the sensor is connected to an appropriate power
meter.
❖ The RF power to the sensor is then turned off and the power meter
zeroed. This operation is often referred to as “zero setting” or “zeroing.”
❖ Power is then turned on. The sensor, reacting to the new input level,
sends a signal to the power meter and the new meter reading is
observed.

## Slide 5

Power Measurement
❖Sensors for the measurement of microwave power can be divided
into two categories:
➢ Devices whose resistance changes with applied power such as
Schottky diode detectors, bolometer, thermocouple, etc. (used for
low power measurements).
➢ Devices whose temperature changes with the applied power like
calorimeter (used for medium to high power measurement).

## Slide 6

Power Measurement
Schottky Barrier Diode Detectors
❖These are used as square law detector whose output is proportional
to the input power.
❖These are able to detect and measure power as low as −70 dBm (100
pW) at frequencies up to 18 GHz.
❖The RF input signal is applied to R1, it passes through R2.
❖The diode detects the input power and converts into heat energy.
❖The corresponding temperature rise provides a change in electrical
parameters which outputs current in low frequency circuitry.

## Slide 7

Power Measurement
Bolometer Bridge Method
❖Bolometers are power sensors that operate by changing
resistance due to a change in temperature.
❖The change in temperature results from converting RF or
microwave energy into heat within the bolometric element.
❖There are two principle types of bolometers, barretters and
thermistors.

## Slide 8

Bolometer
❖A barretter is a thin wire (like a fuse made of platinum or tungsten) that has a
positive temperature coefficient of resistance.
❖Thermistors are semiconductors with a negative temperature coefficient.
Barretter
Thermistor

## Slide 9

Power Measurement
❖Bolometers are usually operated in standard
Wheatstone bridge circuit.
❖A bolometer mounting is placed on one of the
arms of the bridge.
❖The microwave power incident on the
bolometer changes its resistance which
imbalances the bridge.
❖The change in the galvanometer current
measures the incident power.
❖Proportionate calibration of galvanometer can
be done to read the power.

## Slide 10

Single Bridge Bolometer
• Initially the bridge is at its balanced condition
under zero incident power.
• The microwave power applied to bolometer
arm will change its resistance causing an
unbalance.
• The non-zero power is recorded in voltmeter
which is calibrated to read the level of input
microwave power.
• Suppose under balanced condition, the dc
bias voltage of bolometer is E and E is the dc
1 2
bias voltage of bolometer after microwave
input is applied.

## Slide 11

Single Bridge Bolometer
• The change in dc bias voltage (E – E ) is
1 2
directly proportional to the microwave power.
• Disadvantage of using single bridge:
• The change of resistance due to mismatch
at the microwave input part results in
incorrect reading.
• The thermistor is sensitive to changes in
ambient temperature resulting in false
reading.
• These disadvantages can be overcome by
using microwave double bridge.

## Slide 12

Double Bridge Bolometer
• The upper bridge measures the microwave
power.
• The lower bridge compensates the effects of
ambient temperature variation(V =V ).
1 2
• The added microwave power due to mismatch
is compensated by the negative dc feedback.
• The initial zero setting of the bridge is done by
adjusting E = E = E with no input signal
1 2 0
applied.
• In absence of input signal E /2 is the dc
biasing voltage across the sensor at balance.
• In presence of input signal E /2 is the dc
biasing voltage across the sensor at balance.

## Slide 13

Double Bridge Bolometer
• The average input Pav is equal to the change
in dc power:
• For any change in temperature if the voltage
change by ΔE, the change in RF power is given
by:
• Since V1+V2 >> ΔV , ΔP=0, so the second
equation can be used directly to calculate the
average power.

## Slide 14

Thermocouple Sensors
• A thermocouple is a junction of two dissimilar
metals or semiconductors.
• The semiconductor used in thermocouple is n-type
Si.
• A thin film of titanium-nitride resistive load is
deposited on a Si substrate which forms one
electrode of thermocouple.
• The thermocouple generates an emf when two
ends are heated up differently by absorption of
microwaves in resistive loads.
• The emf is proportional to the incident microwave
power to be measured.

## Slide 15

Thermocouple Sensors
• As shown in figure, C is the RF bypass capacitor
and C is the input coupling capacitor or dc block.
• The emf generated in the parallel thermocouples
are added to appear across C .
• The output leads going to the dc voltmeter are at
RF ground so that the output meter reads pure dc
voltage proportional to the input microwave
power.
• For square wave modulated microwave signal peak
power can be calculated from average power as
P = (P X T)/τ where T is time period
peak avg
τ is pulse width

## Slide 16

Calorimeter Method
• Calorimetric method is used
for high power microwave
measurements which
involves conversion of
microwave energy into heat.
• The heat is absorbed by a
fluid (usually water) and
then temperature of fluid is
measured to calculate
power.

## Slide 17

Calorimeter Method
• There are two methods to measure the heat of the fluid:
• Direct heating method: The rate of production of heat is measured
by observing the rise in temperature of dissipating medium.
• Indirect heating method: In this method heat is transferred to
another medium before measurement.
• In both the methods static calorimeter and circular
calorimeter are used.

## Slide 18

Static Calorimeter
• Static calorimeter consists of a 50 ohm coaxial cable which is filled by dielectric
load with a high hysteresis loss.
• The load has sufficient thermal isolation from surrounding.
• The load dissipates the microwave power.
• The average power input in watts is given by:
4.187𝑚𝐶𝑝𝑇
𝑃 = 𝑊𝑎𝑡𝑡𝑠
𝑡
where, m = mass of thermometric medium in grams.
C = Specific heat of medium in cal/grams
p
T = rise in temperature in degrees or Kelvin
t= time in seconds

## Slide 19

Circular Calorimeter
• In circulating calorimeters the calorimeter fluid (water) is constantly flowing
through a water load,
• The heat introduced into the fluid makes exit temperature higher than the input
temperature.
• The average power is given by
𝑃 = 4.187𝑣𝑑𝐶𝑝(𝑇 − 𝑇 ) 𝑊𝑎𝑡𝑡𝑠
2 1
where, v = rate of flow of calorimeter fluid in cc/sec
d = specific gravity of the fluid in gm/cc
T =inlet temperature
T = outlet temperature

## Slide 20

Calorimeter Wattmeter/Powermeter
• The unknown RF power is checked against a 1200-cps
(Hz/cycles per second) comparison power in the
bridge circuit.
• Two temperature-sensitive resistors serve as gauges.
• In operation, the unknown RF heats an input load
resistor.
• This resistor and one gauge are in close thermal
proximity so that heat generated in the input load
heats the gauge and unbalances the bridge.
• The unbalanced signal is amplified and applied to the
comparison load resistor which is in close proximity to
the second gauge, and rebalances the bridge.

## Slide 21

Calorimeter Wattmeter/Powermeter
• The meter measures the power supplied
to the comparison load to rebalance the
bridge.
• Efficient heat transfer from the loads to
the temperature gauges is accomplished
by immersing the components in an oil
stream.

## Slide 22

Slotted Line Carriages
• A slotted line carriage is a microwave instrument which is used to measure:
• Wavelength
• Voltage Standing Wave Ratio (VSWR) and standing wave pattern
• Impedance, reflection coefficient and return loss measurement
• It has a coaxial E-field probe which penetrates inside a rectangular waveguides
slotted in sections from the outer wall.
• The probe is able to transverse a longitudinal narrow slot and locate the
standing waves maxima(V ) and minima(V ) along the line giving VSWR.
max min

## Slide 23

Measurement of Impedance
• Impedance at microwave frequencies can be measured using any one
of the following three methods.
• Magic Tee
• Slotted line
• Reflectometer
Measurement of Impedance using slotted line:
• When load is not properly matched to the waveguide, reflections will
occur the incident and reflected waves will combine to produce a
standing wave which contains V and V .
max min

## Slide 24

• Using slotted line, the position of V , V and VSWR accurately determined.
max min
• In set up2, the load Z is replaced by a short circuit as shown in figure and the shift
L
in minimum is measured.

## Slide 25

• If minimum is shifted to the left, then the impedance is inductive and
if it shifts to the right, it is capacitive.
• The unknown impedance can be measured by using data recorded
and a smith chart.
• The magnitude and phase of both reflection coefficient and
impedance can be measured in this method.

## Slide 26

Measurement of impedance using Reflectometer
• The reflectometer indicates magnitude and impedance but not the phase angle, where as slotted line measurement
gives both.
𝑟𝑒𝑓𝑙𝑒𝑐𝑡𝑒𝑑 𝑝𝑜𝑤𝑒𝑟
𝑃𝑟ൗ
𝑃
• 𝜌 = = 100 = 𝑟
𝑃 𝑖𝑛𝑐𝑖𝑑𝑒𝑛𝑡 𝑝𝑜𝑤𝑒𝑟 𝑖ൗ 𝑃
100 𝑖
• Two directional couplers are used to sample incident power Pi and reflected power Pr from the load. Both directional
couplers are identical except their direction.
• The magnitude of reflection coefficient can be directly obtained on the reflectometer from which impedance can be
calculated.
𝑍 −𝑍
𝐿 𝑔
• Knowing reflection coefficient, impedance can be calculated using relation: 𝜌 = Where Z is known
g
𝑍 +𝑍
𝐿 𝑔
impedance and Z is unknown impedance.
L
• Due to directional coupler properties, there will be no interference between forward and reverser wave. The input
power is kept to a low level by means of a pad (attenuator). The reflectometer accuracy is greatest at low VSWR.
M ic r
S o
ou wr
c
ae v e
P
i
P a d
D
R e fle
F o r w a r d
D e t e c t o r
F o r w a r d
ir e c t io n a l
C o u p le r
(2 0 d B )
c t o m e te r
R e v e r s e
D e t e c t o r
R e v e r s e
D ir e c t io n a
C o u p le r
(2 0 d B )
l
P
r
U n k n o w
L o a d
n

## Slide 27

Measurement of Voltage Standing Wave Ratio
(VSWR)
• If load is not properly matched to the transmission line then
reflections will occur. The incident and reflected waves combine to
produce as standing wave along the waveguide. The ratio of V to
max
V gives VSWR.
min
𝑉 1+ 𝜌
𝑚𝑎𝑥
• 𝑆 = =
𝑉 1− 𝜌
𝑚𝑖𝑛
• S varies from 1 to  and  varies from 0 to 1

## Slide 28

Measurement of low VSWR (S<10)
• The value of VSWR less than 10 can be measured with the setup shown below.
• Initially the attenuator is adjusted to give an adequate reading on the DC milli Voltmeter.
• The probe on the slotted line is moved to get maximum reading on the meter, V . Next
max
the probe on the slotted line is adjusted to get minimum reading on the meter, V .
min
• The ratio of V to V gives VSWR.
max min
• The probe on the slotted line and pad are adjusted to give maximum reflection on VSWR
meter. This full scale deflection corresponds to VSWR of 1.
M ic r
S o
ou wr
c
ae v e
P a d S
D
lo
Ce
t
r y s t a l
t e c t o r
t e d L in e
( V
VS
DoW C m
lt m
R M
L o a
illi
e t e r
e t e
d
r )

## Slide 29

Measurement of High VSWR (S>10)
• For VSWR >10, we use ‘Double Minimum Method’.
• In this method, the probe is adjusted to find minimum reading (V ) on the
min
meter.
• The probe is then moved to a point where the power is twice the
minimum. Let this position is denoted by ‘d1’. The probe is then moved to
twice power point on the other side of minimum, say ‘d2’.
2 2 2
• 2𝑝 ∝ 𝑉 , 2𝑉 ∝ 𝑉 ∴ 𝑉 = 2 𝑉
𝑚𝑖𝑛 𝑥 𝑚𝑖𝑛 𝑥 𝑥 𝑚𝑖𝑛
𝜆
𝑔
• The VSWR can be calculated using the formula:𝑉𝑆𝑊𝑅 =
𝜋(𝑑 −𝑑 )
𝜆 2 1
• Where 𝜆 = 0 , 𝜆 is cutoff wavelength
𝑔 𝑐
𝜆
1−
𝜆
𝑐

## Slide 30

Measurement of frequency
F nF
Low Frequency c Harmonic c
Mixer
Signal Generator Generator
F
unknown
F
F=nF -
i c unknown

## Slide 31

VSWR Meter
• VSWR meter is a highly sensitive, high gain, low noise voltage amplifier tuned
normally at fixed frequency of 1KHZ square wave of which microwave signals
modulated.
• The modulated signal is then amplified and detected which then measured
with a calibrated voltmeter.
• This meter indicates calibrated VSWR reading for any loads.

## Slide 32

Spectrum Analyzer
• A spectrum analyzer is a device that displays signal amplitude (strength) as
it varies by signal frequency. The frequency appears on the horizontal axis
and the amplitude is displayed on the vertical axis. The primary use of a
spectrum analyzer is to measure the power of the spectrum of known and
unknown signals. It measures carrier power level, harmonics, spurious,
sidebands and phase noise.
• Spectrum analyzer is just a receiver which displays the signal fed to its
Radio Frequency (RF) input port from any Radio Frequency (RF)
transmitting device through cable or with antenna. Modern real time
spectrum analyzers even decode and display complex broadband Radio
Frequency (RF) signals emitted/acquired using various wireless devices
which for example include WLAN, WiMAX, GSM, Zigbee, LTE etc.
• Types Of Spectrum Analyzer
• Swept-tuned or superheterodyne
• Fast Fourier Transform (FFT)
• Real-time
• Audio

## Slide 33

Spectrum Analyzer
• Spectrum analyzer is a microwave instrument which provides signal
spectrums, i.e. the plot of amplitude against the frequencies.
• The simplified block diagram is shown below:

## Slide 34

Spectrum Analyzer
• The microwave signal to be measured is superheterodyned with sweep
voltage produced by a sweep generator and oscillates with local oscillator.
• The mixed signal is then amplified by narrow bandwidth intermediate
frequency amplifier.
• The signal is then detected and video amplified for display in terms of
amplitude and frequency.
• The sweep voltage is sawtooth type signal.
• The zero flyback time of sweep voltage moves the spot on display
horizontally in synchronization with frequency sweep.
• This makes the horizontal position function of frequency and amplitude of
signal the vertical deflection of the signal.

## Slide 35

Network Analyzer
• A network analyzer is an instrument that measures the network parameters of electrical
networks. Network analyzers consist of source and multiple receivers and measures broadband
frequency signal using techniques such as power and frequency sweep. Network analyzers are
often used to characterize two-port networks such as amplifiers and filters but can be used on
networks with an arbitrary number of ports.
• Network analyzer provides higher measurement accuracy when compared to spectrum analyzer
due to vector error correction feature. Today, network analyzers commonly measure S-
parameters, because reflection and transmission of electrical networks are easy to measure at
high frequencies.
• Types Of Network Analyzers
• Two basic types of network analyzer include:
• Scalar Network Analyzer (SNA) which measures amplitude properties only
• Vector Network Analyzer (VNA) which measures both amplitude and phase properties.

## Slide 36

Vector Network Analyser (VNA)
• VNA measures both amplitude
and phase over a wide range of
frequencies.
• When an RF signal is applied to
a network, such as a filter,
amplifier, or transmission line,
that signal is altered in
magnitude and phase.
• If the magnitude and phase of
the altered signal can be
compared to the magnitude
and phase of the originating RF
signal, the characteristics of
that network can be evaluated.

## Slide 37

Vector Network Analyser (VNA)
• The network, or component, being tested is called the Device Under Test
(DUT).
• The RF signal that is input to the DUT is the Reference signal.
• The DUT will alter the Reference signal's two components, Magnitude and
Phase.
• The DUT will change the magnitude component, due to it's resistive
natures.
• It will alter the phase component due to it's reactive natures.
• These two altered components of the Reference signal are measured by
the magnitude and phase comparators within the VNA with reference
signal.

## Slide 38

Vector Network Analyser (VNA)
• The output of the Magnitude Comparator is some value that
represents the difference between the voltage, or power, of it's two
input signals.
• This value of differential magnitude is called the Magnitude Vector.
• The output of the Phase Comparator is some value that represents
the difference between the phase of it's two input signals.
• This value of differential phase is called the Phase Vector.

## Slide 39

Comparison between Spectrum Analyzer and
Network Analyzer
Spectrum Analyzer Network Analyzer
• It is used to measure signal • It is used to measure reflection
characteristics e.g. carrier power level, coefficients, transmission coefficients,
sidebands, harmonics, spurious
insertion loss, return loss, S
sidebands, phase noise etc on unknown
parameters and more.
signals.
• Provides high accuracy in
• Provides less accuracy in measurement.
measurement due to vector error
correction feature.
• It uses higher IF bandwidth filters.
• It uses lower IF bandwidth filters.
• It can be used for scalar component
• It can be used for amplitude and
measurements only. They are not used
phase measurements.
for phase measurements.
• It uses only frequency sweep for • It uses both frequency sweep and
measurement. power sweep for measurement.
