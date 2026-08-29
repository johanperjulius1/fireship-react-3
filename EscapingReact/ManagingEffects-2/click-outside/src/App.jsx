import "./App.css"
import * as React from "react";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef(null);

  const handleOpenModal = () => {
    setIsOpen(true)
  };

  const handleCloseModal = () => {
    setIsOpen(false)
  };


  React.useEffect(() => {
    if (isOpen) {
      const handleClick = (e) => {
        if (modalRef && !modalRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("pointerdown", handleClick)
      return () => document.removeEventListener("pointerdown", handleClick)
    }


  }, [isOpen])
  // use An effect
  // effect should depend in isOpen
  // Effect should set up event listener, and the clean up shall remove it

  // Effect should set up an event handler function
  // There should be a ref to the modal


  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={modalRef} >
          <button onClick={handleCloseModal}>{"X"}</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
}
