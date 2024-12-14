import React, { useContext } from "react";
import LanguageContext from "../../../shared/context/LanguageContext";

const HomePage = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div>
      <h1>{translations.welcome}</h1>
      <p>{translations.description}</p>
    </div>
  );
};

export default HomePage;
