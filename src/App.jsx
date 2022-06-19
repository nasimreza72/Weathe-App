import "./App.scss";
import Navigation from "./components/Navigation.jsx";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App-wrapper">
        <Main />
      </div>
    </div>
  );
}

export default App;
