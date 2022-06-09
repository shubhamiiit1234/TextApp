import './App.css';
import React, {useState} from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
   const [theme, setTheme] = useState("info");   // info is color code for light theme i.e. cyan color
   const [alert, setAlert] = useState(null);
   
   const showAlert = (type, message)=>{
     setAlert({
       type: type,
       msg: message
     })
     setTimeout(() => {
       setAlert(null)
     }, 1500);
   }

   const [btnClr, setBtnClr] = useState("info");

   const changeTheme = ()=>{
    if(theme === "info")
    {
      setTheme("dark");
      document.body.style.backgroundColor = '#212F3C';
      document.body.style.color = 'white';
      setBtnClr("dark");
      // showAlert("success", "dark theme is enabled");
    }
    else
    {
      setTheme("info");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setBtnClr("info");
      // showAlert("success", "light theme is enabled");
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Text App" about="About" changeTheme={changeTheme} theme={theme} btnClr={btnClr} />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About theme={theme}/>}/>
            <Route path="/" element={<TextForm heading="Please Enter the Text" theme={theme} btnClr={btnClr} showAlert={showAlert}/>}/>
            {/* <TextForm heading="Please Enter the Text" theme={theme} btnClr={btnClr} showAlert={showAlert}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
