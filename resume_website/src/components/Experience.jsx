import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>

    <div className="job">
      <p className="job-info">
        <strong>Associate AI & ML Engineer</strong> <a href="https://www.hytgenx.com/">-- HytGenX</a>
        <span className="right">May 2025 – Present</span>
      </p>
      <ul>
        <li>Built automation solutions using no-code tools like n8n and Make to streamline lead generation, customer support, and marketing operations for clients.</li>
        <li>Developed and deployed real-time voice agents using Realkit and Vapi for AI-driven conversations, appointment booking, and call routing across platforms.</li>
        <li>Engineered scalable MLOps and data pipelines on AWS and Azure, and created custom LangGraph-based agent workflows integrated with SQL, vector databases, and third-party APIs.</li>
      </ul>
    </div>

    <div className="job">
      <p className="job-info">
        <strong>Associate Software Engineer</strong> <a href="https://www.dubizzlelabs.com/">-- Dubizzle Labs</a>
        <span className="right">March 2025 – May 2025</span>
      </p>
      <ul>
        <li>Implemented 200+ lines of tested TypeScript code, implementing efficient MLOps algorithms, to build a product line load balancer service that monitors RabbitMQ queues and controls GPU instance scaling across Genesis and RunPod.</li>
        <li>Developed scalable software architecture using factory method design pattern to automate GPU scaling, increasing AI service availability from 80% to 95% and reducing cloud GPU costs by 35% across OLX, Zameen, and Bayut.</li>
        <li>Orchestrated production-ready machine learning pipelines using Python and SQL for data refinement and AI-driven functionalities across Dubizzle’s platforms, enhanced data accuracy by 15% through rigorous exploratory data analysis using statistical methods.</li>
      </ul>
    </div>

    <div className="job">
      <p className="job-info">
        <strong>AI Intern</strong> <a href="https://www.xavor.com/">-- Xavor Corporation</a>
        <span className="right">December 2024 – March 2025</span>
      </p>
      <ul>
        <li>Developed Python code, utilizing advanced Machine Learning algorithms and efficient data structures, for a real-time trigger detection system to recognize and timestamp sit-to-stand and lie-to-sit transitions with 99% accuracy, allowing elderly care robots to track motion patterns and using time series analysis for improved patient monitoring.</li>
        <li>Built a person-tracking system with YOLO Pose, ByteTracker, and Azure PointCloud to track individuals in 3D space for autonomous monitoring and real-time inference under 25ms.</li>
        <li>Optimized AI pipelines on NVIDIA Jetson Orin and Xavier devices, reducing inference latency by 40%, enabling real-time healthcare monitoring applications and faster responsiveness for time-sensitive patient needs.</li>
      </ul>
    </div>

    <div className="job">
      <p className="job-info">
        <strong>Research Assistant</strong> <a href="https://lhr.nu.edu.pk/">-- FAST NUCES, Lahore</a>
        <span className="right">March 2024 – March 2025</span>
      </p>
      <ul>
        <li>Designed a custom segmentation pipeline that improved dataset quality for model training and boosted the accuracy of deep learning models on rice disease detection by 20%.</li>
        <li>Demonstrated image upscaling and GAN-based super-resolution on satellite imagery using diffusion models, enhancing spatial resolution by 4× and increasing pixel density for high-precision research analysis.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
