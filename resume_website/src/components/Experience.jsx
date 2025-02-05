// Experience.jsx
import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>
    <p className="job-info">
      <strong>AI Intern</strong> -- Xavor Corporation
      <span className="right">December 2024 - Present</span>
    </p>
    <ul>
      <li>Engineered production-ready AI pipelines for computer vision and natural language processing tasks on NVIDIA Jetson devices (Xavier and Orin) by researching model suitability, optimizing implementations, and ensuring compatibility with healthcare robots.</li>
      <li>Implemented a computer vision pipeline using MoveNet for skeletal detection and CNN for pose classification, using image processing techniques to enable accurate pose analysis for healthcare assistance.</li>
      <li>Developed a multimodal emotion classification pipeline for audio and text data by implementing advanced processing techniques (audio cleaning, noise reduction, and transcription) and utilizing specialized models.</li>
    </ul>

    <p className="job-info">
      <strong>Research Assistant</strong> -- FAST NUCES, Lahore
      <span className="right">March 2024 - Present</span>
    </p>
    <ul>
      <li>Developed a custom segmentation pipeline which enhanced dataset quality and improved model accuracy by up to 20% across various transfer learning models for rice disease detection.</li>
      <li>Utilized Super Resolution techniques such as image up-scaling and GAN-based algorithms to enhance the resolution of satellite imagery to contribute to research involving satellite data.</li>
    </ul>

    <p className="job-info">
      <strong>Intern Unity Engineer</strong> -- FRAG Games
      <span className="right">July 2024 - August 2024</span>
    </p>
    <ul>
      <li>Delivered over 8 game features ahead of deadlines, by writing modular and efficient C\# scripts within Unity.</li>
    </ul>
  </section>
);

export default Experience;
