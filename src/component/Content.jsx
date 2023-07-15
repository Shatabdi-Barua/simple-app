import React from "react";
import { useState } from "react";

const Content = () => {
  const [displaytext, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const textAreaValue = document.getElementById("textarea").value;
    if (!textAreaValue) return;
    setText(textAreaValue);
    document.getElementById("textarea").value = "";
  }
  return (
    <div className="container my-2">
      <label>Write in the text area</label>
      <br />
      <textarea name="textarea" id="textarea" cols="50" rows="10"></textarea>
      <button className="mx-2 btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
      <p className="h3 text-info">You write: </p>
      <p>{displaytext}</p>
    </div>
  );
};

export default Content;
