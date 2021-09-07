import Arrow from "../Icons/Arrow";
import "./styles.css";

const SecondaryBtn = ({ text, handleClick }) => (
    <button 
        className="secondary-btn"
        onClick={handleClick}
    >
        {text}
        <Arrow />
    </button>
);

export default SecondaryBtn;