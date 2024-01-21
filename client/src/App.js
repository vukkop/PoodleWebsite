import "./App.css";
import Main from "./views/Main";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet";
import favicon from "../public/favicon.ico";

function App() {
  return (
    <div className="App container-fluid">
      <Helmet>
        <meta
          name="description"
          content="Poodle puppies looking for new home"
        />
        <meta
          name="keywords"
          content="Poodle, Poodles, Puppy, Puppies, Dog, Mini, Edmonton, Vancouver"
        ></meta>
        <meta name="author" content="Vukasin Koprivica"></meta>
        <meta property="og:url" content="https://www.puppypoodles.com/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Mini Poodles"></meta>
        <meta property="og:image" content={{ favicon }}></meta>
        <meta
          property="og:description"
          content="Cute Poodle puppies looking for new home"
        ></meta>
      </Helmet>
      <NavBar></NavBar>
      <Main />
    </div>
  );
}

export default App;
