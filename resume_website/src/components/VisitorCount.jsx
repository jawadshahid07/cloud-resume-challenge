// VisitorCount.jsx
import React, { useEffect, useState } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState('loading...');

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://3qvzt3t8sd.execute-api.us-east-1.amazonaws.com/Prod/visitorcount');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const count = data.visitorCount;
        setVisitorCount(count);
      } catch (error) {
        console.error('Error updating visitor count:', error);
        setVisitorCount('Error loading data');
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <p id="visitor-count">Visitor Count: <span id="visitor-count-value">{visitorCount}</span></p>
  );
};

export default VisitorCount;
