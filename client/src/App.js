import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
