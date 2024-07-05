// Projects.jsx
import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <p><strong>Smart Invoice Extraction System</strong>  <a href="https://github.com/jawadshahid07/Invoice-Data-Extraction-System">github.com/jawadshahid07/Invoice-Data-Extraction-System</a></p>
    <ul>
      <li>Technologies used: Python, PyTorch, YOLOv8, Tesseract, OpenCV</li>
      <li>Trained a YOLOv8 model to detect and label key fields on annotated invoice images</li>
      <li>Used Tesseract OCR to convert detected labels into text</li>
      <li>Automated the transfer of extracted text into the correct columns in an Excel sheet, supporting multiple images per sheet and editing of existing sheets</li>
    </ul>

    <p><strong>Pharmacy POS System</strong>  <a href="https://github.com/jawadshahid07/POS-System">github.com/jawadshahid07/POS-system</a></p>
    <ul>
      <li>Technologies used: Java, Swing, JDBC, SQL</li>
      <li>Built Java POS System using Swing and JDBC with SQL</li>
      <li>Applied Design Patterns and OOP principles for scalability</li>
      <li>Developed interfaces for Sales Assistant and Staff Manager</li>
    </ul>

    <p><strong>Bakery Web App</strong>  <a href="https://github.com/jawadshahid07/A-Fresh-Tart">github.com/jawadshahid07/A-Fresh-Tart</a></p>
    <ul>
      <li>Technologies used: MongoDB, Express, React, Node, Redux, Firebase, Tailwind</li>
      <li>Developed a user-friendly, MERN stack application for bakery</li>
      <li>Included user authentication, order placing, and payments</li>
      <li>Utilized Tailwind CSS for design and React Redux for state management</li>
    </ul>

    <p><strong>Selenium UI Test Automation Framework</strong>  <a href="https://github.com/jawadshahid07/OrangeHRM-Automation">github.com/jawadshahid07/OrangeHRM-Automation</a></p>
    <ul>
      <li>Technologies used: Selenium, Java, TestNG</li>
      <li>Developed Selenium framework in Java with Maven and TestNG</li>
      <li>Implemented Page Object Model for end-to-end testing</li>
      <li>Integrated Extent Reports and Jenkins for reporting and CI/CD</li>
    </ul>
  </section>
);

export default Projects;
