# Chapter 1 Introduction

## Slide 1: Wireless CommunicationBEX 751IV/I

- Prepared by:
- Suramya Sharma Dahal (SSD)

## Slide 2: Subject Outline

*(no text content — image/diagram slide)*

## Slide 3: Subject Outline and References

*(no text content — image/diagram slide)*

## Slide 4: Wireless Communications

- Satellite
- TV
- Cordless phone
- Cellular phone
- Wireless LAN, WIFI, WIMAX
- Bluetooth
- Ultra Wide Band
- Wireless Laser
- Microwave

## Slide 5: Frequency For Radio Transmission

- Twisted pair and copper wires use frequencies upto several hundred kHz.
- Coaxial cable use frequencies upto several hundred MHz.
- Fiber optics are used for frequency ranges of several hundred THz. Normally represented in terms of wavelength i.e., 1500μm or 1350 μm (infrared)

## Slide 6: Frequency For Radio Transmission

- Radio propagation starts at several kHz, the very low frequency (VLF) range. These are very long waves.
- Low frequency (LF) range are used by submarines, because they can penetrate water and can follow the earth’s surface.
- Medium Frequency (MF) and High Frequency (HF) ranges are typically for transmission of hundreds of radio stations either as AM between 520kHz and 1605.5 kHz, as Short Wave (SW) between 5.8MHz and 26.1MHz, or as FM between 88MHz and 108MHz.

## Slide 7: Frequency For Radio Transmission

- Short waves are typically used for (amature) radio transmission around the world enabled by reflection at the ionosphere.
- As we move to higher frequencies, the TV stations follow.
- Conventional analog TV is transmitted in ranges of 174-230 MHz and 470-790 MHz using a very high frequency(VHF) and ultra high frequency bands(UHF).
- In this range digital audio broadcasting (DAB) takes place as well (223-230 MHz and 1452-1472 MHz) and digital TV is planned (470-862 MHz), reusing some of the old frequencies from analog TV.
- UHF is also used for mobile phones with analog technology (450-465 MHz), the digital GSM (890-960 MHz, 1710-1880 MHz), digital cordless telephones following DECT standard (1880-1900 MHz) and many more.
- VHF and especially UHF allow for small antennas and relatively reliable connections for mobile telephony.

## Slide 8: Frequency For Radio Transmission

- Super high frequencies (SHF) are typically used for directed microwave links (approx. 2-40 GHz) and fixed satellite services in the C-band (4 and 6 GHz), ku-band (11 and 14 GHz), or ka-band (19 and 29 GHz).
- Some systems are planned in the extremely high frequecy (EHF) range which comes close to infrared. All radio frequencies are regulated in order to avoid interference.
- The next step into higher frequencies involves optical transmission.

## Slide 9: Europe Standards

*(no text content — image/diagram slide)*

## Slide 10: Japan Standards

*(no text content — image/diagram slide)*

## Slide 11: North American Major Standards

*(no text content — image/diagram slide)*

## Slide 12: Basic concepts

- Simplex, half-duplex, and full duplex

## Slide 13: Full-Duplex Division

- In Full-Duplex Systems two separate channels are required for simultaneous transmission in each direction
  - FDD (Freq division duplex)
  - TDD (Time division duplex
- Frequency division duplex
  - Provides simultaneous radio transmission channels for the subscriber and the base station, so that they both may transmit while simultaneously receiving signals from one another.
- Reverse channel
- Forward channel
- Fc
- Fc + 45 Mhz
- An Example of freq Division duplex

> **Notes:** The channel from Base to Mobile is a forward channel, and from Mobile to base a reverse channel.

## Slide 14: Time  division duplex
Provides simultaneous radio transmission channels for the subscriber and the base station, so that they both may transmit while simultaneously receiving signals from one another. 
However a single radio channel is shared in time , so that a portion of the time is used from the base station to mobile, and the remaining time is used to transmit from the mobile to the base station. 
TDD is possible only if digital transmission and digital modulation is used
Sensitive to timing.

- Full-Duplex Division

> **Notes:** The channel from Base to Mobile is a forward channel, and from Mobile to base a reverse channel.

## Slide 15: Basic concepts

*(no text content — image/diagram slide)*

## Slide 16: Cordless Telephones

- Characterized by
  - Low mobility (in terms of range and speed)
  - Low power consumption
  - Two-way wireless voice communication
  - High circuit quality
  - Low cost equipment
  - No handoffs between base units
- Appeared as analog devices
- Digital devices appeared later with CT2, DECT standards in Europe and ISM band technologies in USA

## Slide 17: Cellular Telephony

- Characterized by
  - High mobility provision
  - Wide-range
  - Two-way tetherless voice communication
  - Handoff and roaming support
  - Integrated with sophisticated public switched telephone network (PSTN)
  - High transmit power requires at the handsets (~2W)

## Slide 18: Cellular Telephony Systems

- Mobile users and handsets
  - Very complex circuitry and design
- Base stations
  - Provides gateway functionality between wireless and wireline links
- Mobile switching centers
  - Connect cellular system to the terrestrial telephone network

## Slide 19: Cellular Telephony - Architecture

*(no text content — image/diagram slide)*

## Slide 20: Cellular system

- Each cell has a base station (BS), providing the radio interface to the mobile station (MS).
- A sophisticated switching technique called a handover enables a call to proceed uninterrupted across cell boundaries.
- All the BS’s are connected to a mobile switching center (MSC) which is responsible for connection users to the public switched telephone network (PSTN).
- Control channels transmit and receive data messages that carry call initiation and service requests, and are monitored by mobiles when they do not have a call in progress. ~5% of total available channels.

## Slide 21: Cellular system

- Communication between the BS and the mobiles is defined by a standard common air interface that specifies 4 different physical channels
  - Forward (Downlink) voice/data channel : BS to MS
  - Reverse (Uplink) voice/data channel : MS to BS
  - Forward (Downlink) control channel : BS to MS
  - Reverse (Uplink) control channel : MS to BS
- A MS contains a transceiver, an antenna and control circuitry. A BS consists of several transmitters and receivers.

## Slide 22: Telephone Call Made To A Mobile User

- IncomingTelephone Call to Mobile X
- 3, 7
- PSTN
- Mobile X
- Mobile Switching Center
- 2, 6
- 5
- 4
- Step 1
- Base Stations

## Slide 23: Brief Outline of Cellular Process: Telephone Call Placed to a Mobile User

- Step 1 – The incoming telephone call to Mobile X is received at the MSC.
- Step 2 – The MSC dispatches the request to all base stations in the cellular system.
- Step 3 – All the base stations broadcast the Mobile Identification Number (MIN), telephone number of Mobile X, as a paging message over the FCC throughout the cellular system.
- Step 4 – The mobile receives the paging message sent by the base station it monitors and responds by identifying itself over the reverse control channel (RCC).

## Slide 24: Brief Outline of Cellular Process: Telephone Call Placed to a Mobile Uses (Cont’d)

- Step 5 – The base station relays the acknowledgement sent by the mobile and informs the MSC of the handshake.
- Step 6 – The MSC instructs the base station to move the call to an available voice channel within the cell.
- Step 7 – The base station signals the mobile to change frequencies to an unused forward and reverse voice channel pair. At the point another data message (alert) is transmitted over the forward voice channel (FVC) to instruct the mobile to ring.
- Now the call is in progress. The MSC adjusts the transmitted power of the mobile and changes the channel of the mobile end and base stations in order to maintain call quality. This is called handoff.

## Slide 25

- Timing Diagram when a call  is  made by a Landline User to a Mobile

## Slide 26: Telephone call initiated by the mobile

- Telephone Call Placed by Mobile X
- PSTN
- Mobile Switching Center
- 2
- 1
- 3

## Slide 27: Telephone call initiated by the mobile (Cont’d)

- Step 1 – When a mobile originates a call, it sends the base station its telephone number Mobile Identification Number (MIN), electronic serial number (ESN), and telephone number of called party.  It also transmits a station class mark (SCM) which indicates what the maximum power level is for the particular user.
- Step 2 – The cell base station receives the data and sends it to the MSC.
- Step 3 – The MSC validates the request, makes connection to the called party through the PSTN and validates the base station and mobile user to move to an unused forward and reverse channel pair to allow the conversation to begin.

## Slide 28

- Timing Diagram when a call  is  made by a Mobile user to a Landline User

## Slide 29: Cellular Networks

- First Generation cellular system
- Analog FM scheme for speech transmission.
- Individual calls use different frequencies and share the available spectrum through FDMA.
    - AMPS in America and Australia
    - Advanced Mobile Phone System (AMPS) uses 25 MHz band in each uplink (824 to 849 MHz) and downlink (869 to 894 MHz).
    - AMPS uses a channel spacing of 30 kHz with  total capacity of 832 channels (416 pairs per carrier)
    - Voice Traffic
    - FDMA/FDD multiple access
    - ETACS In Europe
    - Europe Total Access Communication System (ETACS) with a 25 MHz band in each uplink (890 to 915 MHz) and downlink (935 to 960 MHz).
    - ETACS uses a channel spacing of 25 kHz, with total capacity of 1000 channels.
    - NNT in Japan
    - Nippon Telephone and Telegraph (NNT) system employs a 15 MHz band in the uplink (925 to 940 MHz), and downlink (870 to 855 MHz), with a channle spacing of 25 kHz.
    - NTT system was modified to enhance its capacity from 600 to 2400 channels. This was achieved by decreasing the channel sapcing from 25 kHz to 6.25 kHz.

## Slide 30: Cellular Networks

- Second Generation (2G)
- Digital Systems
- Digital Modulation
- TDMA/FDD and CDMA/FDD multiple access
  - GSM in Europe
  - Channel time in TDMA is partitioned into frames.
  - Each frame consists of eight time-slots.
  - Each slot is of 0.57 ms duration.
  - Each user transmits periodically in every eighth time slot and receives in the corresponding time slot.
  - The modulation scheme used is Gaussian Minimum Shift Keying (GMSK)
  - IS-54 in North America
  - Frequency domain
  - Channel spacing is 30 kHz.
  - Modulation scheme is Differential quadrature phase shift keying  (DQPSK) with channel rate of 48.6 kbps.
  - Time domain
  - TDMA frame consists of six time supporting three full-rate users or six half-rate users, each slot having a duration of approximately 6.67 ms.

## Slide 31: Cellular Networks

  - PDC in Japan
  - TDMA frame consists of three slots multiplexed onto each carrier.
  - Frequency domain
  - Channel spacing is 25 kHz.
  - Modulation scheme is Differential quadrature phase shift keying  (DQPSK).
  - IS-95 in North America
  - IS-95 is a CDMA based standard.
  - Share common channel
  - Frequency band (824-849 MHz) for uplink and downlink (869-894 MHz)

## Slide 32: 2G Technologies


|  | cdmaOne (IS-95) | GSM, DCS-1900 | IS-54/IS-136PDC |
| --- | --- | --- | --- |
| Uplink Frequencies (MHz) | 824-849 (Cellular)
1850-1910 (US PCS) | 890-915 MHz (Europe)1850-1910 (US PCS) | 800 MHz, 1500 Mhz (Japan)
1850-1910 (US PCS) |
| Downlink Frequencies | 869-894 MHz (US Cellular)1930-1990 MHz (US PCS) | 935-960  (Europe)
1930-1990 (US PCS) | 869-894 MHz (Cellular)1930-1990 (US PCS)
800 MHz, 1500 MHz (Japan) |
| Duplexing | FDD | FDD | FDD |
| Multiple Access | CDMA | TDMA | TDMA |
| Modulation | BPSK with Quadrature Spreading | GMSK with BT=0.3 | DQPSK |
| Carrier Seperation | 1.25 MHz | 200 KHz | 30 KHz (IS-136)(25 KHz PDC) |
| Channel Data Rate | 1.2288 Mchips/sec | 270.833 Kbps | 48.6 Kbps (IS-136)42 Kbps (PDC) |
| Voice Channels per carrier | 64 | 8 | 3 |
| Speech Coding | CELP at 13KbpsEVRC at 8Kbps | RPE-LTP at 13 Kbps | VSELP at 7.95 Kbps |


## Slide 33: 2G and Data

- 2G is developed for voice communications
- You can send data over 2G channels by using modem
- Provides data rates in the order of ~9.6 Kbps
- Increased data rates are requires for internet application
- This requires evolution towards new systems: 2.5 G

## Slide 34: 2.5 Technologies

*(no text content — image/diagram slide)*

## Slide 35: 3G Systems

- Goals
  - Voice and Data Transmission
    - Simultanous voice and data access
  - Multi-megabit Internet access
    - Interactive web sessions
  - Voice-activated calls
  - Multimedia Content
    - Live music

## Slide 36: 3G Systems

- ITU formulated a plan to implement a global frequency band in the 2000 MHz range that would support a single, ubiquitous wireless communication standard for all countries throughout the world.
- The worldwide user community remains split between GSM/IS-136/PDC and CDMA.

## Slide 37: 3G Systems

- Evolution of Systems
    - CDMA system evolved to CDMA2000(IMT-2000)
        - CDMA2000-1xRTT: Upto 307 Kbps
        - CDMA2000-1xEV:
        - CDMA2000-1xEVDO: greater than 2.4 Mbps
        - CDMA2000-1xEVDV: 144 Kbps datarate
    - GSM, IS-136 and PDC evolved to W-CDMA (Wideband CDMA) (also called UMTS)
        - Up to 2.048 Mbps data-rates
        - Future systems 8Mbps
        - Expected to be fully deployed by 2010-2015
        - Assures backward compatibility.

## Slide 38: Upgrade Paths for 2G Technologies

- IS-136PDC
- GSM
- IS-95
- IS-95B
- HSCSD
- GPRS
- EDGE
- W-CDMA
- EDGE
- TD-SCDMA
- cdma200-1xRTT
- cdma2000-1xEV,DV,DO
- cdma200-3xRTT
- 2G
- 2.5G
- 3G
