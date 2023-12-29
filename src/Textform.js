import { useState } from "react";
import React from "react";
import nlp from "compromise";

function Textform() {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const handlegrammer = () => {
    const doc = nlp(inputText);
    const corrected = doc.normalize().out("text");
    setCorrectedText(corrected);
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
      <button className="btn btn-primary" onClick={handlegrammer}>
        grammer
      </button>
      <div>
        <strong>Corrected Text:</strong>
        <p>{correctedText}</p>
      </div>
    </div>
  );
}

export default Textform;
