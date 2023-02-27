import React, { useState } from "react";
import { analyze } from "../utils";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hi, May i know your name?",
    },
  ]);

  const [text,setText]=useState('')


  const onSend = ()=>{
    let list = [...messages,{message:text,user:true}]

    if(list.length>2){
      const reply=analyze(text)
      list=[...list,{message:reply}]
    }

    else{
      list=[
        ...list,
        {
          message:`Hi,${text}`
        },
        {
          message: `How can i help you.?`
        }
      ]
    }
    setMessages(list)
    setText("")
    setTimeout(()=>{
      document.querySelector('#copyright').scrollIntoView();
    })
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="
          alt="logo"
          width={200}
          height={200}
        />
        <h2 className="text-primary">Chatbot</h2>
      </div>

      <div className="chat-message">
        {messages.length > 0 &&
          messages.map((data,index) => {
            return (
              <div key={index}>
                <ChatMessage {...data} />
              </div>
            );
          })}

        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="text"
            value={text}
            onChange={(event)=>setText(event.target.value)}
          />
          <button className="btn btn-primary ms-3" onClick={onSend}>Send</button>
        </div>
        <div id="copyright" className="mt-3">
          Copyrights reserverd KALAI VANAN
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
