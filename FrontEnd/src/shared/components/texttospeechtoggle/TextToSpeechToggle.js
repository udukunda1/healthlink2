import React, { useContext } from "react";
import { TextToSpeechContext } from "../../context/texttospeech";
// import Button from '../UI/Button/Button';
import Button from '../UI/Button/Button';
import LanguageContext from "../../context/LanguageContext";

const TextToSpeechToggle = () => {
  const { enabled, setEnabled } = useContext(TextToSpeechContext);
  const { translations } = useContext(LanguageContext);

  return (
    <Button onClick={() => setEnabled((prev) => !prev)}>
      {enabled ? translations.disable : translations.enable}
    </Button>
  );
};

export default TextToSpeechToggle;
