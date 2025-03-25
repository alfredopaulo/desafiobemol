import { useNavigate } from "react-router-dom";
import "./style.css";
import { GiBrain } from "react-icons/gi";
const Pdi = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pdi");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-content">
        <GiBrain size={50} />
        <h1>PDI</h1>
      </div>
    </div>
  );
};

export default Pdi;
