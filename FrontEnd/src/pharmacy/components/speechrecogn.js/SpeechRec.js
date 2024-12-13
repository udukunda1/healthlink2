import useSpeechRecognition from "../../../shared/hooks/speechRecHook";
import { Mic, MicOff } from "@mui/icons-material";  // Import icons


const SpeechRec = ({setWord}) => {
  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  return (
    <div>
      {hasRecognitionSupport ? (
        <div>
          {isListening ?( <MicOff className="microphone" onClick={stopListening} style={{ fontSize: 40, cursor: 'pointer' }} />):(<Mic className="microphone" onClick={startListening} style={{ fontSize: 40, cursor: 'pointer' }} />)}
          {isListening && <div className="microphone">Speak</div>}
        {/* <h2>{text}</h2> */}
        {setWord(text)}
        </div>
      ) : (
        <h1>Your browser has no speech recognition support</h1>
      )}
    </div>
  );
};

export default SpeechRec;