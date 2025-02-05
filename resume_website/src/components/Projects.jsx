// Projects.jsx
import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <p><strong>Multi-Agent Synthetic Dataset Generator</strong>  <a href="https://github.com/jawadshahid07/A-Fresh-Tart">github.com/jawadshahid07/A-Fresh-Tart</a></p>
    <ul>
      <li>Developed a multi-agent system using LangGraph that automates the generation, testing, and regeneration
of Python code, allowing the creation of synthetic datasets.</li>
      <li> Implemented a modular architecture that can integrate user-defined LLMs for Python code generation,
providing a customizable solution for automating code validation and dataset creation.</li>
    </ul>

    <p><strong>Cloud Resume Challenge</strong>  <a href="https://github.com/jawadshahid07/POS-System">github.com/jawadshahid07/POS-system</a></p>
    <ul>
      <li>Developed and hosted a serverless web application to showcase a dynamic resume, by using AWS services
like Lambda, API Gateway, and DynamoDB, resulting in a showcase of an interactive and scalable solution.</li>
      <li>Optimized the deployment process to guarantee consistent updates by implementing infrastructure as code
by using Terraform, and GitHub Actions for CI/CD.</li>
    </ul>

    <p><strong>Smart Invoice Extraction System</strong>  <a href="https://github.com/jawadshahid07/Invoice-Data-Extraction-System">github.com/jawadshahid07/Invoice-Data-Extraction-System</a></p>
    <ul>
      <li>Implemented a batch processing system for converting multiple invoice PDFs and images into structured
Excel sheets, by integrating an automated pipeline for label detection, image cropping, and text extraction.</li>
      <li>Improved data organization efficiency by enabling real-time processing of invoice data into categorized
columns across 10 invoice formats using a combination of custom-trained models and Python script.</li>
    </ul>



  </section>
);

export default Projects;
