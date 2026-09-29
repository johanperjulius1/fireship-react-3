import * as React from "react";

export default function useToggle(initialValue) {
    const [on, setOn] = React.useState(Boolean(initialValue));

    function toggle(value) {
        if (typeof value === "boolean") {
            setOn(value);
        } else {
            setOn((current) => !current);
        }
    }

    return [on, toggle];
}