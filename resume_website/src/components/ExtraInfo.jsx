// ExtraInfo.jsx
import React, {useState} from 'react';
import VisitorCount from './VisitorCount';
import './../App.css';

const ExtraInfo = () => {
  // State to track if the ExtraInfo is visible
  const [isVisible, setIsVisible] = useState(true);

  // Handler to close ExtraInfo
  const closeExtraInfo = () => {
    setIsVisible(false);
  };

  // If not visible, return null (nothing)
  if (!isVisible) {
    return null;
  }

  return (
    <div className="extra-info">
      {/* Close button */}
      <button className="close-button" onClick={closeExtraInfo}>×</button>
      <p>
        This project was made for the Cloud Resume Challenge
        <hr />
        Source code: <a href="https://github.com/jawadshahid07/cloud-resume-challenge">github.com/jawadshahid07/cloud-resume-challenge</a>
      </p>
      <VisitorCount />
    </div>
  );
};

export default ExtraInfo;
