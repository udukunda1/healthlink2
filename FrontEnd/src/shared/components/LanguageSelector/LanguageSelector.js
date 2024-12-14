import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import LanguageContext from '../../context/LanguageContext';

const CustomSelect = styled(Select)(({ theme }) => ({
  color: '#1FCEBF', // Font color of the selected text
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1FCEBF', // Default border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1FCEBF', // Border color on hover
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#1FCEBF', // Border color when focused
  },
}));

export default function LanguageSelector() {
  const [lang, setLang] = React.useState('en');
  const { setLanguage } = React.useContext(LanguageContext);

  // Retrieve language from localStorage when the component mounts
  React.useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLang(savedLang);
      setLanguage(savedLang); // Optionally update the context as well
    }
  }, [setLang, setLanguage]);

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    setLanguage(selectedLang);
    // Save the selected language to localStorage
    localStorage.setItem('language', selectedLang);
    console.log(`Language selected: ${selectedLang}`);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <CustomSelect
          value={lang}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Language Selector' }}
          sx={{ height: 30, minWidth: 142, marginLeft: '0.5rem' }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="rw">Kinyarwanda</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </CustomSelect>
      </FormControl>
    </div>
  );
}
