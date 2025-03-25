import "./styles.css";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/feedback-options");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-content">
        <VscFeedback size={50} />
        <h1>Feedback 1x1</h1>
      </div>
    </div>
  );
};

export default Feedback;
