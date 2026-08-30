# Chapter 6 Speech coding fundamental

## Slide 1: Chapter 6Speech Coding Fundamentals

*(no text content — image/diagram slide)*

## Slide 2: Motivation for speech coding

- Goals of speech coding
  - Remove redundancy from speech signal
  - Achieve compression (use minimum number if bits while maintaining quality)
  - Reduce transmission and storage costs
- Higher the speech bit rate
  - Higher the speech quality
  - Greater the bandwidth and storage requirements
- Trade-off between bandwidth utilization and speech quality

## Slide 3: To compress more speech channels within a given bandwidth, researchers are continuously in search of speech coders that will provide high quality speech at lower bit rates.
More specifically, in wireless communications, the goal of all speech coding systems is to 
transmit speech with the highest possible quality using the least possible channel capacity.
Remove redundancy from speech signal
Achieve compression (use minimum number if bits while maintaining quality)
Reduce transmission and storage costs
A balance needs to be struck between the coder bit-rate efficiency and algorithmic complexity.

- Speech Coding

## Slide 4: Categories of Speech Coders

*(no text content — image/diagram slide)*

## Slide 5: Categories of Speech Coders

- Waveform Coders
  - Speech modeling is not required
  - Works on any input analog signal
    - As long as the signal can be supported by sampling without any significant distortion
    - Designed to be source independent
  - Encodes speech signals such that the number of bits used to represent each sample is minimized
  - Reproduces the time waveform of the speech signal as closely as possible
  - Low compression ratio and minimal complexity

## Slide 6: Categories of Speech Coders

- Source Coders
  - Recreate spectral characteristics of speech by modeling vocal tract using time varying digital filters
    - Vocal tract filter parameters are created at encoder
    - Model parameters are sent to receiver
    - Decoder will reconstruct speech based on received parameters
  - High complexity, but better compression ratio
  - Quality of speech is low with mechanic sound, but with reasonable intelligibility.

## Slide 7: Speech waveforms have a number of useful properties that can be exploited when designing efficient coders.

Some of the properties that are most often utilized in speech coder design include.

Autocorrelation Function (ACF)

Probability Density Function (PDF)

Power Spectral Density Function (PSD)

- Characteristics of speech signal

## Slide 8: Autocorrelation Function (ACF)
In speech signal there exists much correlation between adjacent samples of the segment of speech.
This implies that in every sample of speech, there is a large component that is easily predicted from the value of the precious samples with a small random error.
All differential and predictive coding schemes are based on exploiting this property.
Autocorrelation function (ACF)



x(k) is kth sample of speech signal.
typical signals have an adjacent sample correlation, as high as 0.85 to 0.9.

- Characteristics of speech signal

## Slide 9: Probability Density Function (PDF)
Speech signal amplitude has a nonuniform probability density function (pdf) denoted by



The pdf of a speech signal is in general characterized by a very high probability of near-zero amplitudes, a significant probability of very high amplitudes, and a monotonically decreasing function of amplitudes between these extremes.
nonuniform quantizers, including vector quantizers, are used to match the distribution by allocating more quantization levels in the regions of high probability and fewer levels in the region where the probability is low.

- Characteristics of speech signal

## Slide 10: Power Spectral Density Function (PSD)

Non-flat characteristic of the power spectral density of speech makes it possible to obtain signification compression by coding speech in the frequency domain.

That is, coding the speech signal separately in different frequency bands can leads to significant coding gain.

It should be noted that the high frequency components, through insignificant in energy are very important carrier of speech information and hence need to be adequately represented in the coding system.

- Characteristics of speech signal

## Slide 11: Frequency Domain Coding of Speech(Waveform Coding)

- This coding can be thought of as a method of distributing quantization noise across the signal spectrum.
- The speech signal is divided into a set of frequency components which are quantized and encoded separately.
- The number of bits used to encode each frequency component can be dynamically varied and shared among the different bands.
- Different frequency domain coding algorithms are as follows.

## Slide 12: Sub-band Coding

  - The speech signal is divides into many smaller sub-bands and encodes each sub-band separately.
  - The sub-band coding aims on controlling and distributing the quantization noise over the entire signal spectrum.
  - Speech is typically divided into 4 or 8 sub-bands by a bank of filters and then sampled at bandpass Nyquist rate and finally encoded.
  - Can be used for coding speech at bit rates in the range 9.6 kbps to 32 kbps.
  - There are various schemes available to process sub-bands but one of the better method is to do low-pass translation of sub-band signals to zero frequency value by applying a modulation scheme that is similar to single sideband modulation. By this method it helps in sampling rate reduction.

## Slide 13

- Sub-band Coding

## Slide 14: Adaptive Transform coding  (ATC)

  - Involves block transformations of window input segments of the speech waveform.(a sequence of samples).
  - Each segment is represented by a set of transform coefficients, which are separately quantized with number of bits proportional to its perceptual significance.
  - Can be used to encode speech at bit rates in the range 9.6 kbps to 20 kbps.
  - One of the most frequently used transforms:
  - The discrete cosine transforms (DCT)

## Slide 15: Vocoders

- Analyze the voice signal at transmitter.
- Transmit parameters derived from the analysis.
- Then synthesis the voice at the receiver using those parameters.
- All vocoder systems try to model the speech generation process as a dynamic system and attempt to quantify certain physical constraints of the system.
- These physical constraints are then used to provide a faint description the speech signal.
- In general much more complex than the waveform coders and achieve very high economy in transmission bit rate.
- However, less robust, and the performance tends to be talker dependent.

## Slide 16: Source Coders

- Vocal tract modeled by a linear system:
  - Voiced speech produced by a series of periodic pulses
  - Un-voiced speech produced by random noise sequence
- Transmit parameters of linear system to receiver
  - Pitch period
  - Pole frequencies of modulation filter
  - Amplitude parameters
- Synthesize (recreate) speech at receiver using modeled parameters.

## Slide 17: Source Coders

- Sound is generated and modulated into speech as it passes through vocal tract.
- To generate speech:
  - Need sequence of excitation signals
  - Need vocal tract approximation to modulate excitation signals

## Slide 18: Speech Generation Model

- Fig shows the traditional speech generation model that is the basis of all vocoding systems.

## Slide 19: Speech Generation Model

*(no text content — image/diagram slide)*

## Slide 20: Source Coders

- Vocoders
  - Channel vocoder
  - Format vocoder
  - Cepstrum voceder
  - Voice excited vocoder
- The most popular among the vocoding schemes is the
  - Linear predictive coder (LPC).

## Slide 21: Channel Vocoders

  - First analysis-synthesis system.
  - It is a frequency domain vocoder that determines the the envelope of the speech signal for a number of frequency bands and then sample, encode, and multiplex these samples with the encoded output of the other filters.
  - In addition to energy details about each frequency band, the voice/ unvoiced decision, and the pitch frequency for voiced speech are transmitted.
  - The sampling is done at every 10ms to 30ms.

## Slide 22: The Channel Vocoder (analyzer):

- The channel vocoder employs number of bandpass filters,
  - Each having a bandwidth between 100 HZ and 300 HZ.
- The output of each filter is rectified and lowpass filtered.
  - The bandwidth of the lowpass filter is selected to match the time variations in the characteristics of the vocal tract.
- For measurement of the spectral magnitudes, a voicing detector and a pitch estimator are included in the speech analysis.

## Slide 23: The Channel Vocoder (analyzer block diagram)

- Envelop detection

## Slide 24: The Channel Vocoder (synthesizer)

- At the receiver the signal samples are passed through D/A converters.
- The outputs of the D/As are multiplied by the voiced or unvoiced signal sources.
- The resulting signal are passed through bandpass filters.
- The outputs of the bandpass filters are summed to form the synthesized speech signal.

## Slide 25: The Channel Vocoder (synthesizer block diagram)

- D/A
- Converter
- Decoder
- D/A
- Converter
- Voicing
- Information
- Pitch
- period
- Pulse
- generator
- Random
- Noise
- generator
- Bandpass
- Filter
- Bandpass
- Filter
- Switch
- ∑
- Output
- speech
- From
- Channel

## Slide 26: Formant Vocoder

*(no text content — image/diagram slide)*

## Slide 27: Formant Vocoder

- Formants
- Formants are frequency peaks which have, in the spectrum, a high degree of energy. They are especially prominent in vowels.  Each formant corresponds to a resonance in the vocal tract (roughly speaking, the spectrum has a formant every 1000 Hz).
- Spectral envelope of an [i] pronounced by a male speaker. F1, F2 and F3 are the first 3 formants

## Slide 28: Formant Vocoder

  - The spectral peaks of the sound spectrum |P(f)| are called formants.
- The formant vocoder can be viewed as a type of channel vocoder that estimate the first three or four formants in a segment of speech.
- It is this information plus the pitch period that is encoded and transmitted to the receiver.

## Slide 29: Formant Vocoders

  - instead of sending samples of the power spectrum envelop, the formant vocoder attempts to transmit the position of the peaks (formants) of the spectral envelope.
  - typically it must be able to identity at least three formants for representing the speech sounds, and also control the intensities of the formants.

## Slide 30: The Formant Vocoder (analyzer block diagram):

- F3
- F2
- F1
- Pitch
- And
- V/U
- Decoder
- F3
- B3
- F2
- B2
- F1
- B1
- V/U
- F0
- Fk :The frequency of the kth formant
- Bk :The bandwidth of the kth formant
- Input
- Speech

## Slide 31: The Formant Vocoder (synthesizer block diagram):

- F3
- F2
- F1
- Excitation
- Signal
- F3
- B3
- F2
- B2
- F1
- B1
- V/U
- F0
- ∑

## Slide 32: Cepstrum Vocoders

  - Speech is composed of excitation source and vocal tract system components. In order to analyze and model the excitation and system components of the speech independently and also use that in various speech processing applications, these two components have to be separated from the speech.
  - The objective of cepstral analysis is to separate the speech into its source and system components without any a priori knowledge about source and / or system.
  - A cepstrum is the result of taking the Inverse Fourier transform (IFT) of the logarithm of the estimated spectrum of a human speech.

## Slide 33: Cepstrum Vocoders

  - separates the excitation E(w) and vocal tract spectrum V(w) by inverse Fourier transforming of the log magnitude spectrum to produce the cepstrum of the signal.
  - X(w)=E(w) V(w)
  - Log X(w)=log E(w)+ log V(w)
  - the low frequency coefficients in the cepstrum correspond to the vocal tract spectral envelope,
  - with the high frequency excitation coefficients forming a periodic pulse train at multiples of the sampling period.

## Slide 34: Cepstrum Vocoders

  - Send only vocal tract cepstral coefficients
  - At receiver,
  - Vocal tract cepstral coefficients are Fourier transformed to produce vocal tract impulse response
  - Convolving this impulse response with a synthetic excitation signal , the original speech is reconstructed.

## Slide 35: Voice-Excited Vocoders

- PCM transmission of lower frequency band of speech, combined with channel vocoding of higher frequency bands.
- A pitch signal is generated at the synthesizer by rectifying, bandpass filtering, and clipping the baseband signal,  creating Spectrally flattened signal with energy at pitch harmonics.
- eliminate the need for pitch extraction and voicing detection operations.
- designed for operation at 7.2 kbps to 9.6 kbps.

## Slide 36: Linear Predictive Coders

  - Vocal tract modeled using a discrete time linear phase filter.
  - Filter constructed from an all-pole transfer function H(z).
  - Possible to simulate sampled speech sequence by applying an appropriate excitation signal to the filter.
  - Computationally intensive, but by far the most popular among the class of low bit rate vocoders
  - It models the vocal tract as an all pole linear filter with a transfer function described by
  - Where G is the gain of the filter and bk is the filter coefficient.
  - Above two is obtained using principle of MMSE:
    - Minimize average energy in error signal that represents the difference between predicted and actual speech amplitude

## Slide 37: Linear Predictive Coders

- Speech type, pitch, filter coefficients, gain are coded into a sequence of binary digits and transmitted to receiver
- Speech synthesizer produces synthesized speech sequence

## Slide 38: Linear Predictive Coding

- The objective of LP analysis is to estimate parameters of an all-pole model of the vocal tract.
- Several methods have been devised for generating the excitation sequence for speech synthesizes.
- LPC-type of speech analysis and synthesis are differ primarily in the type of excitation signal that is generated for speech synthesis.

## Slide 39: Linear Predictive Coders

- LPC synthesizes speech using simple excitation model:
  - Single pulse per pitch period gives synthetic speech
  - Need to improve excitation signal model to create natural sounding speech
- Techniques for improving excitation model:
  - Multi-pulse Excited LPC
  - Code Excited LPC
  - Residual Excited LPC

## Slide 40: Residual Excited LP Vocoder :

- Speech quality in speech quality can be improved at the expense of a higher bit rate by computing and transmitting a residual error, as done in the case of DPCM.
- One method is that the LPC model and excitation parameters are estimated from a frame of speech.

## Slide 41: Residual Excited LP Vocoder :

- The speech is synthesized at the transmitter and subtracted from the original speech signal to form the residual error.
- The residual error is quantized, coded, and transmitted to the receiver
- At the receiver the signal is synthesized by adding the residual error to the signal generated from the model.

## Slide 42: RELP Block Diagram :

- Buffer
- And
- window
- LP
- analysis
- ∑
- Encoder
- LP
- Synthesis
- model
- S(n)
- To
- Channel
- Excitation
- parameters
- LP
- Parameters

## Slide 43: Code Excited LP

- CELP is an analysis-by-synthesis method in which the excitation sequence is selected from a codebook of zero-mean Gaussian sequence.
- The bit rate of the CELP is 4800 bps.
- Multipulse Excited and GSM codec(Self study).
