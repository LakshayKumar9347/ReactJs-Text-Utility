import React, { useState } from 'react'
import audioFile from './audio.mp3'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
// import ReactMain from './components/ReactMain'
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [prop, setProp] = useState('light'); //todo ==set color property in navbar
  const [alert, setAlert] = useState(null); //todo ==set alert property in alert

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (prop === 'light') {
      setProp('dark')
      document.body.style.backgroundColor = "rgb(13, 17, 20) "
      document.body.style.color = " whitesmoke"
      showAlert("Dark mode has enable", "success")
    }
    if (prop === 'dark') {
      setProp('light')
      
    document.body.style.backgroundColor = " whitesmoke"
      document.body.style.color = " rgb(32, 38, 43)"
      showAlert("Light mode has enable", "success")
    }
  }
  setTimeout(() => {
    setAlert(null)
  }, 3000);
  return (
    <>
      <Navbar title='TextUtils' about='AboutUtils' mode={toggleMode} prop={prop} />
      <Alert alert={alert} />
      {/* <ReactMain logo={logo} /> */}
      <TextForm alert={showAlert} audio={audioFile} prop={prop} />
      {/* <About /> */}
    </>
  )
}
export default App;
