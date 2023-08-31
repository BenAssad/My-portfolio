import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
