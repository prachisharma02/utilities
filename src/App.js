import "./App.css";
import Navbar from "./navbar";
import Textform from "./Textform";
import About from "./About";
import Alert from "./alert";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState();
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <>
      <Navbar title="Utilities" />
      <Alert alert={alert} />

      <div className="container">
        {/* <Textform showalert={showalert} /> */}
        <About showalert={showalert} />
      </div>
    </>
  );
}

export default App;
