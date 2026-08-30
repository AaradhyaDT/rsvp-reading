# Chapter 5 Equalization and Diversity Techiques

## Slide 1: Equalization, Diversity, and Channel Coding

- Introduction
- Diversity Techniques
- Equalization Techniques
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 2: Introduction

- Three techniques are used independently or one after another to improve receiver signal quality.
- Equalization compensates for ISI created by multipath with time dispersive channels (Bs>BC)
  - Linear equalization, nonlinear equalization
- Diversity also compensates for fading channel impairments, and is usually implemented by using two or more receiving antennas.
  - Spatial diversity, antenna polarization diversity, frequency diversity, time diversity
- The former counters the effects of time dispersion (ISI), while the latter reduces the depth and duration of the fades experienced by a receiver in a flat fading channel.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 3: Diversity Techniques

- Diversity is a powerful communication receiver technique that provides wireless link improvement at relatively low cost.
- Unlike equalization diversity requires no training overhead.
- Can provides significant link improvement with little added cost.
- Diversity decisions are made by the Rx, and are unknown to the Tx.
- Diversity concept
  - If one radio path undergoes a deep fade, another independent path may have a strong signal.
  - By having more than one path to select from, both the instantaneous and average SNRs at the receiver may be improved, often by as much as 20 dB to 30 dB
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 4: Diversity Techniques

- Microscopic diversity
  - used for small-scale fading.
  - If the antenna are separated by a fraction of a meter, one may receive a null while the other receives a strong signal.
  - By selecting the best signal at all times, a receiver can mitigate small-scale fading effect.
  - This is called antenna diversity (or space diversity).
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 5: Diversity Techniques

- Macroscopic diversity
  - Used in large-scale fading cased by shadowing due to variations in both the terrain profile and the nature of surroundings.
  - In deeply shadowed conditions, the received signal strength at a mobile can drop well below that of free space.
  - By selecting a base station which is not shadowed when others are, the mobile can improve substantially the average signal-to-noise ratio on the forward link.
  - This is called macroscopic diversity, since the mobile is taking advantage of large separations between the serving base stations.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 6: Diversity Techniques (Space Diversity)

- Fig. Generalized block diagram for space diversity
- Space diversity is also known as antenna diversity.
- The signal received from spatially separated antennas on the mobile would have essentially uncorrelated envelopes for antenna separations of one half wavelength (λ/2) or more.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 7

- Space diversity reception methods can be classified into four categories.
  - Selection diversity
  - Feedback diversity
  - Maximal ratio combining
  - Equal gain diversity
- Space Diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 8

- m diversity branches whose gains are adjusted to provide the same average SNR for each branch.
- The receiver branch having the highest instantaneous SNR is connected to the demodulator i.e., the antenna signals are sampled and the best one sent to a single demodulation.
- A practical selection diversity system has to be designed carefully such that reciprocal of the mobile signal fading rate is longer than the internal time constant values of selection diversity circuitry.
- Space Diversity (Selection diversity)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 9

- Space Diversity (Selection diversity)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 10

- The M signals are scanned in a fixed sequence until one is found to be above a predetermined threshold.
- The signal is then received until it falls below threshold and the scanning process is again initiated.
- The resulting fading statistics are somewhat inferior to those obtained by the other methods.
- Simple to implement, only one receiver is required.
- Space Diversity
- (Feedback or scanning diversity)
- Fig. Basic form for scanning diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 11

- The signals from all of the m branches are weighted according to their signal voltage to noise power ratios and then summed.
- The individual signals must be co-phased before being summed.
- Maximum ratio combining produces an output SNR equal to the sum of the individual SNRs.
- Produces an output with acceptable SNR even when none of the individual signals are themselves acceptable.
- This technique gives the best statistical reduction of fading.
- Space Diversity
- (Maximal Ratio Combining Technique)
- Fig. Maximal Ratio Combining technique
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 12

- Used when it is not convenient to provide for the variable weighting capability required for maximal ratio combining.
- The branch weights are all set to unity but the signals from each are co-phased to provide equal gain combining diversity.
- The probability of producing an acceptable signal from a number of unacceptable inputs is still retained.
- Performance is only marginally inferior to maximal ratio combining and superior to selection diversity.
- Space Diversity (Equal Gain Combining)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 13

- Polarization Diversity
  - Both horizontal and vertical polarization are involved.
  - Different fading variations are experienced by horizontal and vertical polarizations.
- Frequency Diversity
  - Frequency diversity transmits information on more than one carrier frequency
  - The frequencies separated by more than that of the coherence bandwidth of the mobile channel, would be uncorrelated with each other and hence would not experience same fading status.
  - Frequencies separated by more than the coherence bandwidth of the channel will not experience the same fadings
- Polarization Diversity and
- Frequency Diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 14

- Time diversity repeatedly transmits information at time spacings that exceed the coherence time of the channel, so that multiple repetitions of the signal will be received with independent fading conditions, thereby providing for diversity.
- The modern implementation of time diversity involves the use of the RAKE receiver for CDMA.
- RAKE receiver
  - CDMA spreading codes are designed to provide very low correlation between successive chips.
  - Propagation delay spread in the radio channel merely provides multiple versions of the transmitted signal at the receiver.
  - If the multipath components are delayed in time by more than a chip duration, they appear like uncorrelated noise at a CDMA receiver, and equalization is not required.
  - Since there is useful information in the multipath components, CDMA receiver may combine the time delayed version of the original signal transmission in order to improve the signal to noise ratio at the receiver.
- Time Diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 15

- A RAKE receiver collects the time-shifted version of the original signal by providing a separate correlation receiver for each of the multipath signals.
- RAKE receiver is essentially a diversity receiver designed specifically for CDMA, where the diversity is provided by the fact that the multipath components are practically uncorrelated from one another when their relative propagation delays exceed a chip period.
- Time Diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 16

- A RAKE receiver utilizes multiple correlators to separately detect the M strongest multipath components.
- The low autocorrelation properties of a CDMA spreading sequence can assure that multipath components will appear nearly uncorrelated with each other.
- Time Diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 17

- Interleaving
  - It is typical for many speech codes to produce several “important” bits in succession, and it is the function of the interleaver to spread these bits from a block of source data are not corrupted at the same time.
  - Interleaving scrambles the time order of source bits before they are channel coded.
- Time Diversity
- Fig.Block interleaver where source bits are read into columns and out as n-bit rows
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 18

- Human speech is tolerable to listen to delays of less than 40 ms.
- It is the reason that all of the wireless data interleavers have delays which do not exceed 40ms.
- Time Diversity
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 19: Equalization Techniques

- The term equalization can be used to describe any signal processing operation that minimizes ISI.
- As the mobile fading channels are random and time varying, equalizers must track the time-varying characteristics of the mobile channel and therefore should be time-varying or adaptive.
- An adaptive equalizer has two phases of operation: Training and Tracking. These are as follows.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 20: Equalization Techniques

- Training Mode:
- Initially a known, fixed length training sequence is sent by the transmitter so that the receiver equalizer may average to a proper setting.
- Training sequence is typically a pseudo-random binary signal or a fixed prescribed bit pattern.
- The training sequence is designed to permit an equalizer at the receiver to acquire the proper filter coefficient in the worst possible channel condition. An adaptive filter at the receiver thus uses a recursive algorithm to evaluate the channel and estimate filter coefficients to compensate for the channel.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 21: Equalization Techniques

- Tracking Mode:
- When the training sequence is finished the filter coefficients are near optimal.
- Immediately following the training sequence, user data is sent.
- When the data of the users are received, the adaptive algorithms of the equalizer tracks the changing channel.
- As a result, the adaptive equalizer continuously changes the filter characteristics over time.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 22: Equalization Techniques

- Three factors affect the time spanning over which an equalizer converges:
- equalizer structure,
- equalizer algorithm, and
- time rate of change of the multipath radio channel
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 23: Equalization Techniques

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 24: Equalization Techniques

- Equalizer is usually implemented at baseband or at IF in a receiver
- x(t): transmitted signal
- f(t): combined impulse response of the transmitter, channel and the RF/IF section of the receiver.
- nb(t): baseband noise at the input of the equalizer
- heq(t): impulse response of the equalizer
- denotes the convolution operation.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 25: Equalization Techniques

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering
- This indicates that an equalizer is actually an inverse filter of the channel.
- If the channel is frequency selective, the equalizer enhances the frequency components with small amplitudes and attenuates the strong frequencies in the received frequency response.
- For a time-varying channel, an adaptive equalizer is needed to track the channel variations.

## Slide 26: Basic Structure of Adaptive Equalizer

- An adaptive equalizer is a time-varying filter which must constantly be retuned.
- Transversal filter with N delay elements, N+1 taps, and N+1 tunable complex weights.
- These weights are updated continuously by an adaptive algorithm, either on sample by sample basis or on block by block basis.
- The adaptive algorithm is controlled by the error signal ek.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 27: Equalization Techniques

- The error signal is derived by comparing the output of the equalizer ,with some signal dk which is either an exact replica of the transmitted signal xk or which represents a known property of the transmitted signal.
- Adaptive algorithm uses ek to minimize a cost function and update the equalizer weights in a manner that iteratively reduces the cost function.
- The least mean squares (LMS) algorithm searches for the optimum or near optimum filter weights by performing the following iterative operation
- New weights=Previous weights+(constant)×(Previous error)×(Current input vector)
- Where,
- Previous error =Previous desired output – Previous actual output
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 28: Equalization Techniques

- The constant may be adjusted by the algorithm to control the variation between filter weights on successive iterations.
- This process is repeated rapidly in a programming loop while the equalizer attempts to converge, and many techniques may be used to minimize the error.
- Upon reaching convergence, the adaptive algorithm freezes the filter weights until the error signal exceeds an acceptable level or until a new training sequence is sent.
- The most common cost function is the mean square error (MSE) between the desired signal and the output of the equalizer.
- The MSE is denoted by E[e(k)e*(k)].
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso Prof
- Electronics and Communication Engineering

## Slide 29

- Solutions for Optimum Weights
- Input vector yk and weight vector wk.
- Output
- Desired equalizer output
- Error signal
- Expected value

## Slide 30: Solutions for Optimum Weights

- Cross correlation vector p between the desired response and the input signal.
- Input correlation matrix defined as the (N+1)(N+1) square matrix R
- Mean Square Error
- Minimizing  the Mean Square Error(MSE) leads to optimal solutions wk.
- The optimal solution for weight is given in Rappaport.(self study)

## Slide 31: Equalization Techniques

- Two general categories - linear and nonlinear equalization
- If d(t) is not the feedback path to adapt the equalizer, the equalization is linear
- If d(t) is fed back to change the subsequent outputs of the equalizer, the equalization is nonlinear

## Slide 32: Equalization Techniques

- DEF: Decision Feedback Equalization
- ML Symbol Detection: Maximum Likelihood Symbol Detection
- MLSE: Maximum Likelihood Sequence Estimation.
- Fig. Classification of equalizers

## Slide 33: Equalizer Techniques

- Fig. Basic linear transversal equalizer structure
- Assuming the delay elements have unity gain and delay Ts , the transfer function of the linear equalizer can be written as a function of the delay operation exp(-jwTs)  or z-1.
- Linear transversal equalizer (LTE, made up of tapped delay lines as shown in Fig)

## Slide 34: Equalizer Techniques

- Fig.5 Tapped delay line filter with both feedforward and feedback taps
- The simple LTE uses only feed forward taps.
- The equalizer can also use both feed forward and feedback taps.
- The equalizer using both feed forward and feedback taps are unstable and are rarely used.

## Slide 35: Structure of a Linear Transversal Equalizer

- In this equalizer, the current and past values of the received signal are linearly weighted by the filter coefficient and summed to produce the output .
- The output of this transversal filter before a threshold detection is

## Slide 36: Structure of a Linear Transversal Equalizer

- :frequency response of the channel
- :noise spectral density
- The minimum mean squared error that a linear transversal equalizer can achieve is

## Slide 37: Structure of a Lattice Equalizer

- The structure of a Lattice Equalizer (self study)

## Slide 38: Nonlinear Equalization

- Used in applications where the channel distortion is too severe.
- In attempt to compensate for the distortion, the linear equalizer places too much gain in the vicinity of the spectral null, thereby enhancing the noise present in those frequencies.
- Two effective methods
  - Decision Feedback Equalization (DFE)
  - Maximum Likelihood Sequence Estimator (MLSE)

## Slide 39: Nonlinear Equalizer-DFE

- Fig. Decision feedback equalizer (DFE)

## Slide 40: Nonlinear Equalization--DFE

- Basic idea : once an information symbol has been detected and decided upon, the ISI that it induces on future symbols can be estimated and subtracted out before detection of subsequent symbols.
- Can be realized in either the direct transversal form or as a lattice filter.

## Slide 41: Nonlinear Equalization--DFE

- Transversal form consists of a feed forward filter (FFF) and feedback filter (FBF).
- The FBF is driven by decisions on the output of the detector, and the coefficients can be adjusted to cancel the ISI on the current symbol from the past detected symbols.
- Can be realized in either the direct transversal form or as a lattice filter
- The minimum mean square error a DFE can achieve is

## Slide 42: Nonlinear Equalization--MLSE

- MLSE tests all possible data sequences (rather than decoding each received symbol by itself), and chooses the data sequence with the maximum probability as the output.
- Usually has a large computational requirement.
- First proposed by Forney using a basic MLSE estimator structure and implementing it with the Viterbi algorithm.
- In MLSE state of radio channel is estimated by receiver using L most recent input samples.
- If M is size of symbol alphabet of modulation then channel has ML states.
- Viterbi algorithm then traces the state of channel by paths through the ML trellis and give at stage k most probable sequence.
- MLSE is optimum Equalizer as it minimizes the probability of sequence error.

## Slide 43: Nonlinear Equalizer-MLSE

- MLSE requires knowledge of the channel characteristics in order to compute the matrics for making decisions
- MLSE also requires knowledge of the statistical distribution of the noise corrupting the signal.
- Fig.10 The structure of a maximum likelihood sequence equalizer(MLSE) with an adaptive matched filter

## Slide 44: Algorithm for Adaptive Equalization

- Three classic equalizer algorithms :
- Zero Forcing (ZF),
- Least Mean Squares (LMS), and
- Recursive Least Squares (RLS) algorithm

## Slide 45: Zero Forcing Algorithm

- Zero Forcing Equalizer refers to a form of linear equalization algorithm used in communication systems which applies the inverse of the frequency response of the channel. This form of equalizer was first proposed by Robert Lucky.
- For a channel with frequency response F(f) the zero forcing equalizer C(f) is constructed by C(f)=1/F(f). Thus the combination of channel and equalizer gives a flat frequency response and linear phase.
- The equalizer coefficients cn are chosen to force the samples of the combined channel and equalizer impulse response to zero at all but one of the NT spaced sample points in the tapped delay line filter.
- By letting the number of coefficients increase without bound, an infinite length equalizer with zero ISI at the output can be obtained.

## Slide 46: Zero Forcing Algorithm

- In reality, zero-forcing equalization does not work in most applications, for the following reasons:
  - Even though the channel impulse response has finite length, the impulse response of the equalizer needs to be infinitely long.
  - At some frequencies the received signal may be weak. To compensate, the magnitude of the zero-forcing filter ("gain") grows very large. As a consequence, any noise added after the channel gets boosted by a large factor and destroys the overall signal-to-noise ratio. Furthermore, the channel may have zeroes in its frequency response that cannot be inverted at all. (Gain×0 still equals 0).

## Slide 47: Least Mean Square Algorithm

- The criterion used is the minimization of the mean square error (MSE) between the desired equalizer output and the actual equalizer output.
- Using the previous derivation of MSE
- The LMS algorithm seeks to minimize the mean square error .
- For a specific channel condition, the prediction error ek is dependent on the tap gain vector wN, so the MSE of an equalizer is a function of wN.
- Let the cost function J(wN) denote the mean square error as a function of tap gain vector wN.
- To obtain the optimal tap gain vector wN, the normal equation must be solved iteratively as the equalizer converges to an acceptably small vale of Jopt.

## Slide 48: Equalization algorithms

- Recursive Least Mean Square Algorithms (Self study)*
- Fractionally Spaced Equalizer (Self study)*
