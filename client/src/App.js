import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Puppies from "./views/Puppies";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App container-fluid">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/puppies" element={<Puppies />} />
      </Routes>
    </div>
  );
}

export default App;
