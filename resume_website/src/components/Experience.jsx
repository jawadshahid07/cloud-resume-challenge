// Experience.jsx
import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>

    <div className="job">
      <p className="job-info">
        <strong>Research Assistant</strong> <a href="https://lhr.nu.edu.pk/">-- FAST NUCES, Lahore</a>
        <span className="right">March 2024 - Present</span>
      </p>
      <ul>
        <li>Developed creative solutions to real-world problems using concepts such as ML, Deep Learning, and IoT</li>
        <li>Implemented drone-based Rice Disease Detection after working extensively with Computer Vision models</li>
        <li>Achieved a 4% accuracy increase in traditional models using image segmentation</li>
      </ul>
    </div>

    <div className="job">
      <p className="job-info">
        <strong>Unity Developer Intern</strong> <a href="https://frag-games.com/">-- Frag Games</a>
        <span className="right">July 2024 - August 2024</span>
      </p>
      <ul>
        <li>Collaborated with a team to design and develop a card-based blockchain game called Elowyn</li>
        <li>Implemented Unity and C# for game features and optimized performance</li>
        <li>Resolved bugs and integrated game logic and art to provide an enhanced user experience</li>
      </ul>
    </div>
  </section>
);

export default Experience;
