import React from "react";
import { useChat } from "../contexts/ChatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChaList() {
  const { chat } = useChat();

  const chatItemRenderer = (item) => {
    return (
      <div className={`chat-item-container ${item.isFromMe ? "from-me" : ""}`}>
        {!item.text.includes("base64") ? (
          <div className="chat-item">{item.text}</div>
        ) : (
          <div className="chat-image-item">
            <img src={item.text} alt="chatimage" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="chat-list">
      <ScrollableFeed>{chat.map((item, i) => chatItemRenderer(item))}</ScrollableFeed>
    </div>
  );
}

export default ChaList;
