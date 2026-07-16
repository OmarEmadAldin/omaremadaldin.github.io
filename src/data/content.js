// ============================================================================
// ALL SITE CONTENT LIVES HERE.
// To update your portfolio, edit this file only — you should not need to
// touch any component file for text, project, or link changes.
// ============================================================================

export const profile = {
  name: "Omar Emad Eldin Fahmy",
  role: "Perception Engineer",
  tagline: "Building multi-sensor perception pipelines — LiDAR, camera, and radar fusion for autonomous systems.",
  location: "Cairo, Egypt",
  email: "omaremadeldinhamed@gmail.com",
  phone: "+20 111 880 8666",
  github: "https://github.com/OmarEmadAldin",
  linkedin: "https://www.linkedin.com/in/omar-emad-1582001obe",
  resumeUrl: "#", // replace with a hosted PDF link, e.g. "/Omar_Fahmy_Resume.pdf"
}

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

// Featured = the 4 flagship projects, shown large with full detail.
export const featuredProjects = [
  {
    title: "Multi-Sensor 3D Object Detection & Tracking",
    subtitle: "Camera + LiDAR + Radar Fusion — nuScenes",
    description:
      "A complete perception pipeline fusing camera, LiDAR, and radar data from nuScenes. Runs per-sensor detectors, aligns detections into a synchronized global timeline, cross-associates across sensors, and tracks objects over time with a Kalman/Extended Kalman Filter — evaluated against ground truth using standard MOT metrics.",
    highlights: [
      "Cross-sensor detection association across a synchronized global timeline",
      "Extended Kalman Filter tracking with MOT-metric evaluation vs. ground truth",
      "Diagnosed and fixed a microsecond/second timestamp mismatch in LiDAR frame matching",
    ],
    stack: ["Python", "PyTorch", "PointPillars", "EKF", "Linear Kalman", "DBSCAN", "Hungarian Algorithm"],
    github: "https://github.com/OmarEmadAldin/End_to_End_perception_pipeline_with_3d_detection_tracking",
    image: "/projects/3d_obj_tracking.gif",
  },
  {
    title: "LiDAR Obstacle Detection Pipeline",
    subtitle: "Raw Point Clouds — C++ / PCL / KITTI",
    description:
      "A real-time-capable obstacle detection pipeline for raw Velodyne LiDAR scans from KITTI, built on the Point Cloud Library. Loads .bin scans, removes the ground plane with RANSAC, clusters remaining points with a KD-Tree, fits oriented bounding boxes via PCA, and classifies objects by size.",
    highlights: [
      "RANSAC-based ground plane segmentation on raw point clouds",
      "KD-Tree Euclidean clustering + PCA-based oriented bounding boxes",
      "Renders interactively or to PNG sequences for video/GIF export",
    ],
    stack: ["C++17", "PCL", "Voxel Grid", "RANSAC", "KD-Tree", "PCA"],
    github: "https://github.com/OmarEmadAldin/LiDAR_Obstacle_DetectionPipeline",
    image: "/projects/LiDAR_Obstacle_DetectionPipeline.gif",
  },
  {
    title: "LiDAR–Camera Geometric Fusion",
    subtitle: "Calibration & Cross-Sensor Projection",
    description:
      "Single-frame projection of 3D LiDAR point clouds onto a 2D camera image using calibration and extrinsic transformation matrices, followed by per-object cropping using 2D bounding boxes — combining visual appearance with 3D geometry for every detected object, with no probabilistic estimation or time component.",
    highlights: [
      "Pure rigid-body geometric fusion: rotation + translation + perspective projection",
      "Per-object point cropping from 2D detections onto the 3D point cloud",
    ],
    stack: ["Python", "OpenCV", "NumPy", "Sensor Calibration", "KITTI dataset"],
    github: "https://github.com/OmarEmadAldin/Geometric-Fusion",
    image: "/projects/Geometric-Fusion.png",
  },
  {
    title: "SORT — From Scratch",
    subtitle: "Simple Online and Realtime Tracking",
    description:
      "A from-scratch Python implementation of SORT, linking per-frame detection boxes into consistent object tracks using a Kalman filter for motion prediction and the Hungarian algorithm on IoU for data association, benchmarked against reference implementations.",
    highlights: [
      "Hand-built Kalman filter motion model, no tracking library used",
      "Hungarian algorithm IoU-cost data association",
    ],
    stack: ["Python", "Kalman Filter", "Hungarian Algorithm", "MOT17"],
    github: "https://github.com/OmarEmadAldin/SORT_Implementation_from_scratch_with_Benchmarking",
    image: "/projects/SORT_Implementation_from_scratch_with_Benchmarking.gif",
  },
]

// Secondary = smaller supporting projects, shown as a compact grid.
// Add an `image` field (e.g. "/projects/traffic-inspector.png") to show a
// small thumbnail on the card. Leave it as null to render without one.
// IMPORTANT: paths must start with "/projects/..." — do NOT include "public"
// in the path (that folder is served from the site root automatically).
export const secondaryProjects = [
  {
    title: "MOT DeepSORT — CARLA Sim",
    description: "YOLOv8 detection + DeepSORT (Hungarian + Kalman + ReID) tracking, speed estimation, and trajectory drawing in CARLA.",
    stack: ["YOLOv8", "DeepSORT", "CARLA"],
    github: "https://github.com/OmarEmadAldin/MOT_DeepSort_CARLA_Sim",
    image: "/projects/MOT_DeepSort_CARLA_Sim.gif",
  },
  {
    title: "Time-to-Collision & AEB — CARLA Sim",
    description: "Pedestrian detection + depth-based TTC estimation triggering Autonomous Emergency Braking, mirroring Euro NCAP AEB test structure.",
    stack: ["YOLOv8", "CARLA", "AEB"],
    github: "https://github.com/OmarEmadAldin/TimeToCollision_CARLA_SIM",
    image: "/projects/TTC.gif",
  },
  {
    title: "Object Detector Comparison",
    description: "Synchronized benchmarking of 6 pretrained COCO detectors: SSD MobileNet, YOLOv5, YOLOv8, Faster R-CNN, DETR, RF-DETR.",
    stack: ["PyTorch", "COCO", "Benchmarking"],
    github: "https://github.com/OmarEmadAldin/Object_Detection_Models_Comparison",
    image: "/projects/Object_Detection_Models_Comparison.jpeg",
  },
  {
    title: "Optical Flow Comparison",
    description: "Lucas-Kanade, Horn-Schunck, and RAFT run side-by-side on the same video, compared on runtime, flow magnitude, and coverage.",
    stack: ["OpenCV", "RAFT"],
    github: "https://github.com/OmarEmadAldin/Optical_Flow_Comparison",
    image: "/projects/output_horizontal.gif",
  },
  {
    title: "BEV via Inverse Perspective Mapping",
    description: "Transforms perspective-distorted 2D images into a top-down Bird's-Eye View for metric ground-distance measurement.",
    stack: ["OpenCV", "IPM"],
    github: "https://github.com/OmarEmadAldin/BEV-with-Inverse-Perspective-Mapping-IPM",
    image: "/projects/BEV_with_IPM.gif",
  },
  {
    title: "Monocular Depth Comparison",
    description: "Comparative pipeline for MiDaS v3.1, Monodepth2, and ZoeDepth on the same video/webcam stream.",
    stack: ["MiDaS", "ZoeDepth", "Monodepth2"],
    github: "https://github.com/OmarEmadAldin/Mono_Depth_Estimation",
    image: "/projects/mono_depth_comp.gif",
  },
  {
    title: "Traffic Lights & Signs Detection",
    description: "Real-time vehicle traffic light detection and traffic sign detection in CARLA.",
    stack: ["YOLO", "Python", "CARLA"],
    github: "https://github.com/OmarEmadAldin/Traffic_Sign_det_CARLA",
    image: "/projects/Traffic_lights_signs_det.gif",
  },
  {
    title: "Football Analysis System",
    description: "Player/ball detection and tracking, K-Means jersey clustering for team ID, and optical-flow-based motion analytics.",
    stack: ["YOLOv8", "Supervision", "K-Means"],
    github: "https://github.com/OmarEmadAldin/Football_Analysis_CV",
    image: "/projects/footballAnalysis.gif",
  },
  {
    title: "Machine Learning Algorithms From Scratch",
    description: "This repo contains ML algorithms from scratch Linear Regression ,Logistic Regression ,KNN ,KMeans ,preceptron ,SVM ,Decision Tree,Random Forest ,Naive Bayes, PCA",
    stack: ["NumPy", "Matplotlib"],
    github: "https://github.com/OmarEmadAldin/Machine-Learning-Algorithms-From-Scratch",
    image: "/projects/ml_algorithms_grid.gif",
  },
]

export const experience = [
  {
    role: "Graduation Project — Grade A+",
    org: "ASU ROAR Racing Team",
    period: "2023 — 2024",
    bullets: [
      
      "Built a stereo vision system using two mono-camera from scratch to get depth-map and then used it for 6D pose estimation using YOLOv5 and Mask R-CNN. Then We applied Inverse Kinematics to achieve Vision-Based Control",
      "Designed and manufactured two cycloidal gear drives for a 6-DOF robotic manipulator. from the prototype phase tell the final manufactured gearbox.",
    ],
  },

  {
    role: "Mechatronics Engineer",
    org: "OFOQ Robotics",
    period: "June 2024 — August 2025",
    bullets: [
      "Perception engineer on a delivery robot: human & dynamic obstacle detection with MobileNet-SSD, deployed on Jetson Nano.",
      "Human following: detection + ByteTrack for stable boxes, pure pursuit (lateral) + PID (longitudinal) control from IntelRealsense camera feedback.",
      "Face detection & tracking with YOLO-face and PID-based servo control.",
      "Pose detection with background subtraction for interactive robot applications.",
      "National ID data extractor: An software product mainly introduced to lesses the time of the data extraction from the national ID card Through Pipeline consists of a combination beetween the classical image processing techniques and cutting-edge technologies",
    ],
  },
  
  {
    role: "Computer Vision — Gesture Motion Control",
    org: "Elyarmook",
    period: "June 2025 — August 2025",
    bullets: [
      "Gesture recognition with MediaPipe, deployed on Raspberry Pi 4.",
      "Raspberry Pi ↔ ESP32 communication with multithreading.",
    ],
  },
  
]

export const internships = [
  {
    role: "AI and Robotics Workshop",
    org: "ASU Autotronics Research Lab (ARL)",
    period: "Aug 2023 — Oct 2023",
    bullets: [
      "Autonomous stack on ROS2",
      "Control: kinematic bicycle model, PID, Pure Pursuit, Adaptive Pure Pursuit, Stanley, LQR, MPC.",
    ],
  },
  {
    role: "Research Intern",
    org: "Human-Centered Mechatronics Lab (HCM)",
    period: "June 2023 — Oct 2023",
    bullets: [
      "Captured motion data with QTM (Qualisys Track Manager) and preprocessed it.",
      "Used PAF, ASCII scripting, and Visual3D for biomechanical modeling Which is file automation method",
    ],
  },
]

export const education = {
  school: "Ain Shams University",
  degree: "B.Eng in Mechatronics Engineering",
  period: "Sep 2019 — June 2024",
  location: "Cairo, Egypt",
}

export const skills = {
  Languages: ["Python", "C++17", "C"],
  "Perception & ML": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "PCL"],
  Robotics: ["ROS", "ROS2", "Jetson Nano/Xavier", "Raspberry Pi", "AVR-ESP"],
  Deployment: ["CUDA", "Docker", "FastAPI", "Git/GitHub", "Linux - Ubuntu"],
}

// Optional — leave as an empty array to hide the Certifications column,
// or add entries back in the same format as before (array of strings).
export const certifications = []

export const awards = [
  "1st Position — GP Act (Swift Act Competition for Graduation Projects)",
  "5th rank at European Rover Challenge (ERC 2024)",
]
