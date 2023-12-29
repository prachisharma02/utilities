import { useState } from "react";
import React from "react";

function Textform(props) {
  const [inputText, setInputText] = useState("");

  const handleLower = () => {
    let newtext = inputText.toLowerCase();
    setInputText(newtext);
    props.showalert("Converted to lowercase", "Success");
  };
  const handleUpper = () => {
    let newtext = inputText.toUpperCase();
    setInputText(newtext);
    props.showalert("Converted to Uppercase", "Success");
  };
  const handleonchange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <label htmlFor="floatingTextarea2" style={{ marginTop: "30px" }}>
        Comments
      </label>

      <div className="form-floating">
        <textarea
          value={inputText}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          onChange={handleonchange}
          style={{
            height: "300px",
            marginTop: "10px",
            marginBottom: "30px",
            width: "800px",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-4" onClick={handleUpper}>
        Upper
      </button>
      <button className="btn btn-primary" onClick={handleLower}>
        lower
      </button>
    </div>
  );
}

export default Textform;
