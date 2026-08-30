# Chapter 8 GSM system

## Slide 1: GSM system

- Global System for Mobile Communications (GSM) introduced in 1991 was developed to solve the fragmentation problems of the first cellular systems in Europe.
- GSM standards was set by ETSI (European Telecommunication Standards Institute)
- Services
  - Telephone services
  - Data services
  - Short message paging
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 2: GSM system

- System Architecture : three major subsystems
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- EIR

## Slide 3: Radio Subsystem (Base Station Subsystem BSS):

- Mobile stations (MS), Base Transceiver Station (BTS) and the Base Station Controller (BSC)
- The mobile station contains IMEI (International mobile equipment identity)
- The IMSI (International mobile subscriber identity) is stored in the subscriber identity module (SIM), the HLR, VLR database
- The IMSI is an unique identity which is used internationally and used within the network to identify the mobile subscribers.
- Provides and manages radio transmission paths between the MS and MSC.
- One BSC controls up to several hundred BTSs.
- BSC performs handover for MS under the control of same BSC.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 4: Network and Switching Subsystem (NSS)

- MSCs, Visitor Location Register (VLR), Home Location Register (HLR), Authentication Center (AUC) and Equipment Identity Register (EIR).
- Switching of GSM calls between external networks and the BSCs.
  - HLR : contains subscriber information (International Mobile Subscriber Identity -IMSI) and location information for each user who resides in the same city as the MSC.
  - VLR : temporarily stores the IMSI and customer information for each roaming subscriber who is visiting the coverage area of a particular MSC. Once a roaming mobile is logged in the VLR, the MSC sends the necessary information to the visiting subscriber’s HLR so that calls to the roaming mobile can be appropriately routed over the PSTN by the roaming user’s HLR.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 5: Network and Switching Subsystem (NSS)

  - AUC : Strongly protected database which handles the authentication and encryption keys for every single subscriber in the HLR and VLR.
  - EIR : When mobile equipment is stolen or lost the owner can typically contact their local operator with a request that it should be blocked. If the local operator possesses an Equipment Identity Register (EIR), it then will put the device IMEI(pressing *#06#) into it, and can optionally communicate this to the Central Equipment Identity Register (CEIR) which blacklists the device in all other operator switches that use the CEIR.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 6: Operation Support Subsystem (OSS)

- Support the operation and maintenance of GSM and allows system engineers to monitor, diagnose and troubleshoot all aspects of the GSM system.
- Interacts with the other GSM subsystems.
- Charging and billing.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 7: Interface

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 8

*(no text content — image/diagram slide)*

## Slide 9

- The frequency band for uplink (reverse) is 890-915MHz, downlink (forward) is 935-960MHz.
- The bandwidth for the GSM system is 25MHz, which provides 125 carriers uplink/downlink each having a bandwidth of 200 kHz. The ARFCN (Absolute radio frequency channel numbers) denotes a forward and reverse channel pair which is separated in frequency by 45 MHz.
- In practical implementations, a guard band of 100kHz is provided at the upper and lower end of the GSM spectrum, and only 124 (duplex) channels are implemented.
- There are a total of eight channels per carrier. Every eighth timeslot on a TDMA channel, the user transmits or receives his information.
- A second frequency band from 1710-1785 MHz and 1805-1880 MHz (three times as much as primary 900MHz) are also specified in 1990, a total of 374 duplex channels – DCS 1800
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Frequency domain

## Slide 10: Time domain

- RF carrier channel is time division multiple accessed by users at different locations within a cell site.
- Frame duration is 4.615ms, and each frame consists of 8 time-slots.
- Each of the time-slot is a traffic channel having time duration 0.577ms .
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 11: Multiframe

- 26 frames (traffic or speech): Traffic CHannel (TCH), Slow Associated Control CHannel (SACCH), Fast Associated Control CHannel (FACCH).
- 51 frames (control) : Broadcast Common Control (BCC), Stand Alone Dedicated Control Channels,..
- Superframe : 51 traffic multiframes or 26 control multiframes.
- Hyperframe : 2048 superframes (3 hrs 28 min 52.76 s), to support encryption with high security and frequency hopping.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 12: Timeslot and Frame structure

- 1 super high frame = 2048 super frame = 2715648 TDMA frame
- 1 super frame = 1326 TDMA frame（6.12s）
- 0
- 1
- 25
- 24
- 50
- 49
- 1
- 0
- 1 multiplex frame = 26 TDMA frames（120ms）
- 1 multiplex frame = 51 TDMA frame
- 0
- 1
- 7
- 6
- 5
- 4
- 3
- 2
- 1 TDMA frame = 8 timeslot（120/26 = 4.615ms）
- BCCH
- CCCH
- SDCH
- SACCH/TCH
- FACCH
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 13: Physical Channel & Logical Channel

- Physical Channel : It is a particular time slot in a particular radio channel specified by ARFCN.
- Logical Channel : are determined by information carried within the particular physical channel. GSM logical channels are divided into two types. E.g, TCHs and control channels.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 14: Channel Type

- channel
- TCH
- CCH
- Voice CH
- Data CH
- FR Voice Traffic Channel (TCH/FS)
- HR Traffic Channel (TCH/HS)
- BCH
- FCCH (down)
- SCH (down)
- BCCH (down)
- CCCH
- RACH (up)
- AGCH (down)
- PCH (down)
- DCCH
- SDCCH
- FACCH
- SACCH
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 15: Traffic Channel (TCH)

- Traffic channels carry digitally encoded user speech or user data. Have identical functions and formats on both the forward and reverse link.
- Full rate : user data is contained within one TS per frame.
- Full rate traffic channels at a net bit rate of 22.8 kb/s
- Full rate traffic channels digitize speech/data at (2.4,4.8 and 9.6 kb/s)
- Half rate : user data is mapped onto the same time slot, but is sent in alternate frames.
- Half rate traffic channels at a net bit rate of 11.4 kb/s
- Half rate traffic channels dizitize speech/data at (2.4,4.8 and 6.5 kb/s)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 16: Traffic or speech multiframe

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 17: Control multiframe

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 18: Control (Signaling) Channels

- Broadcast Channel (BCH)
- Common Control CHannel (CCCH)
- Dedicated Control CHannel (DCCH)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 19: Broadcast control channel(BCH)

- Broadcast channel (BCH) The BCH channels are used, by the base station, to provide the mobile station with the sufficient information it needs to synchronize with the network. Three different types of BCHs can be distinguished:
  - Broadcast control channel (BCCH)
    - gives to the mobile station the parameters needed in order to identify and access the network.
    - Broadcast cell and network information(cell and network identity)
    - List of channels in use
  - Frequency correction channel (FCCH)
    - Occupies TS0 of first frame
    - Repeated every 10th frame within a control channel multiframe
    - Synchronization of local oscillator (radio frequency) to base station oscillator.
  - Synchronization channel (SCH)
    - Broadcast in TS0 immediately following a FCCH frame.
    - Allows for frame synchronization
    - Base station issues timing advancement commands.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 20: Common control channel (CCCH)

- Help to establish the calls from the mobile station or the network. Occupies TS0 of every control frame not used by BCH or the Idle Frame. Three different types of CCCH can be defined:
- Paging channel (PCH)
  - Provides paging signals from base to mobiles.
  - Notifies specific mobile of incoming call
- Random access channel (RACH)
  - Uplink channel
  - Used by mobiles to acknowledge page from PCH
  - Used by mobiles to originate a call
- Access grant channel (AGCH)
  - It is used, by the base station, to inform the mobile station about which channel it should use. This channel is the answer of a base station to a RACH from the mobile station
  - Specifies time slot, radio channel and dedicated control channel.
  - AGCH is final CCCH message before mobile is moved off the control channel.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 21: Dedicated control channel (DCCH)

- Bi-directional channels with same format and function on uplink and downlink.
- May exist in any time slot and on any radio channel except TS0 of the control radio channel.
- Stand-alone dedicated control channel (SDCCH)
  - Carries signaling data following the connection of the mobile with BS.
  - Intermediate and temporary channel for mobiles while waiting for the BS to allocate a TCH channel.
  - Ensures that mobile and base remains connected during authentication and resource allocation.
  - Maybe assigned their own physical channel or may occupy TS0 of the BCH if there is low demand for BCH or CCCH traffic.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 22: Dedicated control channel (DCCH)Associated Control Channel

- Slow associated control channel (SACCH)
  - Always associated with a traffic channel
  - On downlink the SACCH carries power control and timing advance instruction
  - On uplink the SACCH carriers signal strength and quality information
  - SACCH is allocated every 13th frame of a traffic channel.
- Fast associated control channel (FACCH)
  - Carries urgent messages to the mobile, for example handover.
  - FACCH gains access by stealing frames from TCH (e.g. data transmission slot are stolen).
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 23

*(no text content — image/diagram slide)*

## Slide 24: Time Slot Bursts

- Time slot data bursts take on one of the 5 formats according to the logical channel.
- A normal burst consists of 148 bits
- Guard time of 8.25 bits to avoid frame overlap.
- Two batched of 57 bits are information bits
- 26 training bits for equalization.
- Two stealing bits for FACCH
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 25: Time Slot Bursts

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 26: Speech coding

- The GSM speech coder is based on the Residually Excited Linear Predictor (RELP)
- Enhanced by a long term predictor (LTP)
- The coder provides 260 speech codec bits for each 20ms, ie. The speech codec bit rate is 13 kbps.
- 40% average voice activity exploited by a discontinuous transmission mode. A voice activity detector (VAD) is used in the speech coder – off the transmitter for power saving.
- Half rate codec works at 6.5 kbps.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 27: Channel coding – data channels

- Full rate 22.8kbps :
  - The output bits of the speech coder are ordered into groups for error protection, based upon their significance in contributing to speech quality. Out of the total 260 bits in a frame,
  - The most important 50 bits, called type Ia bits, have 3 parity check (CRC) bits added to them.
  - The next 132 bits along with the first 53 are reordered and appended by 4 trailing zero bits, thus providing  a data block of 189 bits. This block is then encoded for error protection using a rate ½ convolution encoder with constraint length K=5.
  - The least important 78 bits do not have any error protection.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 28: Channel coding – data channels

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 29: Modulation & Interleaving

- Modulation
  - 0.3 GMSK.
  - The channel data rate of GSM is 270.833333 kbps
- Interleaving
  - To minimize the effect of sudden fades on the received data, the total of 456 encoded bits within each 20 ms speech frame or control message frame are broken into eight 57 bit sub-blocks. These 8 sub-blocks which make up a single speech frame are spread over eight consecutive TCH time slots.
  - If a burst is lost due to interference or fading, interleaved data will help to spread the effect over a few error-correction-frames. Hopefully channel coding ensures that enough bits will still be received correctly.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 30: Frequency hopping

- Under normal conditions, each data burst belonging to a particular physical channel is transmitted using the same carrier frequency.
- If users in a particular cell have severe multipath problems, the cell may be defined as a hopping cell by the network operator.
- Frequency hopping is carried out on a frame-by-frame basis, thus hopping occurs at a maximum rate of 216.7 hops per second (1/0.004615 – frame rate). As many as 64 different channels may be used before a hopping sequence is repeated.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 31: Others

- – Apparent bandwidth efficiency
  - GSM bit rate = 270.83 kbps, bandwidth = 200kHz
  - Bandwidth efficiency = 1.354 bs/Hz
- – The speech codec rate for each time slot = 456b/20ms (=22.8kbps).
- – Each voice channel actually allocated for 270.83/8 =33.854kbps.
- – Number of bits/slot = 33.854x4.615 = 156.25 bits (148+8.25 guard time)
- – For each TDMA slot in each frame, 114 bits are transmitted, and only 24 data frames per 26 frames are transmitting, therefore the vocoder output rate = 114/0.004615 x 24/26 = 22.8kbps
- – However, of the 114 data bits in a slot, only 65 are raw speech codec bits
  - Raw data rate = 22.8*65/114=13 kbps
  - 65 bits in 20ms = 13 kbps
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
