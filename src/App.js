import "./App.css";
import Navbar from "./navbar";
import Textform from "./Textform";
import About from "./About";
import Alert from "./alert";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
      <BrowserRouter>
        <Navbar title="Utilities" />
        <Routes>
          <Route
            exact
            path="/About"
            element={<About showalert={showalert} />}
          />
          <Route
            exact
            path="/TextForm"
            element={<Textform showalert={showalert} />}
          />
        </Routes>
        <Alert alert={alert} />
      </BrowserRouter>
    </>
  );
}

export default App;
