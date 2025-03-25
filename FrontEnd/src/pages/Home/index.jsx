import { useNavigate } from "react-router-dom";
import Feedback from "../../components/Feedback";
import Pdi from "../../components/Pdi";
import "./style.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Pdi />
      <Feedback />
    </div>
  );
};

export default Home;
