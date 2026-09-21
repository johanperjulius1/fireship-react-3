import * as React from "react";

const initialState = {
  past: [],
  present: 0,
  future: []
};

function reducer(state, action) {
  const { past, present, future } = state;

  switch (action.type) {
    case "increment":
      return {
        ...state,
        present: state.present + 1,
        past: [state.present, ...state.past],
        future: []
      }

    case "decrement":
      return {
        ...state,
        present: state.present - 1,
        past: [state.present, ...state.past],
        future: []
      }

    case "undo":
      return {
        past: past.slice(1),
        present: past[0],
        future: [present, ...future]
      }
    case "redo":
      return {
        past: [present, ...past],
        present: future[0],
        future: future.slice(1)
      }
  }
}

export default function CounterWithUndoRedo() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" })
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" })
  };
  const handleUndo = () => {
    dispatch({ type: "undo" })
  };
  const handleRedo = () => {
    dispatch({ type: "redo" })
  };

  return (
    <div>
      <h1>Counter: {state.present}</h1>
      <button className="link" onClick={handleIncrement}>
        Increment
      </button>
      <button className="link" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="link"
        onClick={handleUndo}
        disabled={!state.past.length}
      >
        Undo
      </button>
      <button
        className="link"
        onClick={handleRedo}
        disabled={!state.future.length}
      >
        Redo
      </button>
    </div>
  );
}
