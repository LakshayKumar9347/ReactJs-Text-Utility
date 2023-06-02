import React, { useState } from 'react'
//! adding sound effect when user click on button
import soundEffect from './success.mp3'
import errorOccur from './error.mp3'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import ReactMain from './components/ReactMain'
// import About from './components/About';

function App() {
  let playSound
  function playEffects(success) 
  {
    if (success === true) {
      playSound = new Audio(`${soundEffect}`)
    }
    if (success === false) {
      playSound = new Audio(`${errorOccur}`)
    }
    playSound.pause();
    playSound.currentTime = 0;
    playSound.play()
  }

  const [prop, setProp] = useState('light'); //! ==set color property in navbar
  const [alert, setAlert] = useState(null); //! ==set alert property in alert
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
      setTimeout(() => {
        setAlert(null)
      }, 2300);
    console.log(alert);
  }

  const toggleMode = () => {
    if (prop === 'light') {
      setProp('dark')
      document.body.style.backgroundColor = "rgb(13, 17, 20) "
      document.body.style.color = " whitesmoke"
      showAlert("Dark mode has enable", "success")
      playEffects(true)
    }
    if (prop === 'dark') {
      setProp('light')
      document.body.style.backgroundColor = " whitesmoke"
      document.body.style.color = " rgb(32, 38, 43)"
      showAlert("Light mode has enable", "success")
      playEffects(true)
    }
  }
  return (
    <>
      <Navbar about='About' mode={toggleMode} prop={prop} />
      <Alert alert={alert} />
      {/* <ReactMain logo={logo} /> */}
      <TextForm alert={showAlert} prop={prop} audio={playEffects} />
      {/* <About /> */}
    </>
  )
}
export default App;
