import React from 'react';
import './Skeleton.css'; // CSS for styling
import ReactDOM from 'react-dom'; // Import ReactDOM for createPortal

const Skeleton = () => {
  const skeletonContent = (
    <div className="skeleton-container">
      {/* Hero Section Skeleton */}
      <div className="hero-skeleton">
        <div className="hero-text-skeleton skeleton"></div>
      </div>

      {/* Content Section Skeleton */}
      <div className="content-skeleton">
        <div className="content-box skeleton"></div>
        <div className="content-box skeleton"></div>
        <div className="content-box skeleton"></div>
      </div>
    </div>
  );

  // Use createPortal to render the skeleton outside its parent container
  return ReactDOM.createPortal(skeletonContent, document.body); 
};

export default Skeleton;
