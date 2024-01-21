import "./App.css";
import Main from "./views/Main";
import NavBar from "./components/NavBar";
import { Helmet } from "react-helmet";
import favicon from "../public/favicon.ico";

function App() {
  return (
    <div className="App container-fluid">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cute Mini Poodle Puppies - PuppyPoodles.com</title>
        <meta
          name="description"
          content="Find adorable Poodle puppies looking for new homes. Our Mini Poodles are playful and well-trained, perfect for families."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Poodle, Poodles, Puppy, Puppies, Dog, M, Edmonton, Vancouver"
        />

        {/* Author */}
        <meta name="author" content="Vukasin Koprivica" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Cute Mini Poodle Puppies - PuppyPoodles.com"
        />
        <meta
          property="og:description"
          content="Find adorable Poodle puppies looking for new homes. Our Mini Poodles are playful and well-trained, perfect for families."
        />
        <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" />
        <meta property="og:url" content="https://www.puppypoodles.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Puppy Poodles" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="twitter:title"
          content="Cute Mini Poodle Puppies - PuppyPoodles.com"
        />
        <meta
          name="twitter:description"
          content="Find adorable Poodle puppies looking for new homes. Our Mini Poodles are playful and well-trained, perfect for families."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/favicon.ico" />

        {/* Viewport Settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.puppypoodles.com/" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="Your Google Site Verification Code"
        />

        {/* Additional Custom Meta Tags */}
        {/* Add any additional meta tags that are relevant to your content and SEO strategy */}
      </Helmet>

      <NavBar></NavBar>
      <Main />
    </div>
  );
}

export default App;
