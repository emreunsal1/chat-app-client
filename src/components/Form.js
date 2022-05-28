import React, { useState } from "react";
import { useChat } from "../contexts/ChatContext";
import { useLoading } from "../contexts/LoadingContext";
import { sendMessage } from "../socketApi";

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function Form() {
  const { setChat } = useChat();
  const { handleLoading } = useLoading();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    setChat((prev) => [...prev, { text, isFromMe: true }]);
    sendMessage(text);
    setText("");
  };

  const fileChangeHandler = async (e) => {
    const file = e.target.files[0];
    handleLoading(true);
    const base64 = await fileToBase64(file);
    handleLoading(false);
    sendMessage(base64);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input className="message" value={text} onChange={(e) => setText(e.target.value)} />
          <label className="attach-image-div" htmlFor="attachImage">
            <img src="/attach-logo.png" alt="attach" />
            <input hidden type="file" id="attachImage" onChange={fileChangeHandler} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form;
