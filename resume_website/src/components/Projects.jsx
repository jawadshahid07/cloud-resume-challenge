import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>

    <div className="project">
      <p><strong>Multi-Agent Synthetic Dataset Generator</strong> <a href="https://datasynth.site">datasynth.site</a></p>
      <ul>
        <li>Orchestrated a multi-agent system with Python and LangGraph that automates the creation, testing, code review, and regeneration of Python code, enabling synthetic dataset generation at 10× speed.</li>
        <li>Engineered an adaptive agentic framework using LangChain, Hugging Face, and FastAPI, achieving 95% accuracy in structured code generation workflows.</li>
      </ul>
    </div>

    <div className="project">
      <p><strong>Cloud Resume Challenge</strong> <a href="https://jawadify.xyz">jawadify.xyz</a></p>
      <ul>
        <li>Constructed a serverless resume web application using AWS Lambda, API Gateway, and DynamoDB, achieving 99.99% uptime through CloudFront distribution and scalable backend integration.</li>
        <li>Streamlined infrastructure with Terraform and GitHub Actions, reducing deployment errors by 30% and enabling reproducible environment provisioning.</li>
      </ul>
    </div>

    <div className="project">
      <p><strong>Smart Invoice Extraction System</strong> <a href="https://github.com/jawadshahid07/Invoice-Data-Extraction-System">github.com/jawadshahid07/Invoice-Data-Extraction-System</a></p>
      <ul>
        <li>Implemented a batch processing system to convert 100+ invoices/day into structured Excel files using AI-powered pipelines with YOLOv8, Tesseract OCR, and OpenCV.</li>
        <li>Reduced per-invoice processing time to 30 seconds by automating label detection, text extraction, and layout parsing across 10+ invoice formats.</li>
      </ul>
    </div>
  </section>
);

export default Projects;
