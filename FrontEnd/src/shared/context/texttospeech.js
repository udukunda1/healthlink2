import React, { createContext, useState, useEffect } from "react";

export const TextToSpeechContext = createContext();

const TextToSpeechProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(() => {
    const savedState = localStorage.getItem("textToSpeechEnabled");
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("textToSpeechEnabled", JSON.stringify(enabled));
  }, [enabled]);

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();

    const handleHover = (e) => {
      if (!JSON.parse(localStorage.getItem("textToSpeechEnabled"))) return;
      msg.text = e.target.innerText;
      e.target.style.backgroundColor = "yellow";
      window.speechSynthesis.speak(msg);
    };

    const handleLeave = (e) => {
      window.speechSynthesis.cancel();
      e.target.style.removeProperty("background-color");
    };

    // Function to attach event listeners to specific tags
    const attachListeners = (root = document) => {
      const tags = root.querySelectorAll("p, a, h1, h2, h3");
      tags.forEach((tag) => {
        if (!tag.hasHoverListener) {
          tag.addEventListener("mouseenter", handleHover);
          tag.addEventListener("mouseleave", handleLeave);
          tag.hasHoverListener = true; // Prevent duplicate listeners
        }
      });
    };

    // Initial attachment
    attachListeners();

    // Observe DOM changes and attach listeners to new elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Ensure it's an element node
              attachListeners(node);
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup function
    return () => {
      observer.disconnect();
      document.querySelectorAll("p, a, h1, h2, h3, h4, button, li").forEach((tag) => {
        tag.removeEventListener("mouseenter", handleHover);
        tag.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <TextToSpeechContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </TextToSpeechContext.Provider>
  );
};

export default TextToSpeechProvider;
