import React, { useState } from "react";
import { Drawer } from "@mui/material";

import './SideDrawer.css';
import settings from '../../../image/settings.svg';
import settin from '../../../image/Settin.svg';
import moon from '../../../image/moon.svg';
import size from '../../../image/sidedrawer/Font Style Formatting.svg';
import language from '../../../image/sidedrawer/Google Translate.svg';
import privacy from '../../../image/sidedrawer/Privacy.svg';
import terms from '../../../image/sidedrawer/Terms and Conditions.svg';
import sun from '../../../image/Sun.svg';
import DarkMode from "../UI/DarkMode/DarkMode";
import Slide from '../slider/Slide';
import SlideContrast from "../slider/SlideContrast";
import LanguageSelector from "../LanguageSelector/LanguageSelector";


const RightDrawer = () => {
  // State to manage the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  // Content inside the drawer
  const drawerContent = (
    <div className="side-drawer">
    <h3 style={{fontSize: '17px'}}> <img src={settin} alt="health link settings" />Settings</h3>
    <h3><img src={moon} alt="settin" />Dark Mode <DarkMode /></h3>
    <h3><img src={size} alt="settin" />Font Size <Slide /></h3>
    <h3><img src={sun} alt="settin" />Brightness <SlideContrast /></h3>
    <h3><img src={language} alt="settin" />Language <LanguageSelector /></h3>
    <h3><img src={privacy} alt="settin" />Privacy Policy</h3>
    <h3><img src={terms} alt="settin" />Terms and Conditions</h3>
    </div>
  );

  return (
    <div>
      {/* Button to open the drawer */}
      {/* <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Right Drawer
      </Button> */}
      <img src={settings} style={{cursor: 'pointer'}} onClick={toggleDrawer(true)} alt='health link settings' />

      {/* Right Drawer */}
      <Drawer
        anchor="right"
        sx={{
            "& .MuiDrawer-paper": {
              width: "29.7vw", // Set width in viewport width
              borderRadius: '25px 0 0 25px',
              padding: '50px 20px',
            }
          }}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default RightDrawer;
