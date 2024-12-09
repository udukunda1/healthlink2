import map from '../../../image/map.svg';


function Map() {

    return(
        <img src={map} alt='map' />
    )
}

export default Map;

// import React, { useRef, useEffect } from 'react';

// import './Map.css';

// function Map(){
//   const mapRef = useRef();


//   useEffect(() => {
//     const coordinates = { lat: -1.9595264, lng: 30.0580864};
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: coordinates,
//       zoom: 16
//     });

//     new window.google.maps.Marker({ position: coordinates, map: map });
//   }, []);

//   return (
//     <div
//       ref={mapRef}
//       className='map'
//     ></div>
//   );
// };

// export default Map;
