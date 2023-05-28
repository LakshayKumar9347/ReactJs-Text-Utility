import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ReactMain from './components/ReactMain'
// import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title='TextUtils' about='AboutUtils' />
      <ReactMain logo={logo} />
      {/* <TextForm heading="Text Form By Props" /> */}
      {/* <TextForm /> */}
    <About />
    </>
  )
}
export default App;
