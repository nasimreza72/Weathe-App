import "./App.scss"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {


  return (
    <div className="App" style={{background:"rgba(255, 255, 255, 0.25)"}}>
      <Navigation />
      <Main />
    </div>
  );
}
export default App;
