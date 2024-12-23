import React, { useState } from "react";
import HappyFace from "./happy.png"; // Replace with your Happy face image path
import SadFace from "./sad.png"; // Replace with your Sad face image path
import LikeIcon from "./like.png"; // Replace with your Like icon image path

function TextToEmoji() {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    setText(input);

    if (input === "happy") {
      setEmoji(HappyFace);
    } else if (input === "like") {
      setEmoji(LikeIcon);
    } else if (input === "sad") {
      setEmoji(SadFace);
    } else {
      setEmoji("");
    }
  };

  return (
    <div className="App">
      <h1>Type a Word to Display an Emoji</h1>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type 'Happy', 'Like', or 'Sad'"
      />
      <label>
        {emoji && <img src={emoji} alt={text} style={{ height: "50px" }} />}
      </label>
    </div>
  );
}

export default TextToEmoji;
