// Projects.jsx
import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>

    <div className="project">
      <p><strong>Cloud Resume Challenge</strong> <a href="https://jawadify.xyz">jawadify.xyz</a></p>
      <p className="tech"><em>AWS (S3, Lambda, DynamoDB, CloudFront), Python, JavaScript</em></p>
      <ul>
        <li>Developed a serverless resume website using AWS S3, Lambda, CloudFront, API Gateway, and DynamoDB</li>
        <li>Implemented SAM (Serverless Application Model) to maintain Infrastructure as Code (IaC)</li>
        <li>Conducted unit, integration, and end-to-end testing to ensure reliability and functionality</li>
      </ul>
    </div>

    <div className="project">
      <p><strong>Smart Invoice Extraction System</strong> <a href="https://github.com/jawadshahid07/Invoice-Data-Extraction-System">github.com/jawadshahid07/Invoice-Data-Extraction-System</a></p>
      <p className="tech"><em>Python, PyTorch, YOLOv8, Tesseract, OpenCV</em></p>
      <ul>
        <li>Trained a YOLOv8 model to detect and label key fields on annotated invoice images</li>
        <li>Used Tesseract OCR to convert detected labels into text</li>
        <li>Automated the transfer of extracted text into the correct columns in an Excel sheet, supporting multiple images per sheet and editing of existing sheets</li>
      </ul>
    </div>

    <div className="project">
      <p><strong>Bakery Web App</strong> <a href="https://github.com/jawadshahid07/A-Fresh-Tart">github.com/jawadshahid07/A-Fresh-Tart</a></p>
      <p className="tech"><em>MongoDB, Express, React, Node, Redux, Firebase, Tailwind</em></p>
      <ul>
        <li>Developed a user-friendly, MERN stack application for bakery</li>
        <li>Included user authentication, order placing, and payments</li>
        <li>Utilized Tailwind CSS for design and React Redux for state management</li>
      </ul>
    </div>

    <div className="project">
      <p><strong>Pharmacy POS System</strong> <a href="https://github.com/jawadshahid07/POS-System">github.com/jawadshahid07/POS-system</a></p>
      <p className="tech"><em>Java, Swing, JDBC, SQL</em></p>
      <ul>
        <li>Built Java POS System using Swing and JDBC with SQL</li>
        <li>Applied Design Patterns and OOP principles for scalability</li>
        <li>Developed interfaces for Sales Assistant and Staff Manager</li>
      </ul>
    </div>
  </section>
);

export default Projects;
