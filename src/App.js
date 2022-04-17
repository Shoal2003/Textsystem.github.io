
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
 
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      toast("Dark Mode has been enabled");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      toast("Light mode has been enabled");
    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar title='Text system' /> */}
        <Navbar title='Text system' mode={mode} toggleMode={toggleMode} aboutText='About' />
        <div className="container">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the text to check" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}

        </div>

        <ToastContainer />
      {/* </Router> */}
      {/* <div className="container">
  <About/>
   </div>  */}

    </>
  );
}

export default App;
