import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const FeedbackOpcoes = () => {
  const navigate = useNavigate();

  const handleCreateFeedback = () => {
    navigate("/feedbacks");
  };

  const handleListAllFeedbacks = () => {
    navigate("/lista-feedbacks");
  };

  const handleListFeedbacksById = () => {
    navigate("/feedbacks-search");
  };

  return (
    <div>
      <h1>Feedback Opções</h1>
      <p>Selecione uma opção para feedback.</p>
      <ul className="lista">
        <li onClick={handleCreateFeedback} className="cardOptions">
          Criar Feedback
        </li>
        <li onClick={handleListAllFeedbacks} className="cardOptions">
          Listar Todos os Feedback
        </li>
        <li onClick={handleListFeedbacksById} className="cardOptions">
          Listar Feedbacks por id
        </li>
      </ul>
    </div>
  );
};

export default FeedbackOpcoes;
