import './style.css';

const PointCard = ({ handleClick, isSelected, value }) => (
    <button
        key={value}
        value={value}
        onClick={handleClick}
        className={isSelected ? 'point-card-btn selected' : 'point-card-btn'}
    >
        {value}
    </button>
);

export default PointCard;
