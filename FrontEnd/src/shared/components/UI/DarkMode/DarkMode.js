import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    // Check if a theme is saved in localStorage and apply it
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.querySelector("body").setAttribute("data-theme", savedTheme);
            const isDarkMode = savedTheme === "dark";
            document.querySelector("#darkmode-toggle").checked = isDarkMode;
        }
    }, []);

    // Set the dark theme
    function setDarkMode() {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark"); // Save the theme to localStorage
    }

    // Set the light theme
    function setLightMode() {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light"); // Save the theme to localStorage
    }

    // Toggle between dark and light themes
    function toggleTheme(e) {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun className="sun" />
                <Moon className="moon" />
            </label>
        </div>
    );
};

export default DarkMode;
