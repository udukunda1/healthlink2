import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 50,
    label: '',
  },
  {
    value: 100,
    label: '',
  },
];

export default function Slide() {
  // Retrieve saved font size value from localStorage or default to 0 (Small)
  const savedValue = localStorage.getItem('fontSizeValue') || 50;
  const [val, setVal] = React.useState(Number(savedValue));

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  // Get label based on the slider value
  const getLabel = (value) => {
    switch (value) {
      case 0:
        return 'Small';
      case 50:
        return 'Medium';
      case 100:
        return 'Large';
      default:
        return '';
    }
  };

  // Adjust font size based on the slider value
  const getFontSize = (value) => {
    switch (value) {
      case 0:
        return '11px';  // Small font size
      case 50:
        return '14.29px';  // Medium font size
      case 100:
        return '17px';  // Large font size
      default:
        return '14.29px';  // Default font size
    }
  };

  // Apply the font size directly to the body element and save it to localStorage
  React.useEffect(() => {
    const fontSize = getFontSize(val);
    document.body.style.fontSize = fontSize;
    localStorage.setItem('fontSizeValue', val); // Persist the font size setting in localStorage
  }, [val]);  // Runs whenever `val` changes

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        marks={marks}
        step={50}
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
