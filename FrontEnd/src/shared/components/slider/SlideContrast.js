import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SlideContrast({sidedrawer, skeleton}) {
  // Retrieve saved font size value from localStorage or default to 0 (Small)
  const savedValue = localStorage.getItem('contrastValue') || '100';
  const [val, setVal] = React.useState(Number(savedValue));

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  // Get label based on the slider value
  const getLabel = (value) => {
      return `${value}%`;
  };

  // Adjust font size based on the slider value
  const getContrastVal = (value) => {
    return `${20 + 0.8 + value}`;
  };

  // Apply the font size directly to the body element and save it to localStorage
  React.useEffect(() => {
    const contrast = getContrastVal(val);
    if(sidedrawer !== ''){
      document.querySelector('.MuiDrawer-paper').style.filter = `brightness(${contrast}%)`;
    }

    document.getElementById('root').style.filter = `brightness(${contrast}%)`;
    document.querySelector('.navbar').style.filter = `brightness(${contrast}%)`;
    document.querySelector('.favourite-icon').style.filter = `brightness(${contrast}%)`;
    document.querySelector('.mymodal').style.filter = `brightness(${contrast}%)`;
    localStorage.setItem('contrastValue', val); // Persist the font size setting in localStorage
  }, [val, sidedrawer]);  // Runs whenever `val` changes

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        // marks={marks}
        step={1}
        value={val}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        onChange={handleChange}
        valueLabelFormat={getLabel}
        sx={{ color: '#1FCEBF' }}
      />
    </Box>
  );
}
