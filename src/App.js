 import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
// import ReactMain from './components/ReactMain'
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [prop, setProp] = useState('light');

  const toggleMode= ()=>{
if (prop === 'light') {
    setProp('dark')
}
if (prop === 'dark') {
    setProp('light')
}
  }
  setTimeout(() => {
     let alert
  }, 3000);
  
  return (
    <>
      <Navbar title='TextUtils' about='AboutUtils'  mode={toggleMode} prop={prop}/>
     
     
   <Alert alert=" Boss, Lakshay"/>
 
      {/* <ReactMain logo={logo} /> */}
      <TextForm />
    {/* <About /> */}
    </>
  )
}
export default App;
