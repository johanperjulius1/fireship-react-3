import * as React from "react";

export default function useToggle(initialValue = true) {
    const [on, setOn] = React.useState(Boolean(initialValue));

    const handleToogle = React.useCallback((value) => {
        if (typeof value === "boolean") {
            setOn(value);
        } else {
            setOn((current) => !current);
        }
    }, [])

    return [on, handleToogle];
}