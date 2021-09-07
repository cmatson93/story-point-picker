import './style.css';

const Results = ({ currentMembers }) => {
    console.log('currentMembers in results: ', currentMembers);
    // const results = currentMembers.map(member => member.currentPoint);

    return (
        <div>
            <h1>Results</h1>
            {currentMembers.map((member) => (
                <p key={currentMembers.name}>{member.currentPoint}</p>
            ))}
        </div>
    );
};

export default Results;
