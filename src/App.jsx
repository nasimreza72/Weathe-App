import "./App.scss"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";

function App(props) {

  const [ login, setLogin ] = useState(null)
  const [ on, setOn ] = useState(false)

  const inputCode = useRef()


  function Login () {
    setLogin(inputCode.current.value)
    setOn(true)
  }

  return (
    <div className="App" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}  >

    {on===false ?     <div>
     <h1>Welcome to Weather PRO website.</h1>
      <input type="password" ref={inputCode}  />
      <button onClick={Login}>login</button>
     </div> : null}


    {login==='15032022' ? 

    <div style={{width:"100%", height:"100vh", position:"fixed", top:"0px", background:"rgba(255, 255, 255, 0.25)"}}>
      <Navigation />
      <Main />
    </div>

    : null }

     

    </div>
  );
}
export default App;
