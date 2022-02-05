import React, { useState } from "react";
import "./App.css";

var color = "Red";
var userName = "Smileys Emoji Interpreter";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "😁": "Grinning Face with Smiling Eyes",
  "😆": "Smiling Face with Open Mouth and Tightly-Closed Eyes",
  "😅": "Smiling Face with Open Mouth and Cold Sweat ",
  "😂": " Face with Tears of Joy",
  "🤣": "Rolling On The Floor Laughing",
  "😊": "Smiling Face with Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😄": "Smiling Face with Open Mouth and Smiling Eyes",
  "🙃": "Upside-Down Face",
  "😇": "Smiling Face with Halo",
  "😃": "Smiling Face with Open Mouth"
};

var emojiWeKnows = Object.keys(emojiDictionary);

export default function App() {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(event) {
    var currentEmoji = event.target.value;
    var meaning = emojiDictionary[currentEmoji];
    if (meaning === undefined) {
      setInputValue(`Sorry! we don't have ${currentEmoji} in our Database :( `);
    } else {
      setInputValue(meaning);
    }
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setInputValue(meaning);
  }

  return (
    <div className="App">
      <h1>
        Welcome To <span style={{ color }}>{userName}</span>
      </h1>
      <input placeholder="Type your emoji here..." onChange={inputHandler} />
      <div className="output">{inputValue}</div>

      {emojiWeKnows.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="displayEmoji"
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

