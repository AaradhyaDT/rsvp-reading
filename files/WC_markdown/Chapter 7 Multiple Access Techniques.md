# Chapter 7 Multiple Access Techniques

## Slide 1: Chapter 7Multiple Access Techniques for Wireless Communications

*(no text content — image/diagram slide)*

## Slide 2: Multiple access techniques

  - FDMA
  - TDMA
  - SSMA
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 3: Narrowband systems:
The available radio spectrum is divided into a large number of narrowband channels.
The channels are usually operated using FFD.

Wideband systems:
Transmission bandwidth of signal is much larger than the coherence bandwidth of the radio channel.
Frequency selective fades occur in only a small fraction of the signal bandwidth.

- Narrow and Wideband systems
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 4

- Frequency Division Duplexing (FDD) and Time Division Duplexing (TDD)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 5

- Frequency Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 6: Frequency division multiple access (FDMA) assigns individual channels to individual users. 

Each user is allocated a unique frequency band or channel.

There channels are assigned on demand to users who request service. 

During the period of the call, no other user can share the same channel.

- Frequency Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 7: Features
usually implemented in narrowband systems.

carries only one phone circuit at a time.

If an FDMA channel is not in use, it sits idle and cannot be used by other users to increase or share capacity. 

FDMA is usually implemented in narrowband systems.

The symbol time is large as compared to the average delay spread. This implies that the amount of intersymbol interference is low and, thus, little or no equalization is required in FDMA narrowband systems.

- Frequency Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 8: The complexity of FDMA mobile systems is lower when compared to TDMA systems.

Since FDMA is a continuous transmission scheme, fewer bits are needed for overhead purposes.

The FDMA mobile unit uses duplexers since both the transmitter and receiver operate at the same time. This results in an increase in the cost of FDMA subscriber units and base stations.

FDMA requires tight RF filtering to minimize adjacent channel interference.

- Frequency Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 9: Number of channels supported in a FDMA system




where Bt is the total spectrum allocation 
Bguard is the guard band allocated at the edge of the spectrum.

- Frequency Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 10

- Frequency Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 11

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 12: Features
TDMA shares a single carrier frequency with several users, where each user makes use of nonoverlapping time slots. 

Data transmission for users of a TDMA system is not continuous, but occurs in bursts. This results in low battery consumption.

Because of discontinuous transmissions in TDMA, the handoff process is much simpler for a subscriber unit, since it is able to listen for other base stations during idle time slots.

TDMA uses different time slots for transmission and reception, thus duplexers are not required.

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 13: equalization is usually necessary in TDMA systems, since the transmission rates are generally very high as compared to FDMA channels. 

High synchronization overhead is required in TDMA systems because of burst transmissions.

TDMA has an advantage in that it is possible to allocate different numbers of time slots per frame to different users.

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 14: number of channel slots in a TDMA system

                    


                                                         

where m is the number of time slots on each channel.
Bc is the carrier channel bandwidth in Hz

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 15: The preamble contains the address and synchronization information that both the base station and the subscribers use to identify each other.
Guard times (bits) between the time slots helps in minimizing the interference due to propagation delay.

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 16

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 17

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 18

- Time Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 19: Types of spread spectrum multiple access
Frequency Hopping Multiple Access
Direct Sequence (also called CDMA)

- Spread Spectrum Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 20: Spread Spectrum

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- Processing Gain (PG)
- The Processing Gain is given by
- The signal bandwidth is reduced to B, while the interference energy is spread over an bandwidth exceeding Bss.
- The greater the PG, the greater will be its ability to suppress inband interference.

## Slide 21: The PN sequence generator is basically a shift register.
In Fig type D flip-flops are connected such that the D input to a flip-flop is connected to the Q output of the previous flip-flop.
The input D0 of the first flip-flop has been connected to the output of the parity generator.

- Pseudo-Noise (PN) Sequence
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 22: A parity generator generally consists of exclusive-OR gates.

The character generated by a PN sequence generator depends on the number of flip-flops used (m) and on the selection of which flip-flop output is connected to the inputs of parity generator.

The output sequence will repeat itself after every 2m bits.

In order to make the random sequence “look like” truly random, its length should be increased sufficiently.

NOTE: cascade of binary exclusive-or operations: the first two signals are fed into an XOR gate, then the output of that gate is fed into a second XOR gate together with the third signal, and so on for any remaining signals. The result is a circuit that outputs a 1 when the number of 1s at its inputs is odd, and a 0 when the number of incoming 1s is even. This makes it practically useful as a parity generator or a modulo-2 adder.

- Pseudo-Noise (PN) Sequence
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 23: Frequency Hopping

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 24: Frequency Hopping

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- FH transmitter

## Slide 25: Frequency Hopping

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- FH receiver

## Slide 26: carrier frequencies of the individual users are varied in a pseudo random within a wideband channel

Digital data is broken into uniform sized bursts which are transmitted on different carrier frequencies.

The instantaneous bandwidth of any one transmission burst is much smaller than the total spread bandwidth.

Pseudorandom change of the carrier frequencies of the user randomizes the occupancy of a specific channel at any given time, thereby allowing for multiple access over a wide range of frequencies.

in the receiver, a locally generated PN code is used to sync the receiver instantaneous frequency with that of the transmitter.

- Frequency Hopping
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 27: A frequency hopped system provides  a level of security, especially when a large number of channels are used, since an unintended (or an intercepting) receiver that does not know the pseudorandom sequence of frequency slots must retune rapidly to search for the signal it wishes to intercept.

A spread spectrum modulation technique implies that the radio transmitter frequency hops from channel to channel in a predetermined way by pseudorandom sequence.

The RF signal is despread at the receiver end using a frequency synthesizer controlled by a pseudorandom sequence generator synchronized to the transmitter’s pseudorandom sequence generator.

- Frequency Hopping Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 28: Classified as Fast frequency hopping and Slow frequency hopping

Fast frequency hopping occurs if there is more than one frequency hop during each transmitted symbol. It implies that the hopping rate equals or exceeds the information symbol rate.

Slow frequency hopping occurs if one or more symbols are transmitted in the time interval between frequency hops.

- Frequency Hopping Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 29: Direct Sequence Spread Spectrum

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 30: Direct Sequence Spread Spectrum

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- Block diagram of transmitter for DS-SS system with binary phase modulation

## Slide 31: Direct Sequence Spread Spectrum

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- Block diagram of receiver for DS-SS system.

## Slide 32

- Code Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 33: The narrowband message signal is multiplied by a very large bandwidth signal called the spreading signal. 

The spreading signal is a pseudo-noise code sequence that has a chip rate which is order of magnitudes greater than the data rate of the message.

Each user has its own pseudorandom codeword which is approximately orthogonal to all other codewords.

receiver performs a correlation operation to detect only the specific desired codeword.

Each user operates independently with no knowledge of the other users.

- Code Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 34: In CDMA, the power of multipath users at a receiver determines the noise floor after decorrelation.

If the power of each user within a cell is not controlled, the near-far problem occurs.

The near-far problem occurs when many mobile users share the same channel. Since one transmission is the other’s noise, the signal-to-noise ratio for the further transmitter must be higher.
If the nearer transmitter transmits a signal in magnitudes of the order over the further transmitter may be below the required value making the signal undetectable and the father transmitter may just as well not transmit.

To overcome this problem, a power control mechanism is used.

- Code Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 35: Power control is provided by each base station in a cellular system and assures that each mobile within the base station coverage area provides the same signal level to the base station receiver.

- Code Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- Near far problem scenario

## Slide 36: Features of CDMA
Many users of a CDMA system share the same frequency. Either TDD or FDD may be used.

CDMA has a soft capacity limit. Increasing the number of users in a CDMA system raises the noise floor in a linear manner. Thus, there is no absolute limit on the number of users in CDMA. 

Multipath fading may be substantially reduced because the signal is spread over a large spectrum. If the spread spectrum bandwidth is greater than thecoherence bandwidth of the channel, the inherent frequency diversity willmitigate the effects of small-scale fading.

- Code Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 37: Since PN sequences have low autocorrelation, multipath which is delayed by more than a chip will appear as noise. A RAKE receiver can be used to improve reception by collecting time delayed versions of the required signal.

In CDMA Soft handoff is performed by the MSC.The MSC may chose the best version of the signal at any time without switching frequencies.

Self-jamming is a problem in CDMA system. Self-jamming arises from the fact that the spreading sequences of different users are not exactly orthogonal, hence in the despreading of a particular PN code, non-zero contributions to the receiver signal for a desired user arise from the transmissions of other users in the system.

The near-far problem occurs at a CDMA receiver if an undesired user has a high detected power as compared to the desired user.

- Code Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 38: Hybrid Spread Spectrum Techniques

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- Hybrid FDMA/CDMA
  - This technique can be used as an alternative to the DS-CDMA.
  - Available wideband spectrum is divided into a number of subspectras with smaller bandwidths.
  - Each of these smaller subchannels becomes a narrowband CDMA system having processing gain lower than original CDMA system.
  - Different users can be allocated different subspectrum bandwidths depending on their requirements.

## Slide 39: Hybrid Direct Sequence/Frequency Hopped(DS/FHMA)
Consists of a direct sequence modulated signal whose center frequency is made to hop periodically in a pseudorandom fashion.
Avoids the near-far problem as frequency diversity is introduced.
But, not adaptable to the soft handoff because the FH base station receiver are required to be synchronised to the multiple hopped signals.

- Hybrid Spread Spectrum Techniques
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 40: Time Division CDMA(TCDMA)
Different spreading codes are assigned to different cells.

only one user per cell is allotted a particular time slot. 

it avoids the near-far effect since only one user transmits at a time within a cell.

When a handoff takes place, the spreading code of the user is changed to that of the new cell.

- Hybrid Spread Spectrum Techniques
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 41: Time Division Frequency Hopping(TDFH)
Subscriber can hop to a new frequency at the start of a new TDMA frame, thus avoiding severe deep frequency selective fading or co-channel interference.

The mobile subscriber can hop to a new frequency at the beginning of every TDMA frame.

At each time slot, the mobile subscriber is hopped to a new frequency according to a pseudorandom hopping sequence.

- Hybrid Spread Spectrum Techniques
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 42: Controls the radiated energy for each user in space. That is, serves different users by using spot beam antennas.
These areas covered by the antenna beam may be served by the same frequency (in TDMA or CDMA system) or different frequencies (in an FDMA system).
Sectorized antennas are primitive application of SDMA.

- Space Division Multiple Access
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
