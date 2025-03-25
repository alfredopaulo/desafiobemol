import React, { useContext, useEffect } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import "./style.css";

const ListaFeedbacks = () => {
  const { getAllFeedbacks, feedbacks, loading, deleteFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    getAllFeedbacks();
  }, [getAllFeedbacks]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleDelete = async (id) => {
    await deleteFeedback(id);
  };

  return (
    <div>
      <h1>Lista de Feedbacks</h1>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className="card">
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
            <button onClick={() => handleDelete(feedback.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFeedbacks;
