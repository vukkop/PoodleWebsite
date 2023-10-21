import "./App.css";
import Main from "./views/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App container-fluid">
      <NavBar></NavBar>
      <Main />
    </div>
  );
}

export default App;
