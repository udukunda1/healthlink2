import React, { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translations = require(`../../translation/${language}.json`)

  return (
    <LanguageContext.Provider value={{ translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;