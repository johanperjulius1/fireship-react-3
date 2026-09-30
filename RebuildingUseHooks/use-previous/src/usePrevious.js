import * as React from "react";

export default function usePrevious(value) {
    const ref = React.useRef(null);
   
    React.useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}

// SpeechRecognitionAlternative

// export default function usePrevious(value) {
//     const ref = React.useRef(null);
//     const previous = ref.current;
//     ref.current = value;
//     return previous;
//   }