import "./App.scss"
import "./bg.jpeg"
import Navigation from "./components/Navigation.jsx"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {


  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}
export default App;
