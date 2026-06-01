
import React, {useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  const [show, setShow] = useState(false)
  function handleClose(){
    setShow(false)
  }
  return (
    <>
        <button style={{margin:'10px'}} onClick={() => setShow(true)}>Show Modal</button>
        <Modal show={show} onClose={handleClose} />        
    </>
  )
}

export default App
