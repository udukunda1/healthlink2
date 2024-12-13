import React from 'react';
import './HomeLoader.css';
import logobig from '../../../../image/logo big.svg';
import LoadingSpinner from '../loadingspinner/LoadingSpinner';
import ReactDOM from 'react-dom'; // Import ReactDOM for createPortal

function HomeLoader() {
  // JSX content for HomeLoader that will be rendered inside the body
  const loaderContent = (
    <div className='home-loader'>
      <img src={logobig} alt='logobig' />
      <div><LoadingSpinner /></div>
    </div>
  );

  // Render the HomeLoader component outside the container using createPortal
  return ReactDOM.createPortal(loaderContent, document.body);
}

export default HomeLoader;
