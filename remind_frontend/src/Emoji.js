import React from "react";
import './Emoji.css';

const Emoji = () => {
  
  function emojiType(type){
    console.log(`${type}`);
  }

  return (
    <div>   
        <body>
            <p id="EmojiLetter">오늘 기분 어떠신가요?</p>
            <div className="Emoji" >
                <img  src="img/smile.svg" alt="smile" onClick={() => emojiType(1)} />
                <img  src="img/angry.svg" alt="angry" onClick={() => emojiType(2)}  />
                <img  src="img/cry.svg" alt="cry" onClick={() => emojiType(3)} />
                <img  src="img/blue.svg" alt="blue" onClick={() => emojiType(4)} />
            </div>
        </body>

        <footer className="foot">
            <img src="img/downIcon.png" alt="down"/>
        </footer>

    </div>  
  );
};

export default Emoji;