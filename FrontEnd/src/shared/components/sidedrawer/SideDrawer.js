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
import DarkMode from "../UI/DarkMode/DarkMode";


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
    <p> <img src={settin} alt="settin" />Settings</p>
    <p><img src={moon} alt="settin" />Dark Mode <DarkMode /></p>
    <p><img src={size} alt="settin" />Font Size</p>
    <p><img src={language} alt="settin" />Language</p>
    <p><img src={privacy} alt="settin" />Privacy Policy</p>
    <p><img src={terms} alt="settin" />Terms and Conditions</p>
    </div>
  );

  return (
    <div>
      {/* Button to open the drawer */}
      {/* <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Right Drawer
      </Button> */}
      <img src={settings} onClick={toggleDrawer(true)} alt='setting' />

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
