import React from 'react'
import './HomeLoader.css';
import logobig from '../../../../image/logo big.svg';
import LoadingSpinner from '../loadingspinner/LoadingSpinner';

function HomeLoader() {
  return (
    <div className='home-loader'>
        <img src={logobig} alt='logobig' />
        <div><LoadingSpinner /></div>
    </div>
  )
}

export default HomeLoader