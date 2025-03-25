import React, { useContext, useState } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import "./styles.css";

const FeedbackPage = () => {
  const { createFeedback } = useContext(FeedbackContext);
  const [userId, setUserId] = useState("");
  const [userReceiver, setUserReceiver] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      userId,
      userReceiver,
      message,
    };
    await createFeedback(feedbackData);
    alert("Feedback enviado com sucesso!");
    setUserId("");
    setUserReceiver("");
    setMessage("");
  };

  return (
    <div>
      <h1>Criar novo feedback</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="IdUserEnviando"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="IdUserRecebendo"
          value={userReceiver}
          onChange={(e) => setUserReceiver(e.target.value)}
        />
        <textarea
          placeholder="Escreva seu feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FeedbackPage;
