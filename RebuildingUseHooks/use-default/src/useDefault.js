import * as React from "react";

export default function useDefault(initialValue, defaultValue) {
    const [state, setState] = React.useState(initialValue);
    if(state === undefined || state === null){
        return [defaultValue, setState]
    }
    
    return [state, setState];
}
