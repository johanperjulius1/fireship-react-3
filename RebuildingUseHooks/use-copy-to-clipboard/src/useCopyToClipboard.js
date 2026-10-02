
// en custom hook är någon typ av logik ovanpå bashookarna

// 1. Remember what was copied
// 2. Create the function that copies text
// 3. Copy the text
// 4. Remember the text that was copied
// 5. Return both things

import * as React from "react";

function oldSchoolCopy(text) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

export default function useCopyToClipboard() {
    const [state, setState] = React.useState(null);
  
    const handleCopyToText = React.useCallback((value) => {
      const handleCopy = async () => {
        try {
          if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(value);
            setState(value);
          } else {
            throw new Error("writeText not supported");
          }
        } catch (e) {
          oldSchoolCopy(value);
          setState(value);
        }
      };
  
      handleCopy();
    }, []);
  
    return [state, handleCopyToText];
  }