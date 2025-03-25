import React, { useContext, useState } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import "./styles.css";

const FeedbackSearch = () => {
  const { getReceivedFeedbacks, getSentFeedbacks } =
    useContext(FeedbackContext);
  const [receivedUserId, setReceivedUserId] = useState("");
  const [sentUserId, setSentUserId] = useState("");
  const [receivedFeedbacks, setReceivedFeedbacks] = useState([]);
  const [sentFeedbacks, setSentFeedbacks] = useState([]);

  const handleSearchReceived = async () => {
    const feedbacks = await getReceivedFeedbacks(receivedUserId);
    setReceivedFeedbacks(feedbacks);
  };

  const handleSearchSent = async () => {
    const feedbacks = await getSentFeedbacks(sentUserId);
    setSentFeedbacks(feedbacks);
  };

  return (
    <div>
      <h1>Feedback Search</h1>
      <div>
        <h2>Buscar Feedbacks Recebidos</h2>
        <input
          type="text"
          placeholder="Insira o ID do usuário"
          value={receivedUserId}
          onChange={(e) => setReceivedUserId(e.target.value)}
        />
        <button onClick={handleSearchReceived}>Buscar</button>
        <ul>
          {receivedFeedbacks.map((feedback) => (
            <li key={feedback.id}>
              <p>
                <strong>ID:</strong> {feedback.id}
              </p>
              <p>
                <strong>Usuário Enviando:</strong> {feedback.userId}
              </p>
              <p>
                <strong>Usuário Recebendo:</strong> {feedback.userReceiver}
              </p>
              <p>
                <strong>Mensagem:</strong> {feedback.message}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Buscar Feedbacks Enviados</h2>
        <input
          type="text"
          placeholder="Insira o ID do usuário"
          value={sentUserId}
          onChange={(e) => setSentUserId(e.target.value)}
        />
        <button onClick={handleSearchSent}>Buscar</button>
        <ul>
          {sentFeedbacks.map((feedback) => (
            <li key={feedback.id}>
              <p>
                <strong>ID:</strong> {feedback.id}
              </p>
              <p>
                <strong>Usuário Enviando:</strong> {feedback.userId}
              </p>
              <p>
                <strong>Usuário Recebendo:</strong> {feedback.userReceiver}
              </p>
              <p>
                <strong>Mensagem:</strong> {feedback.message}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackSearch;
