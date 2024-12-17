import React, { useContext } from "react";
import { TextToSpeechContext } from "../../context/texttospeech"

const TextToSpeechToggle = () => {
  const { enabled, setEnabled } = useContext(TextToSpeechContext);

  return (
    <button onClick={() => setEnabled((prev) => !prev)}>
      {enabled ? "Disable Text-to-Speech" : "Enable Text-to-Speech"}
    </button>
  );
};

export default TextToSpeechToggle;
