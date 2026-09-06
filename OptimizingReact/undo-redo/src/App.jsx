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
        present: state.present + 1
      }

    case "decrement":
      return {
        ...state,
        present: state.present - 1
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
  const handleUndo = () => { };
  const handleRedo = () => { };

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
