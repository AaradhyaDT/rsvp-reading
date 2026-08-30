# Chapter 3 Radio Propagation

## Slide 1: Chapter 3Mobile Radio Propagation

*(no text content — image/diagram slide)*

## Slide 2: Introduction to Radio Wave Propagation

- Large-scale propagation models predict the mean signal strength for an arbitrary T-R separation distance. Local average received power is predicted by large-scale model (measurement track of 5    to 40    )
- Small-scale (fading) models characterize the rapid fluctuations of the received signal strength over very short travel distance or short time duration.
- Small-scale fading: rapidly fluctuation
  - sum of many contributions from different directions with different phases
  - random phases cause the sum to vary widely. (ex: Rayleigh fading distribution or Rician fading distribution)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 3

- In free space, the power flux density is given by
- where         is the intrinsic impedance of free space given by
- Relating Power to Electric Field
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 4

- Relating Power to Electric Field
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The power received at distance is given by the power flux density times the effective aperture of the receiver antenna

## Slide 5

- The Propagation Attenuation
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- In general, the propagation path loss increases with frequency of transmission, fc as well as the distance between the cell sites and mobile, R.
- Adequate bandwidth is available at much higher frequencies (around 1GHz and greater than a few GHz).
- However, at such frequencies, the radio signals suffer a greater signal strength loss at shorter distance, and also suffer larger signal strength losses while passing through obstacles such as walls.
- Hence, the propagation path loss and the received signal power are reciprocal to each other, assuming all the other factors constant, we can say that the received carrier signal power, Pr is inversely proportional to dn, i.e.,
- d=distance between transmitter and receiver
- n= path loss exponent, which varies between 2 and 6.
- Wireless Communication

## Slide 6

- The Three Basic Propagation Mechanisms
- In a wireless signal  propagation environment, apart from direct waves, the receiver will get a number of reflected waves, diffracted waves and scattered waves.
- The vectorical addition of these waves constitutes the resultant wave which will vary in strength  in real time.
- Basic propagation mechanisms
  - Reflection
  - Diffraction
  - Scattering
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 7

- The Three Basic Propagation Mechanisms
- Reflection occurs when a propagating electromagnetic wave impinges upon an object which has very large dimensions when compared to the wavelength, e.g., buildings, walls.
- Diffraction occurs when the radio path between the transmitter and receiver is obstructed by a surface that has sharp edges.
- Scattering occurs when the medium through which the wave travels consists of objects with dimensions that are small compared to the wavelength.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 8: Ground Reflection Model (1)

- In LOS scenarios the reflection from the ground is also important.
- A two-ray ground reflection model is often used.
- This models is reasonably accurate for predicting large scale signal strength over several kilometers.
- Assumption: The height of the Transmitter > 50 meters.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 9: Ground Reflection Model (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 10: Ground Reflection Model (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Path Difference

## Slide 11

- powers of multipath DON’T add together. Only voltages or field strength of multipath actually add together. The voltage on the antenna is proportional to the electric field at the antenna position. So let’s talk about adding electric fields.
- Refer to figure on previous slide (slide 10)
- Ground Reflection Model (3)

## Slide 12

- The electric field magnitude decays as 1/d in free space.
- the E-field strength as the E-field strength at a reference distance, multiplied by d0/d’, for a path (distance of travel for waves) length d0.
- Also, assume the signal is a simple sinusoid at the carrier frequency, fc.
- So
- Ground Reflection Model (Direct path)

## Slide 13

- For the LOS path, given a distance along the ground of d, antenna heights ht and hr at the TX and RX, respectively, the
- So,
- Ground Reflection Model (Direct path)

## Slide 14

- Two things change for the reflected path compared to the LOS path:
- 1. The path is longer than the LOS path for total length d2 + (ht + hr)2 ( use   the “method of images” to show this).
- 2. The reflected field strength changes by a factor of     .
- Ground Reflection Model (Reflected path)

## Slide 15

- In general, we can write the E-field as
- Let’s assume that d is very long compared to the antenna heights. So, the angle of incidence is approximately 0. In this case the reflection coefficient (assume perpendicular polarization) is -1.
- Ground Reflection Model (Reflected path)

## Slide 16: Diffraction

- Occurs when the radio path between the transmitter and receiver is obstructed by a surface that has sharp irregularities (edges).
- Explains how radio signals can travel in urban and rural environments without a line of sight path.
- Diffraction can be explained by Huygen’s principle: all points on a wavefront can be considered as point sources for the production of secondary wavelets.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 17: Fresnel zone

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The concept of diffraction loss as a function of the path difference around an obstruction is explained by Fresnel zones.
- Fresnel zones represent successive regions where secondary waves have a path length from the transmitter to receiver which are nλ/2 greater than the total path length of a line-of-sight path.
- In figure the concentric circles on the plane between a transmitter and receiver, represent the loci of the origins of secondary wavelets which propagate to the receiver such that the total path length increases by λ/2 for successive circles.

## Slide 18: Fresnel zone

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- These circles are called Fresnel zones. The successive Fresnel zones have the effect of alternately providing constructive and destructive interference to the total received signal. The radius of the nth Fresnel zone circle is denoted by rn and can be expressed interms of n, λ, d1 and d2 by
- In mobile communication systems, diffraction loss occurs from the blockage of secondary waves such that only a portion of the energy is diffracted around an obstacle.
- That is, an obstruction causes a blockage of energy from some of the Fresnel zones, thus allowing only some of the transmitted energy to reach the receiver.
- Depending on the geometry of the obstruction, the received energy will be a vector sum of the energy contributions from all unobstructed Fresnel zones.
- In general, if an obstruction does not block the volume contained within the first Fresnel zone, then the diffraction loss will be minimal, and diffraction effects may be neglected. In fact, a rule of thumb used for design of line-of-sight microwave links is that as long as 55% of the first Fresnel zone is kept clear, then further Fresnel zone clearance does not significantly alter the diffraction loss.

## Slide 19: Knife Edge Diffraction Geometry

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 20: Diffraction Gain

- The Fresnel-Kirchoff diffraction parameter is given by
- The diffraction gain due to a knife edge is given by
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 21: Multiple Knife Edge Diffraction

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 22: Scattering

- Occurs when the medium has object that are smaller or comparable to the wavelength (small objects, rough surfaces and other irregularities on the channel).
- Follows same principles as diffraction.
- Causes the transmitter energy to be radiated in many directions.
- e.g. foliage, street signs, lamp posts
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 23: Radio Propagation Models

- Need models to characterize the signal strength received at the receiver after undergoing reflections, diffraction and scattering
  - Small-scale propagation models
  - Large-scale propagation models
  - Radio propagation models can be derived by
    - Using empirical methods: Collect measurement, fit curves.
    - Using analytical methods: Model the propagation mechanisms mathematically and derive equations for path loss.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 24: Small-scale Propagation Models (1)

- As the mobile moves over small distances, the instantaneous received signal will fluctuate rapidly giving rise to small-scale fading.
  - The reason is that the signal is the sum of many contributors coming from different directions.
  - Since the phases of these signals are random, the sum behaves like a “noise” (Rayleigh or Rician fading)
- In small scale fading, the received signal power may change as much as 3 or 4 orders of magnitude (30dB or 40 dB), when the receiver is only moved a fraction of the wavelength.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 25: Small-scale Propagation Models (2)

- Small T-R separation distances changes (a few wavelengths)
- Heavily populated, urban areas
- Multiple copies of transmitted signal arriving at the transmitter via different paths and at different time-delays, add vectorially at the receiver: fading
- Distribution of the signal attenuation coefficient: Rayleigh, Rician
- Short-term fading model
- Rapid and severe signal fluctuations.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 26: Fading (1)

- Fading: rapid fluctuations of received signal strength over short time intervals and/or travel distances. Caused by interference from multiple copies of Tx signal arriving at Rx at slightly different times.
- Three most important effects:
  - Rapid changes in signal strengths over small travel distances or short time periods.
  - Changes in the frequency of signals.
  - Multiple signals arriving a different times (time dispersion). When added together at the antenna, signals are spread out in time. This can cause a smearing of the signal and interference between bits that are received.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 27: Even stationary Tx/Rx wireless links can experience fading due to the motion of objects (cars, people, trees, etc.) in surrounding environment off which come the reflections. 

Multipath signals have randomly distributed amplitudes, phases, & direction of arrival. 
vector summation of (A ∠θ) at Rx of multipath leads to constructive/destructive interference as mobile Rx moves in space with respect to time.

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Fading (2)

> **Notes:** stationary

## Slide 28: Fading (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Fading occurs around received signal strength predicted from large-scale path loss models

## Slide 29: Factors influencing Small-scale fading(1)

- Multipath propagation: multipath propagation often lengthens the time required for the baseband portion of the signal to reach the receiver which can cause signal smearing due to inter-symbol interference.
- Speed of the mobile: relative motion between base station & mobile causes random frequency modulation due to Doppler shift (fd). Different multipath components may have different frequency shifts.
- Speed of surrounding objects: if the surrounding objects move at a greater rate than the mobile, then this effect dominates the small-scale fading.
- The transmission bandwidth of the signal: if signal’s bandwidth  bandwidth of the multipath channel  received signal will be distorted.
  - The coherent bandwidth is a measure of the maximum frequency difference for which signals are still strongly correlated in amplitude.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 30: Transmitted signal bandwidth (Bs) 
The mobile radio channel (MRC) is modeled as filter with specific bandwidth (BW) 
The relationship between the signal BW & the MRC BW will affect fading rates and distortion, and so will determine: 
a) if small-scale fading is significant 
b) if time distortion of signal leads to inter-symbol interference (ISI)
An MRC can cause distortion/ISI or small-scale fading, typically one or the other.

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Factors influencing Small-scale fading(2)

## Slide 31: Doppler Shift

- motion causes frequency modulation due to Doppler shift (fd)
- v : velocity (m/s)
- λ : wavelength (m)
- θ : angle between mobile direction
- and arrival direction of RF energy
        - + shift → mobile moving toward S
        - − shift → mobile moving away from S
- Phase change due to
- Difference in
- path length
- Apparent change
- in frequency, or
- Doppler shift.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 32

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 33: Parameters of Mobile Multipath Channels

- To develop some general guidelines for wireless systems, parameters which grossly quantify the multipath channel are used.
- Many multipath channel parameters are derived from power delay profile. The power delay profile (PDP) gives the intensity of a signal received through a multipath channel as a function of time delay. The time delay is the difference in travel time between multipath arrivals.
- It can be used to extract certain channel's Time Dispersion Parameters.
  - Multipath channel parameters are
      - Mean excess Delay
      - RMS Delay Spread
      - Excess Delay Spread (X dB)
- Coherence Bandwidth
- Doppler Spread and Coherence Time
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 34: The mean excess delay is the first moment of the power delay profile and is defined by




The RMS delay spread is the square root of the second moment of the power delay profile and is defined to be

- Mean excess delay(    ):
- Rms delay spread 
- Timer Dispersion Parameters (1)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 35: Timer Dispersion Parameters (2)

- The maximum excess delay (XdB) of the power delay profile is defined to be the time delay during which multipath energy falls to X dB below the maximum.
- Figure in next slide illustrates the computation of the maximum excess delay for multipath components within 10 dB of the maximum.
- The maximum excess delay is defined as              , where       is the first arriving signal and        is the maximum delay at which a multipath component is within X dB of the strongest signal.
- The value of        is sometimes called the excess delay spread of a power delay profile.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 36: Timer Dispersion Parameters (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 37: Noise Threshold

- The values of time dispersion parameters also depend on the noise threshold (the level of power below which the signal is considered as noise).
- If noise threshold is set too low, then the noise will be processed as multipath and thus causing the parameters to be higher.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 38: Coherence Bandwidth (1)

  - Range of frequencies over which the channel can be considered flat (i.e. channel passes all spectral components with equal gain and linear phase).
      - It is a definition that depends on RMS Delay Spread.
  - Two sinusoids with frequency separation greater than Bc are affected quite differently by the channel.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 39: Coherence Bandwidth (2)

- Frequency correlation between two sinusoids: 0 <= Cr1, r2 <= 1.
- If we define Coherence Bandwidth (BC) as the range of frequencies over which
- the frequency correlation is above 0.9, then
- If we define Coherence Bandwidth as the range of frequencies over which
- the frequency correlation is above 0.5, then
- is rms delay spread.
- This is called 50% coherence bandwidth.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 40: Coherence Bandwidth (3)

- Example:
    - For a multipath channel,   is given as 1.37s.
    - The 50% coherence bandwidth is given as: 1/5 = 146kHz.
      - This means that, for a good transmission from a transmitter to a receiver, the range of transmission frequency (channel bandwidth) should not exceed 146kHz, so that all frequencies in this band experience the same channel characteristics.
      - Equalizers are needed in order to use transmission frequencies that are separated larger than this value.
      - This coherence bandwidth is enough for an AMPS channel (30kHz band needed for a channel), but is not enough for a GSM channel (200kHz needed per channel).
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 41: Doppler Spread & Coherence Time

- Delay spread and Coherence bandwidth describe the time dispersive nature of the channel in a local area.
    - They don’t offer information about the time varying nature of the channel caused by relative motion of transmitter and receiver.
- Doppler Spread and Coherence time are parameters which describe the time varying nature of the channel in a small-scale region.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 42: Doppler Spread

- Measure of spectral broadening caused by the time rate of change of the mobile radio channel.
- Doppler spread, BD, is defined as the maximum Doppler shift: fm = v/
- Characterizes frequency-dispersiveness of the channel, or the spreading of transmitted frequency due to different Doppler shifts.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 43: Coherence Time (1)

- Coherence time is the time duration over which the channel impulse response
- is essentially time-invariant.
- If the symbol period of the baseband signal (reciprocal of the baseband signal
- bandwidth) is greater the coherence time, than the signal will distort, since
- channel will change during the  transmission of the signal .
- Coherence time (TC)  and Doppler spread are inversely proportional to one
- another and is defined as:
- TS
- TC
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 44: Coherence Time (2)

- Coherence time is also defined as:
- Coherence time definition implies that two signals arriving with a time separation greater than TC are affected differently by the channel.
- Large coherence time implies that the channel changes slowly.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 45: Types of Small-scale Fading

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- i.e., BS<<BC  σ<<TS
- 3. Spectral characteristics of the transmitted signal is preserved.
- i.e., BS>BC  σ>>TS
- 3. Spectral characteristics of the transmitted signal is not preserved.
- Wireless Communication

## Slide 46: Frequency Flat Fading

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Occurs when symbol period of the transmitted signal is much larger than the Delay Spread of the channel
      - Bandwidth of the applied signal is narrow.
- May cause deep fades.
      - Increase the transmit power to combat this situation.
- Wireless Communication

## Slide 47: Frequency Selective Fading

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Occurs when channel multipath delay spread is greater than the symbol period.
  - Symbols face time dispersion
  - Channel induces Intersymbol Interference (ISI)
- Bandwidth of the signal s(t) is wider than the channel impulse response.
- Wireless Communication

## Slide 48: Flat Fading/Frequency Selective Fading

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Common Rule of thumb
  - Flat Fading
  - Frequency Selective Fading
- Wireless Communication

## Slide 49: Types of Small-scale Fading

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- i.e., TC<TS
- i.e., TC>>TS

## Slide 50: Fast Fading

- Occurs due to Doppler Spread
    - Rate of change of the channel characteristics is larger than the rate of change of the transmitted signal
    - The channel changes during a symbol period.
    - The channel changes because of relative motion between the receiver and the baseband signal.
    - Coherence time (TC) of the channel is smaller than the symbol period (TS) of the transmitter signal
- Occurs when:
- BS < BD
- and
- TS > TC
- BS: Bandwidth of the signalBD: Doppler Spread
- TS: Symbol PeriodTC: Coherence Bandwidth
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 51: Slow Fading

- Due to Doppler Spread
    - Rate of change of the channel characteristics is much smaller than the rate of change of the transmitted signal.
- Occurs when:
- BS >> BD
- and
- TS << TC
- BS: Bandwidth of the signalBD: Doppler Spread
- TS: Symbol PeriodTC: Coherence Bandwidth
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 52: Fast Fading/Slow Fading

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Velocity of the mobile (or the velocity of objects in the channel) and the baseband signaling determines whether a signal undergoes fast fading or slow fading.
- Wireless Communication

## Slide 53: Different Types of Fading

- Transmitted Symbol Period
- Symbol Period of
- Transmitting Signal
- TS
- TS
- TC
- 
- Flat Slow
- Fading
- Flat Fast Fading
- Frequency Selective
- Slow Fading
- Frequency Selective
- Fast Fading
- With Respect To SYMBOL PERIOD
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 54: Different Types of Fading

- Transmitted Baseband Signal Bandwidth
- BS
- BD
- Flat Fast Fading
- Frequency Selective
- Slow Fading
- Frequency Selective
- Fast Fading
- BS
- Transmitted Baseband
- Signal Bandwidth
- Flat Slow Fading
- BC
- With Respect To BASEBAND SIGNAL BANDWIDTH
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 55: Fading  Distributions

- Describes how the received signal amplitude changes with time.
    - Remember that the received signal is combination of multiple signals arriving from different directions, phases and amplitudes.
- Its  is a statistical characterization of the variation of the envelop of the received signal over time.
- Two most common distributions
      - Rayleigh Fading
      - Ricean Fading
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 56: Rayleigh Fading

- If all the multipath components have approximately the same amplitude (that is, when MS is far from BS), the envelope of the received signal is Rayleigh distributed.
- No dominant signal component (such as the LOS component)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 57: Rayleigh distribution (1)

- Rayleigh distribution has the probability density function (PDF) given by:
-  is the rms value of the received voltage signal before envelope detection
- 2 is the time average power of the received signal before envelope detection.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 58: Rayleigh distribution (2)

- The probability that the envelope of the  received signal does not exceed a specified value of R is given by the CDF:
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 59: Rayleigh distribution (3)

- 
- 
- 
- 
- 
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 60: When there is a stationary (non-fading)  LOS signal present, then the envelope distribution is Ricean. 

The Ricean distribution degenerates to Rayleigh when the dominant component fades away.

- Ricean Fading
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 61: The Ricean distribution is given by



Where A denotes the peak amplitude of the dominant signal, and
I0(.) denotes the zeroth order Bessel function of the first kind.

- Ricean Distribution (1)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 62: The Ricean distribution is often described in terms of a parameter K
K=A2/(2σ2)
In terms of dB,
For K>>1, the Ricean Distribution tends to the Gaussian Distribution about the mean.

- Ricean Distribution (2)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 63: Ricean Distribution (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 64: Large-scale Propagation Models (1)

- As the mobile moves away from the transmitter over large distances, the local average received signal will gradually decrease.
- This is called large-scale path loss.
- Typically the local average received power is computed by averaging signal measurements over a measurement track of 5    to 40    .(For PCS, this means 1m-10m track)
- The models that predict the mean signal strength for an arbitrary-receiver transmitter (T-R) separation distance are called large-scale propagation models.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 65: Large-scale Propagation Models (2)

- Large T-R separation distances (several hundreds of thousands of meters)
- Main propagation mechanism: reflections
- Attenuation of signal strength due to power loss along distance traveled: shadowing
- Small fluctuations around a slowly varying mean
- Useful in estimating the radio coverage of a transmitter.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 66: Need for Propagation Models

- Determining the coverage area of a transmitter
  - Determine the transmitter power requirement
  - Determine the battery lifetime
- Finding modulation and coding schemes to improve the channel quality
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 67

- Free Space Propagation Model
- The free space propagation model is used to predict received signal strength when the transmitter and receiver have a clear line-of-sight path between them.
  - satellite communication
  - microwave line-of-sight radio link
- Friis free space equation
  - : transmitted power                              : T-R separation distance (m)
  - : received power                                   : system loss
  - : transmitter antenna gain                     : wave length in meters
  - : receiver antenna gain
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Large-Scale Path Loss

## Slide 68

- The gain of the antenna
- : effective aperture is related to the physical size of the antenna
- The wave length      is related to the carrier frequency by
- : carrier frequency in Hertz
- : carrier frequency in radians
- : speed of light (meters/s)
- The losses                   are usually due to transmission line attenuation, filter losses, and antenna losses in the communication system. A value of L=1 indicates no loss in the system hardware.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 69

- Isotropic radiator is an ideal antenna which radiates power with unit gain.
- Effective isotropic radiated power (EIRP) is defined as
- and represents the maximum radiated power available from transmitter in the direction of maximum antenna gain as compared to an isotropic radiator.
- Path loss for the free space model with antenna gains
- When antenna gains are excluded
- The Friis free space model is only a valid predictor for       for values of d which is in the far-field (Fraunhofer region) of the transmission antenna.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 70

- The far-field region of a transmitting antenna is defined as the region beyond the far-field distance
- where D is the largest physical linear dimension of the antenna.
- To be in the far-filed region the following equations must be satisfied
- and
- Furthermore the following equation does not hold for d=0.
- Use close-in distance        and a known received power             at that point
- or
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 71: Practical Link Budget Design Using Path Loss Models

- Log distance path loss model
  - Both Theoretical and  Measurement based models show that the received signal power decreases logarithmically with distance.
  - Both for indoor and outdoor channels
  - The average large scale pathloss for an arbitrary T-R separation is expressed as a function of distance by using a path loss exponent n.
- n characterized the propagation environment
  - For free space, it is 2.
  - When obstructions are present it has a larger value.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 72: Log-distance path loss model

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Average large-scale path loss at a distance d (denoted in dB)

## Slide 73: Large-scale Path Loss Exponent for Different Environments

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 74: Log-normal Shadowing (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The path loss equation for Log-distance model does not consider the fact that surrounding environment may be vastly different at two locations having the same T-R separation.
- This leads to measurements that are different than the predicted average values obtained using the equations shown.
- Measurements show that for any value d, the path loss PL(d) in dBm at a location is random and distributed log-normally.

## Slide 75: Log-normal Shadowing (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The log-normal distribution describes the random shadowing effects due to cluttering on the propagation path, a factor is added as follows:
- is a zero mean Gaussian (normal) distributed random variable (in dB) with standard deviation σ (also in dB)

## Slide 76: Outline

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
  - Outdoor Propagation Models
    - Okumura Model
    - Hata Model
    - Longley Rice Model (self study)
    - Walfisch and Bertoni (self study)
    - Wideband PCS Microcell Model (self study)
  - Indoor Propagation Model

## Slide 77: Outdoor Propagation Models

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
  - Outdoor radio transmission takes place over irregular terrain.
  - The terrain profile must be taken into consideration for estimating path loss.
  - Trees, buildings, hills etc. must be taken into consideration.

## Slide 78: Okumura Model (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- In early days, the models were based on empirical studies
- Okumura did comprehensive measurements in 1968 and came up with a model.
- Discovered that a good model for path loss was a simple power law where the exponent n is a function of the frequency, antenna heights, etc.

## Slide 79: Okumura Model (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- One of the most widely used models for signal prediction in the Urban Areas.
- Applicable to
  - Frequencies: 150MHz to 1920 MHz
  - Can be extrapolated upto 3GHz
  - Distances: 1 km to 100 km.
- Okumura developed a set of curves giving the medium attenuation relative to free space in an urban area over quasi-smooth terrain.

## Slide 80: Okumura Model (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- L50(dB)= LF + Amu(f,d) – G(hte) – G(hre) – GAREA
- L50  =  50% value of propagation path loss (median)
- LF   =  free space propagation loss
- Amu(f,d) =  median attenuation relative to free space
- G(hte)   =   base station antenna height gain factor
- G(hre)   =   mobile antenna height gain factor
- GAREA   =   gain due to type of environment

## Slide 81: Okumura Model (4)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 82: Okumura Model (5)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 83: Okumura Model (6)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 84: Hata Model (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The Hata model is the empirical formulation of the graphical path loss data provided by Okumura and is valid from 150 MHz to 1.5 MHz.
- The median path loss in urban areas is given by
- L50 (urban)(dB) =  69.55 + 26.16log10 fc (MHz)– 13.82 log10 hte  – (hre(m)) + (44.9-6.55loghte(m))log10 d(km)

| Parameter | Comment |
| --- | --- |
| L50 | 50th % value (median) propagation path loss (urban) |
| fc | frequency from 150MHz-1.5GHz |
| hte, hre | Base Station (30 to 200 m)and Mobile antenna  (1 to 10m)height |
|  (hre) | correction factor for hre , affected by coverage area |
| d | Tx-Rx separation in km |


## Slide 85: Hata Model (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

|  (hre) | Comment |
| --- | --- |
| (1.1log10 fc - 0.7)hre – (1.56log10 fc - 0.8)dB | Small to Medium City |
| 8.29(log10 1.54hre)2 – 1.1 dB | Large City (fc  300MHz) |
| 3.2(log10 11.75hre)2 – 4.97 dB | Large City (fc > 300MHz) |


| L50 (dB) | Comment |
| --- | --- |
| L50 (urban) - 2[log10 (fc/28)]2 – 5.4 | Suburban Area |
| L50 (urban) - 4.78(log10 fc)2 - 18.33log10 fc - 40.98 | Open rural Area |

- Mobile Antenna Height Correction Factor for Hata Model
- Hata Model for Rural and Suburban Regions
- represent reductions in fixed losses for less demanding environments

## Slide 86: Longley Rice Model (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The Longley Rice model is also known as the Irregular Terrain Model (ITM).
- Calculates large-scale median propagation loss relative to free-space propagation loss over irregular terrain.
- It covers 40 MHz to 100GHz.
- It accounts for a wide range of terrains.
- The Longley Rice model has two parts- a model for predictions over an area and a model for point-to-point link predictions.

## Slide 87: Longley Rice Model (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The area-to-area prediction model is used when the terrain path profile is not available, and provides a method to estimate the path-specific parameters such as terrain irregularity, horizon distance between the transmitting and receiving antennas, horizontal elevation angle, etc.
- The Point-to-point wireless link prediction model is used when a detailed path profile is available, and path-specific parameters can be easily determined.

## Slide 88: Longley Rice Model (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- The Longley Rice model is normally available as a computer program that takes as input:
  - Transmission frequency
  - Path length
  - Polarization
  - Antenna Heights
  - Surface reflectivity
  - Ground conductivity and dielectric constant
  - Climatic factors
- The main drawback of the Longley-Rice propagation model is that it does not consider the effect of multipath, buildings, foliage, and other environmental factors.

## Slide 89: Indoor Propagation Models (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Indoor channels are different from traditional mobile radio channels in two different ways:
  - The distances covered are much smaller
  - The variability of the environment is much greater for a much smaller range of Tx and Rx separation distances.
- The propagation inside a building is influenced by:
  - Layout of the building
  - Construction materials
  - Building type: office area, residential home, factory etc.

## Slide 90: Indoor Propagation Models (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Indoor propagation is dominated by the same mechanisms as outdoor: reflection, scattering, diffraction.
  - However, conditions are much more variable
    - Doors/windows open or not
    - The mounting place of antenna: desk, ceiling, etc.
    - The level of floors
- Indoor channels are classified as
  - Line of sight (LOS)
  - Obstructed (OBS) with varying degrees of cluster

## Slide 91: Indoor Propagation Models (3)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Temporal fading for fixed and moving terminals
  - Motion of people inside building causes Ricean Fading for the stationary receivers.
  - Portable receivers experience in general:
    - Rayleigh fading for OBS propagation paths.
    - Ricean fading for LOS paths.

## Slide 92: Indoor Propagation Models (4)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Multipath Delay Spread
  - Buildings with fewer metals and hard partitions typically have small rms delay spreads: 30 to 60 ns.
    - Can support data rates excess of several Mbps without equalization
  - Larger buildings with great amount of metal and open aisles may have rms delay spreads as large as 300ns.
    - Can not support data rates more than a few hundred Kbps without equalization.

## Slide 93: Indoor Propagation Models (5)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Path Loss: The following formula that we have seen earlier also describes the indoor path loss:
- n and σ depends on the type of the building
- Smaller value of σ indicates better accuracy of the path loss model.

## Slide 94: Indoor Propagation Models (6)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- In building path loss factors
  - Partition losses (same floor)
  - Partition losses between floors
  - Signal Penetration into Buildings

## Slide 95: Partition Losses (Same Floor)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Two kinds:
  - Hard partitions: Walls of the rooms
  - Soft partitions: Moveable partitions that do not span to the ceiling
- Path loss depends on the type of the partitions

## Slide 96: Partition Losses (Same Floor)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

| Material Type | Loss (dB) | Frequency |
| --- | --- | --- |
| All metal partition | 26 dB | 815 MHz |
| Concrete block wall | 13 dB | 1300 MHz |
| Empty Cardboard boxes | 3-6 dB | 1300 MHz |
| Dry Plywood (0.75 inches) | 1 dB | 9.6 GHz |
| Dry Plywood (0.7 inches) | 4 dB | 28.2 GHz |


## Slide 97: Partition Losses between Floors (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Depend on:
  - External dimensions and materials of the building.
  - Type of construction used to create floors
  - External surroundings
  - Number of windows
  - Presence of tinting on windows

## Slide 98: Partition Losses between Floors (2)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

| No.of Floors | FAF (dB) |
| --- | --- |
| Through 1 Floor | 12.9 |
| Through 2 Floors | 18.7 |
| Through 3 Floors | 24.2 |
| Through 4 Floors | 27.0 |

- Average Floor Attenuation Factor (FAF) in dB between floors of a building measured at 915 MHz.

## Slide 99: Ericsson Multiple breakpoint Model

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- measurements in multi-floor office building
  - uses uniform distribution to generate path loss values between
  - minimum & maximum range, relative to distance.
  - 4 breakpoints consider upper and lower bound on path loss
  - assumes 30dB attenuation at d0 = 1m
    - - accurate for f = 900MHz & unity gain antenna
  - provides deterministic limit on range of path loss at given distance
- The attenuation slopes change from 20 dB/decade to the first breakpoint to an attenuation of D-12 for the final section of the model.

## Slide 100: Attenuation Factor Model (1)

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Obtained by measurement in a multiple floor office building.
- Path loss exponent of the same floor.
- Floor Attenuation Factor
- Partition Attenuation Factor

## Slide 101

- In spread spectrum (SS), we combine signals from different sources to fit into a larger bandwidth, but our goals are to prevent eavesdropping and jamming. To achieve these goals, spread spectrum techniques add redundancy.
- Frequency Hopping Spread Spectrum (FHSS)Direct Sequence Spread Spectrum (DSSS)
- Topics discussed in this section:
- SPREAD SPECTRUM
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 102

- Spread Spectrum achieves through two principles.
  - The bandwidth allocated to each station needs to be larger
  - than what is needed.
  - The spreading process occurs after the signal is created
  - by the source.
- Spread Spectrum
- Spread spectrum
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 103

- Tribhuvan University
- Institute of Engineering
- FHSS uses M different carrier frequencies that are modulated by the source signal.
  - At one moment, the signal modulates one carrier frequency;
  - At the next moment, the signal modulates another carrier frequency.
- Spread Spectrum
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication
- Frequency hopping
- spread spectrum (FHSS)

## Slide 104

- Frequency selection in FHSS
- Spread Spectrum
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 105

- DSSS
- In DSSS, we replace each data bit with n bits using a spreading code.
  - Each bit is assigned a code of n bits, called chips, where the chip rate is n times that of the data bit.
- Spread Spectrum
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 106

- DSSS example
- Spread Spectrum
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wireless Communication

## Slide 107

- OFDM (Orthogonal Frequency Division multiplexing)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Limitations of single-carrier transmission  for High Data Rate
- To support the symbol rate of Rs symbols per second, the minimum requiredbandwidth is the Nyquist bandwidth Rs/2. (wider bandwidth is required  to support a higher data rate in a single-carrier transmission).
- When the signal bandwidth  becomes larger than the coherence bandwidth in the the wireless channel, the link suffers from multi-path fading, incurring the inter-symbol interference (ISI).
- In general, adaptive equalizers are employed to deal with the ISI incurred by the time-varying multi-path fading channel.
- However, the complexity of equalizer increases enormously, as the data rate increases which increases ISI.
- This increases the frequency selectivity of the channel.
- In conclusion, a high data rate single-carrier transmission may not be feasible due to too much complexity of the equalizer in the receiver.
- Multi-carrier transmission
- To overcome the frequency selectivity of the wideband channel experienced by single-carrier transmission, multiple carriers can be used for high rate data transmission.
- Wireless Communication

## Slide 108

- OFDM (Orthogonal Frequency Division multiplexing)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Wide band signal is ananlyzed (through multiple narrowband filter Hk(f)) into several narrowband signals at the  transmitter and is synthesized (through multiple narrowband filter Gk(f)’s, each being matched to Hk(f) at the receiver so that the frequency-selective wideband channel can be approximated by multiple frequency-flat narrowband channels
- Note that the frequency-nonselectivity of narrowband channels reduces the complexity of the equalizer for each subchannel.
- Wireless Communication

## Slide 109

- OFDM (Orthogonal Frequency Division multiplexing)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD)
- Electronics and Communication Engineering
- Multi-carrier transmission
- To overcome the frequency selectivity of the wideband channel experienced by single-carrier transmission, multiple carriers can be used for high rate data transmission.
- Wireless Communication
