
import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";





function App() {
  const [Mode, setMode] = useState('dark');
  const [btnText, setBtnText] = useState("DarkMode")

  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'grey';
      document.querySelector('#box').style.backgroundColor = 'grey';
      document.querySelector('#box').style.color = 'white';
      document.body.style.color = 'white';

      showAlert("Dark Mode has benn enabled", "Success");

      setBtnText("LightMode");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      document.querySelector('#box').style.backgroundColor = 'white';
      document.querySelector('#box').style.color = 'black';
      document.body.style.color = 'black';

      showAlert("Light Mode has benn enabled", "Success");

      setBtnText("DarkMode");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>

      <Navbar logo="AbhiTextUtils" about="About Us" style={Mode} toggleMode={toggleMode} btnText={btnText} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container"  >
        <TextForm heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" style={Mode} toggleMode={toggleMode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
