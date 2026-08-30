# Chapter 2 Cellular Systems-Cellular Concepts

## Slide 1: Cellular Systems (Cellular Concepts)

- The cellular concept was a major breakthrough in solving the problem of spectral congestion and user capacity. It offered very high capacity in a limited spectrum allocation without any major technological changes.
- The cellular concept has the following system level ideas
  - Replacing a single, high power transmitter with many low power transmitters, each providing coverage to only a small area.
  - Neighboring cells are assigned different groups of channels in order to minimize interference.
  - The same set of channels is then reused at different geographical locations.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 2: Cell Footprint

- The actual radio coverage of a cell is known as the cell footprint.
  - Irregular cell structure and irregular placing of the transmitter may be acceptable in the initial system design. However as traffic grows, where new cells and channels need to be added, it may lead to inability to reuse frequencies because of co-channel interference.
  - For systematic cell planning, a regular shape is assumed for the footprint.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 3: Cell Footprint

  - Coverage contour should be circular. However it is impractical because it provides ambiguous areas with either multiple or no coverage.
  - Due to economic reasons, the hexagon has been chosen due to its maximum area coverage.
  - Hence, a conventional cellular layout is often defined by a uniform grid of regular hexagons.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 4: Cellular Concepts

- When designing a cellular mobile communication system, it is important to provide good coverage and services in a high user-density area.
- Reuse can be done once the total interference from all users in the cells using the same frequency (co-channel cell) for transmission suffers from sufficient attenuation. Factors need to be considered include:
  - Geographical separation (path loss)
  - Shadowing effect
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 5

- Frequency Reuse or planning
- Each cellular base station is allocated a group of radio channels within a small geographic area called a cell.
- Neighboring cells are assigned different channel groups.
- By limiting the coverage area to within the boundary of the cell, the  channel groups may be reused to cover different cells.
- Keep interference levels within tolerable limits.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 6

- Consider a cellular system which has a total of S duplex channels.
- Each cell is allocated a group of k channels,           .
- The S channels are divided among N cells.
- The total number of available radio channels
- The N cells which use the complete set of channels is called cluster.
- The cluster can be repeated M times within the system. The total number of channels, C, is used as a measure of capacity
- The capacity is directly proportional to the number of replication M.
- The cluster size, N, is typically equal to 4, 7, or 12.
- Small N is desirable to maximize capacity.
- The frequency reuse factor is given by
- For small N we have to consider the co-channel interference.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Frequency Reuse or planning

## Slide 7: Terminology

- Cluster size : The N cells which collectively use the complete set of available frequency is called the cluster size.
- Co-channel cell : The set of cells using the same set of frequencies as the target cell.
- Interference tier : A set of co-channel cells at the same distance from the reference cell is called an interference tier. The set of closest co-channel cells is call the first tier. There is always 6 co-channel cells in the first tier.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 8

- Hexagonal geometry has
  - exactly six equidistance neighbors
  - the lines joining the centers of any cell and each of its neighbors are separated by multiples of 60 degrees.
- Only certain cluster sizes and cell layout are possible.
- The number of cells per cluster, N, can only have values which satisfy
- Co-channel neighbors of a particular cell, ex, i=3 and j=2.
- Co-ordinates for hexagonal cellular geometry
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 9: Designing a cellular system

- The cluster size must satisfy: N = i2 + ij + j2 where i, j are non-negative integers.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 10: Designing a cellular system

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 11: Designing a cellular system

- We see that the nearest cells with the same channel group A (Called Co-Channel Cells) can be located by:
- Moving perpendicular to any of the 6 surfaces of the original cell and passing over i = 4 cells then rotating 60° counter-clock wise and moving along j = 2 cells to reach all adjacent co-channel cells (RED Arrows in the above figure),
- Moving perpendicular to one of the surfaces of the original cell and passing over j = 2 cells then rotating 60° clock wise and moving along i = 4 cells to reach all adjacent co-channel cells (BLUEArrows in the above figure).
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 12: Designing a cellular system

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 13

- Channel Assignment Strategies
- Frequency reuse scheme
  - increases capacity
  - minimize interference
- Channel assignment strategy
  - fixed channel assignment
  - dynamic channel assignment
- Fixed channel assignment
  - each cell is allocated a predetermined set of voice channel
  - any new call attempt can only be served by the unused channels
  - the call will be blocked if all channels in that cell are occupied
- Dynamic channel assignment
  - channels are not allocated to cells permanently.
  - allocate channels based on request.
  - reduce the likelihood of blocking, increase capacity.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 14

- Handoff Strategies
- When a mobile moves into a different cell while a conversation is in progress, the MSC automatically transfers the call to a new channel belonging to the new base station.
- Handoff operation
  - identifying a new base station
  - re-allocating the voice and control channels with the new base station.
- Handoff Threshold
  - Minimum usable signal for acceptable voice quality (-90dBm to -100dBm)
  - Handoff margin                                                cannot be too large or too small.
  - If         is too large, unnecessary handoffs burden the MSC
  - If         is too small, there may be insufficient time to complete handoff before a call is lost.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 15

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 16

- Handoff must ensure that the drop in the measured signal is not due to momentary fading and that the mobile is actually moving away from the serving base station.
- Running average measurement of signal strength should be optimized so that unnecessary handoffs are avoided.
  - Depends on the speed at which the vehicle is moving.
  - For Steep short term average, the hand off should be made quickly
  - The speed can be estimated from the statistics of the received short-term fading signal at the base station
- Dwell time: the time over which a call may be maintained within a cell without handoff.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Handoff Strategies

## Slide 17

- Handoff measurement
  - In first generation analog cellular systems,  signal strength measurements are made by the base station and supervised by the MSC.
  - In second generation systems (TDMA), handoff decisions are mobile assisted, called mobile assisted handoff (MAHO)
- Intersystem handoff: If a mobile moves from one cellular system to a different cellular system controlled by a different MSC.
- Handoff requests is much important than handling a new call.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Handoff Strategies

## Slide 18

- Practical Handoff Consideration
- Different type of users
  - High speed users need frequent handoff during a call.
  - Low speed users may never need a handoff during a call.
- Microcells to provide capacity, the MSC can become burdened if high speed users are constantly being passed between very small cells.
- Minimize handoff intervention
  - handle the simultaneous traffic of high speed and low speed users.
- Large and small cells can be located at a single location (umbrella cell)
  - different antenna height
  - different power level
- Cell dragging problem: pedestrian users provide a very strong signal to the base station (due to LOS)
  - The user may travel deep within a neighboring cell
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 19

- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Practical Handoff Consideration

## Slide 20

- Handoff for first generation analog cellular systems
  - 10 secs handoff time
  - is in the order of 6 dB to 12 dB
- Handoff for second generation cellular systems, e.g., GSM
  - 1 to 2 seconds handoff time
  - mobile assists handoff (MAHO)
  - is between 0 dB and 6 dB
  - Handoff decisions based on signal strength, co-channel interference, and adjacent channel interference.
- IS-95 CDMA spread spectrum cellular system
  - Mobiles share the channel in every cell.
  - No physical change of channel during handoff
  - MSC decides the base station with the best receiving signal as the service station
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Practical Handoff Consideration

## Slide 21: Handover indicator

- Each BS constantly monitors the signal strengths of all of its reverse voice channels to determine the relative location of each mobile user with respect to the BS. This information is forwarded to the MSC who makes decisions regarding handover.
- Mobile assisted handover (MAHO) : The mobile station measures the received power from surrounding BSs and continually reports the results of these measurements to the serving BS.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 22: Prioritizing Handover

- Dropped call is considered a more serious event than call blocking. Channel assignment schemes therefore must give priority to handover requests.
- A fraction of the total available channels in a cell is reserved only for handover requests. However, this reduces the total carried traffic. Dynamic allocation can improve this.
- Queuing of handover requests is another method to decrease the probability of forced termination of a call due to a lack of available channel. The time span over which a handover is usually required leaves room for queuing handover request.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 23: Practical handover

- A hard handover does “break before make”, ie. The old channel connection is broken before the new allocated channel connection is setup. This obviously can cause call dropping.
- In soft handover, we do “make before break”, ie. The new channel connection is established before the old channel connection is released. This is realized in CDMA where also BS diversity is used to improve boundary condition.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 24: Quick review: Decibels

- S = Signal power in Watts
- Power of a signal in decibels (dBW) is Psignal = 10 log10(S)
- Remember dB is used for ratios (like S/N)
- dBW is used for Watts
- dBm = dB for power in milliwatts = 10 log10(S x 103)
- dBm = 10 log10(S) + 10 log10(103) = dBW + 30
- -90 dBm = 10 log10(S x 103)
- 10-9 = S x 103
- S = 10-12 Watts = 10-9 milliwatts
- -90 dBm = -120 dBW
- Signal-to-noise ratio:
- N = Noise power in Watts
- S/N = 10 log10(S/N) dB (unitless raio)
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 25

- Interference and System Capacity
- Sources of interference
  - another mobile in the same cell
  - a call in progress in the neighboring cell
  - other base stations operating in the same frequency band
  - noncellular system leaks energy into the cellular frequency band
- Two major cellular interference
  - co-channel interference
  - adjacent channel interference
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 26

- Co-channel Interference and System Capacity
- Frequency reuse - there are several cells that use the same set of frequencies
  - co-channel cells
- To reduce co-channel interference, co-channel cell must be separated by a minimum distance.
- When the size of the cell is approximately the same
  - co-channel interference is independent of the transmitted power
  - co-channel interference is a function of
    - R: Radius of the cell
    - D: distance to the center of the nearest co-channel cell
- Increasing the ratio Q=D/R,  the interference is reduced.
- Q is called the co-channel reuse ratio
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 27

- For a hexagonal geometry
- A small value of Q provides large capacity
- A large value of Q improves the transmission quality - smaller level of co-channel interference
- A tradeoff must be made between these two objectives
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 28

- Let      be the number of co-channel interfering cells. The signal-to-interference ratio (SIR) for a mobile receiver can be expressed as
- S: the desired signal power
- : interference power caused by the ith interfering co-channel cell base station
- The average received power at a distance d from the transmitting antenna is approximated by
- or
    - do : known received power reference point - typically 100 m or 1 km for outdoor systems and 1 m for indoor systems
- n is the path loss exponent which ranges between 2 and 4.

## Slide 29

- When the transmission power of each base station is equal, SIR for a mobile can be approximated as
- Consider only the first layer of interfering cells
- Example: AMPS requires that SIR be greater than 18dB
  - N should be at least 6.49 for n=4.
  - Minimum cluster size is 7
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 30

- For hexagonal geometry with 7-cell cluster, with the mobile unit being at the cell boundary, the signal-to-interference ratio for the worst case can be approximated as
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 31

- Adjacent Channel Interference
- Adjacent channel interference: interference from adjacent in frequency to the desired signal.
  - Imperfect receiver filters allow nearby frequencies to leak into the passband
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
- Adjacent channel interference can be minimized through careful filtering and channel assignment.
- Keep the frequency separation between each channel in a given cell as large as possible.

## Slide 32

- Consider that there are 2 mobile stations (MS) transmitting at equal powers, but one is nearer to the base station (BS) compared to the other. The BS will receive more power from the nearer MS and this makes the farther MS difficult to understand. As we know, the signal of one MS is the noise for another MS and vice-versa. So the Signal-to-noise ratio (SNR) for the farther MS is much lower. If the nearer MS transmits a signal that is orders of magnitude higher than the farther MS then the SNR for farther MS may be below detectability threshold and it would seem that the farther MS is not at all transmitting. This situation is called "near-far problem" and is less pronounced in GSM than CDMA-based systems as the MS transmit at different frequencies and timeslots in case of GSM.To overcome this problem, a power control mechanism is used so as closer MSs are commanded to use less power so that the SNR for all MSs at the BS is roughly the same.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 33

- Power Control for Reducing Interference
- Ensure each mobile transmits the smallest power necessary to maintain a good quality link on the reverse channel
  - long battery life
  - increase SIR
  - solve the near-far problem
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 34

- Trunking and Grade of Service
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 35

- Trunking and Grade of Service
- Erlangs: One Erlangs represents the amount of traffic density carried by a channel that is completely occupied.
  - Ex: A radio channel that is occupied for 30 minutes during an hour carries 0.5 Erlangs of traffic.
- Grade of Service (GOS): The likelihood that a call is blocked.
- Each user generates a traffic intensity of       Erlangs given by
- H: average duration of a call.
- : average number of call requests per unit time
- For a system containing U users and an unspecified number of channels, the total offered traffic intensity A, is given by
- For C channel trunking system, the traffic intensity,      is given as
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 36

- Improving Capacity in Cellular Systems
- Methods for improving capacity in cellular systems
  - Cell Splitting: subdividing a congested cell into smaller cells.
  - Sectoring: directional antennas to control the interference and frequency reuse.
  - Coverage zone : Distributing the coverage of a cell and extends the cell boundary to hard-to-reach place.
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 37

- Cell Splitting
- Split congested cell into smaller cells.
  - Preserve frequency reuse plan.
  - Reduce transmission power.
- microcell
- Reduce R to R/2
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 38

- Illustration of cell splitting within a 3 km by 3 km square
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 39

- Transmission power reduction from       to
- Examining the receiving power at the new and old cell boundary
- If we take n = 4 and set the received power equal to each other
- The transmit power must be reduced by 12 dB in order to fill in the original coverage area.
- Problem: if only part of the cells are splited
  - Different cell sizes will exist simultaneously
- Handoff issues - high speed and low speed traffic can be simultaneously accommodated
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 40

- Sectoring
- Decrease the co-channel interference and keep the cell radius R unchanged
  - Replacing single omni-directional antenna by several directional antennas
  - Radiating within a specified sector
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 41

- Interference Reduction
- position of the mobile
- interference cells
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering

## Slide 42

- Microcell Zone Concept
- Antennas are placed at the outer edges of the cell
- Any channel may be assigned to any zone by the base station
- Mobile is served by the zone with the strongest signal.
- Handoff within a cell
  - No channel re-assignment
  - Switch the channel to a different zone site
- Reduce interference
  - Low power transmitters are employed
- Tribhuvan University
- Institute of Engineering
- Suramya Sharma Dahal (SSD), Asso. Prof
- Electronics and Communication Engineering
