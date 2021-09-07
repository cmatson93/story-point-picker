import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PointCard from '../components/PointCard';
import SecondaryBtn from '../components/SecondaryBtn';
import firebase from '../firebase';
import SideNav from '../components/SideNav';
import useLocalStorage from '../helpers/useLocalStorage.js';
import Results from '../components/Results';

// TODO: Put global styles in header
import '../style/global.css';
import './session.css';

// TODO: Add a check on page load to check for current user if no current user show popup to create user.
// TODO: Remove user when closing page

const Session = () => {
    const { session } = useParams();
    const currentUser = 'cXTYiKX4Bh3piw9IFb0W'; // TODO: store this is session storage? Or something similar.
    const [userId] = useLocalStorage('userId');

    useEffect(() => {
        console.log('userId: ', userId);
    }, [userId]);

    // TODO: Clean up these variables
    const [activeUser, setActiveUser] = useState(null);
    const [isWaiting, setIsWaiting] = useState(true);
    const [currentChoice, setCurrentChoice] = useState(null);
    const [pointChosen, setPointChosen] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [currentMembers, setCurrentMembers] = useState([]);
    const [allPicked, setAllPicked] = useState(false);

    const points = ['One', 'Two', 'Three', 'Five', 'Seven', 'NA', 'Zero', '🤷‍♀️'];

    const handlePointSelect = (selection) => {
        if (errorMsg) {
            setErrorMsg('');
        }
        setCurrentChoice(selection);
        setActiveUser((prev) => ({ ...prev, currentPoint: selection }));
    };

    const handleSubmitClick = () => {
        if (currentChoice) {
            setPointChosen(currentChoice);
            db.collection(session)
                .doc(currentUser)
                .set(activeUser)
                .then(() => {
                    console.log('Document successfully written!');
                })
                .catch((error) => {
                    console.error('Error writing document: ', error);
                });
        } else {
            setErrorMsg('Please select a point first');
        }
    };

    const db = firebase.firestore();

    useEffect(() => {
        // Listen to updates from firestore
        db.collection(session).onSnapshot((snapShot) => {
            let updatedUsers = [];
            snapShot.forEach(
                (doc) => {
                    const data = doc.data();
                    const user = {
                        name: data.name,
                        currentPoint: data.currentPoint,
                        hasSelected: data.currentPoint ? true : false
                    };
                    updatedUsers.push(user);
                    // Get current user data to set as state:
                    if (doc.id === userId) {
                        // Set current Choice ???
                        setActiveUser(data);
                    }
                },
                (err) => {
                    console.log(err);
                }
            );
            setCurrentMembers(updatedUsers);
        });
    }, []);

    useEffect(() => {
        // console.log('currentMemebers: ', currentMembers);
        const selections = currentMembers.filter(
            (member) => member.hasSelected
        );
        if (selections.length === currentMembers.length) {
            setAllPicked(true);
        } else {
            setAllPicked(false);
        }
    }, [currentMembers]);

    return (
        <div className="session-container">
            <SideNav title="Teammates" members={currentMembers} />
            <div className="session-content">
                {isWaiting && activeUser?.isModerator ? (
                    <div className="waiting-container">
                        <h2>
                            If all team members are here click below to start
                            pointing your first item!
                        </h2>
                        <button
                            onClick={() => setIsWaiting(false)}
                            className="primary-btn"
                        >
                            Get Started
                        </button>
                    </div>
                ) : isWaiting ? (
                    <h2 id="waiting-h2">
                        Waiting for moderator to start session. 🐢 🐢 🐢
                    </h2>
                ) : !pointChosen ? (
                    <div className="choosing-container">
                        <h2>
                            Select your estimate for this item by clicking on
                            the corresponding button bellow.
                        </h2>
                        <div className="button-grid">
                            {points.map((point) => (
                                <PointCard
                                    key={point}
                                    value={point}
                                    isSelected={point === currentChoice}
                                    handleClick={(e) =>
                                        handlePointSelect(e.target.value)
                                    }
                                />
                            ))}
                        </div>
                        <SecondaryBtn
                            text="Submit Estimate"
                            handleClick={handleSubmitClick}
                        />
                        <p>{errorMsg}</p>
                    </div>
                ) : allPicked ? (
                    <Results currentMembers={currentMembers} />
                ) : (
                    <h2 className="selection-text">
                        You chose <span>{pointChosen}</span>! Waiting for others
                        to make their selection...
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Session;
