// Updated Experience.jsx
import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>

    <div className="job">
      <p className="job-info">
        <strong>Associate Software Engineer</strong> <a href="https://www.dubizzlelabs.com/">-- Dubizzle Labs</a>
        <span className="right">March 2025 – Present</span>
      </p>
      <ul>
        <li>Designed and implemented a dynamic load balancer in Python for monitoring RabbitMQ queues, enabling efficient GPU instance scaling across Genesis, Runpod, and Salad.</li>
        <li>Built robust, maintainable software architecture using design patterns to automate resource allocation for AI workloads powering OLX, Zameen, and Bayut.</li>
        <li>Developed and managed production-ready machine learning pipelines by conducting exploratory data analysis, data preprocessing, and model training for various AI-driven services.</li>
      </ul>
    </div>

    <div className="job">
      <p className="job-info">
        <strong>Machine Learning Engineer</strong> <a href="https://www.xavor.com/">-- Xavor Corporation</a>
        <span className="right">December 2024 – March 2025</span>
      </p>
      <ul>
        <li>Developed a multimodal pose detection pipeline using YOLO Pose and a CNN to detect sit-to-stand and lie-to-sit motions using elderly care robots and time stamping for further time series analysis.</li>
        <li>Built a person-tracking system with YOLO Pose, ByteTracker, and Azure PointCloud to track individuals in 3D space for autonomous monitoring and real-time inference.</li>
        <li>Optimized AI pipelines on an NVIDIA Jetson Orin-powered robot to deploy real-time scalable systems for healthcare applications.</li>
      </ul>
    </div>

    <div className="job">
      <p className="job-info">
        <strong>Research Assistant</strong> <a href="https://lhr.nu.edu.pk/">-- FAST NUCES, Lahore</a>
        <span className="right">March 2024 – March 2025</span>
      </p>
      <ul>
        <li>Designed a custom segmentation pipeline that improved dataset quality for model training and boosted the accuracy of deep learning models on rice disease detection by 20%.</li>
        <li>Applied image upscaling and GAN-based super-resolution to enhance satellite imagery for research applications.</li>
      </ul>
    </div>
  </section>
);

export default Experience;