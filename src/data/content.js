// ─────────────────────────────────────────────────────────────────────────────
// Central content file - edit copy here without touching component code.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  title: 'Ctrl + Sea',
  tagline: 'Autonomous water-quality sensing for inland waterways.',
  description:
    'An autonomous surface vehicle (ASV) designed and built at Carnegie Mellon University to perform waypoint-based survey, in-situ water-quality sensing, and discrete bottle sampling in calm inland waters.',
  github: 'https://github.com/yuqing-lin/ctrl-sea-website', // update as needed
  course: 'CMU Robotics Capstone Project',
}

// ── Requirements ─────────────────────────────────────────────────────────────
export const functionalReqs = [
  {
    id: 'WQ-1',
    title: 'In-Situ Sensing',
    description:
      'Measure and geo/time-stamp turbidity (0.1-1000 NTU), temperature (0-40 °C), and pH (0-14) continuously during survey.',
  },
  {
    id: 'SAM-1',
    title: 'Discrete Sampling',
    description:
      'Collect a discrete water sample in a sealed bottle (≥1 × 250 mL per mission) suitable for post-mission lab analysis.',
  },
  {
    id: 'NAV-1',
    title: 'Waypoint Navigation',
    description:
      'Navigate autonomously along Control-Station-provided waypoints, maintaining survey speed of 0.8-1.2 m/s in calm water.',
  },
  {
    id: 'NAV-2',
    title: 'Station-Keeping',
    description:
      'Hold position within a 2 m radius for up to 3 minutes at designated sample waypoints to enable stable bottle filling.',
  },
  {
    id: 'NAV-3',
    title: 'Obstacle Avoidance',
    description:
      'Detect and avoid static and dynamic obstacles using onboard LiDAR (effective range ~12 m) without operator intervention.',
  },
  {
    id: 'NAV-4',
    title: 'Geofence & RTH',
    description:
      'Remain within operator-defined boundaries and return to the launch/recovery point on mission completion, low battery, or operator command.',
  },
  {
    id: 'CS-1',
    title: 'Mission Planning',
    description:
      'Control Station generates coverage waypoint plans for a user-defined area, validates feasibility against endurance estimates, and uploads the plan to the ASV.',
  },
  {
    id: 'CS-2',
    title: 'Data Products',
    description:
      'Export mission data as CSV and generate spatial heatmaps associating water-quality readings with GPS position and time.',
  },
]

export const nonFunctionalReqs = [
  { label: 'Top speed', value: '≥ 3 knots in calm water' },
  { label: 'Survey endurance', value: '≥ 5,000 m² with 20% battery reserve' },
  { label: 'Estimated runtime', value: '~1.6 hours' },
  { label: 'Max wave height', value: '0.3 m (calm inland water)' },
  { label: 'Max wind speed', value: '10 knots sustained' },
  { label: 'GPS accuracy', value: '≤ 3 m horizontal' },
  { label: 'Buoyancy', value: 'Positive buoyancy at all times' },
]

// ── Subsystems ────────────────────────────────────────────────────────────────
export const subsystems = [
  {
    id: 'NAV',
    name: 'Navigation & Autonomy',
    icon: '🧭',
    description:
      'Waypoint following, geofence enforcement, LiDAR-based obstacle avoidance, station-keeping, and return-to-home logic. GPS + IMU fusion via EKF for pose estimation.',
  },
  {
    id: 'WQ',
    name: 'Water-Quality Sensing',
    icon: '💧',
    description:
      'Turbidity, temperature, and pH sensors mounted beneath the hull in a protective cage. Electronics in the forward enclosure stream geo-timestamped readings to the main compute.',
  },
  {
    id: 'SAM',
    name: 'Sample Collection',
    icon: '🧪',
    description:
      'Pump and sample bottle in the forward enclosure. At a designated waypoint the ASV station-keeps, fills the bottle, and tags the sample with GPS position, time, and a WQ snapshot.',
  },
  {
    id: 'PWR',
    name: 'Power',
    icon: '⚡',
    description:
      '12 V 50 Ah LiFePO4 battery with regulated 12 V and 5 V rails. E-stop drops propulsion while keeping compute and comms alive.',
  },
  {
    id: 'COMMS',
    name: 'Communications',
    icon: '📡',
    description:
      'Wi-Fi and/or LTE backhaul between ASV and Control Station. Onboard telemetry buffering during link loss with automatic backfill after reconnect.',
  },
  {
    id: 'CS',
    name: 'Control Station',
    icon: '🖥️',
    description:
      'Shore-side laptop application for mission planning, live map display, telemetry monitoring, operator commands, and post-mission CSV/heatmap export.',
  },
]

// ── Software layers ───────────────────────────────────────────────────────────
export const softwareLayers = [
  {
    name: 'Mission Layer',
    color: '#0891b2',
    nodes: ['Mission Manager', 'Geofence Guard', 'Return-to-Home', 'Health Supervisor'],
    description: 'Orchestrates high-level mission state, commands, and safety overrides.',
  },
  {
    name: 'Autonomy & Control',
    color: '#0e7490',
    nodes: ['Waypoint Follower', 'Station-Keep Controller', 'Obstacle Avoidance', 'Velocity Controller'],
    description: 'Converts mission goals into motion commands through cascaded controllers.',
  },
  {
    name: 'Perception & Sensing',
    color: '#155e75',
    nodes: ['GNSS/IMU Fusion (EKF)', 'Obstacle Perception (LiDAR)', 'WQ Aggregator', 'Leak Monitor'],
    description: 'State estimation, obstacle detection, and sensor data aggregation.',
  },
  {
    name: 'Hardware Abstraction',
    color: '#164e63',
    nodes: ['Thruster Driver', 'Sampler Driver', 'WQ Bus Bridge', 'Power/BMS Driver'],
    description: 'Isolates ROS nodes from physical hardware interfaces (PWM, USB, I²C).',
  },
  {
    name: 'Control Station',
    color: '#1e3a5f',
    nodes: ['Mission Planner', 'Telemetry UI', 'Alert Handler', 'CSV/Heatmap Export'],
    description: 'Shore-side processes for planning, monitoring, and data export.',
  },
]

// ── Mission modes ─────────────────────────────────────────────────────────────
export const missionModes = [
  { id: 'IDLE',       color: 'gray',   description: 'Boot, time sync, link up' },
  { id: 'PRE-DEPLOY', color: 'yellow', description: 'Plan review, calibrations, upload' },
  { id: 'SURVEY',     color: 'teal',   description: 'Follow waypoints, stream metrics, avoid obstacles' },
  { id: 'HOLD',       color: 'teal',   description: 'Station-keep for sampling stabilization (max 180 s)' },
  { id: 'SAMPLE',     color: 'teal',   description: 'Fill and store bottle, log metadata' },
  { id: 'RTH',        color: 'yellow', description: 'Return to launch/recovery point' },
  { id: 'DEGRADED',   color: 'yellow', description: 'Reduced-function operation (e.g. comms loss)' },
  { id: 'SAFE',       color: 'red',    description: 'Protective override - preempts all other modes' },
]

// ── Mission sequences (diagrams) ──────────────────────────────────────────────
export const sequences = [
  {
    title: 'Pre-Deployment',
    file: 'pre_deployment.png',
    description:
      'Operator defines the study boundary and uploads the mission plan. ASV completes boot checks and acknowledges readiness.',
  },
  {
    title: 'Station-Keep & Discrete Sampling',
    file: 'sequence_diagram_station_keep_discrete_sampling.png',
    description:
      'At a designated waypoint, the ASV enters HOLD mode, stabilizes within a 2 m radius, triggers the sampler, records a WQ snapshot, and logs sample metadata.',
  },
  {
    title: 'Boundary Breach Response',
    file: 'boundary_breach.png',
    description:
      'If the ASV approaches or crosses the geofence, the geofence guard interrupts the current goal and redirects the vehicle back inside the boundary.',
  },
  {
    title: 'Leak Detection → RTH',
    file: 'leak_rth.png',
    description:
      'Water ingress in either enclosure immediately asserts a critical fault, transitions to SAFE/RTH, and notifies the operator.',
  },
]

// ── Hardware components ───────────────────────────────────────────────────────
export const hardwareComponents = [
  { name: 'Hull / Platform',         status: 'In progress', note: 'Catamaran-style pontoon hull' },
  { name: 'T200 Thrusters × 2',      status: 'Received',    note: 'Stern-mounted, differential drive' },
  { name: 'Raspberry Pi 5 (SBC)',     status: 'Received',    note: 'Main onboard compute, ROS 2' },
  { name: 'LiDAR',                    status: 'Received',    note: 'UART interface, ~12 m range' },
  { name: 'GNSS Module',              status: 'Received',    note: 'I²C, ≤3 m horizontal accuracy' },
  { name: 'IMU',                      status: 'Received',    note: 'I²C, fused with GNSS for pose' },
  { name: 'WQ Sensor Suite',          status: 'Received',    note: 'Turbidity, temp, pH, DO, conductivity' },
  { name: '12 V 50 Ah LiFePO4',       status: 'Received',    note: '~600 Wh capacity' },
  { name: 'Electronics Enclosure',    status: 'In progress', note: 'Waterproof, center-mounted' },
  { name: 'Bottle Sampler (×5-10)',   status: 'In progress', note: '250 mL per bottle, pump + valve' },
  { name: 'LED Beacon (tri-color)',   status: 'Received',    note: 'State indicator: green/yellow/red' },
  { name: 'Comms Router (Wi-Fi/LTE)', status: 'Received',    note: 'Shore ↔ ASV backhaul' },
]

// ── Team ─────────────────────────────────────────────────────────────────────
// Replace name/role/photo with real values when available.
// photo: null → renders placeholder card; photo: 'path/to/img.jpg' → shows image.
export const team = [
  { name: 'Isaiah Weekes', photo: null },
  { name: 'Jordan Paglione', photo: null },
  { name: 'Yuqing Lin', photo: null },
]

// ── Videos ───────────────────────────────────────────────────────────────────
// src: null → renders placeholder; src: 'https://...' → embeds iframe/video.
export const videos = [
  {
    title: 'Demo A: Autonomous Survey Mission',
    caption: 'Loads a survey mission, starts autonomous navigation, completes transit and sample waypoints, and returns home.',
    src: 'https://www.youtube.com/embed/TfmNhivSrmg?rel=0&modestbranding=1&autoplay=1&mute=1&vq=hd1080',
  },
  {
    title: 'Demo B: Pause/Resume, RTH, and Abort',
    caption: 'Loads a lawnmower survey, demonstrates PAUSE/RESUME mid-mission, RTH (graceful return to home), then restarts a survey with a manual water quality sample trigger, and ABORT (immediate thrust cut, latched SAFE).',
    src: 'https://www.youtube.com/embed/2kUcKXr2vZA?rel=0&modestbranding=1&autoplay=1&mute=1&vq=hd1080',
  },
]
