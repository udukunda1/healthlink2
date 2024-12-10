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
          {isListening ?( <MicOff onClick={stopListening} style={{ fontSize: 40, cursor: 'pointer' }} />):(<Mic onClick={startListening} style={{ fontSize: 40, cursor: 'pointer' }} />)}
          {isListening && <div>Speak</div>}
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