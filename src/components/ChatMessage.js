import React from "react";
import { BsFillPersonFill, BsChatDots } from "react-icons/bs";

const ChatMessage = (props) => {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
      {props.user ? (
        <span className="message-right">
          <span className="message-text">{props.message}</span>
          <BsFillPersonFill className="message-icon" />
        </span>
      ) : (
        <span className="message-left">
          <BsChatDots className="message-icon" />
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
};

export default ChatMessage;
