import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Textform from "./Textform";
import About from "./About";

function App() {
  return (
    <>
      <Navbar title="Utilities" />
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
