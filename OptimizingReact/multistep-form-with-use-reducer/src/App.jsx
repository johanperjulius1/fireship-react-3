import { useReducer } from "react";
import "./App.css"
import * as React from "react";

// const initialFormData = {
//   name: "",
//   email: "",
//   address: "",
//   city: "",
//   zipcode: ""
// };

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: ""
  }
};

export default function MultistepFormReducer() {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return {
          ...state,
          currentStep: state.currentStep + 1
        };

      case "prev":
        return {
          ...state,
          currentStep: state.currentStep - 1
        }

      case "change":
        return {
          ...state,
          formData: {
            ...state.formData,
            [action.name]: action.value
          }
        }
      case "reset":
        return initialState;
      default:
        return state;
    }
  }

  const handleNextStep = () => {
    dispatch({ type: "next" });
  };

  const handlePrevStep = () => {
    dispatch({ type: "prev" });
  };

  const handleChange = (e) => {
    console.log("handle changed was fired")
    console.log(e.target.name)
    console.log(e.target.value)

    dispatch(
      {
        type: "change",
        name: e.target.name,
        value: e.target.value
      }
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission");
    dispatch({ type: "reset" });
  };

  if (state.currentStep === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {state.currentStep} of 3</label>
          <progress value={state.currentStep} max={3} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={state.formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={state.formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="secondary" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (state.currentStep === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {state.currentStep} of 3</label>
          <progress value={state.currentStep} max={3} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={state.formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={state.formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={state.formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="secondary" type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else if (state.currentStep === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {state.currentStep} of 3</label>
          <progress value={state.currentStep} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(state.formData).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{state.formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
