import Form from '../components/Form/index.jsx';
import '../style/global.css';
import './home.css';
import firebase from '../firebase';
// import { getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import createSession from '../api/create-session.js';
import joinSession from '../api/join-session.js';
import useLocalStorage from '../helpers/useLocalStorage.js';

const Home = () => {
    const [userId, setUserId] = useLocalStorage('userId', null);

    // TODO: On form submit look for session with session name.
    // if joining either find and join or don't and throw error.
    // if creating either find and throw error or create and join.
    // Confirm that we are correctly handling these edge cases.

    const handleCreateSessionClick = async (sessionName, userName) => {
        try {
            const res = await createSession(sessionName, userName);
            setUserId(res);
            redirectToSession(sessionName);
        } catch (err) {
            console.log('error creating session: ', err);
        }
    };

    const handleJoinSessionClick = async (sessionName, userName) => {
        try {
            const res = await joinSession(sessionName, userName);
            setUserId(res);
            redirectToSession(sessionName);
        } catch (err) {
            console.log('error joining session: ', err);
        }
    };

    const redirectToSession = (sessionName) => {
        // Redirect to session page
        window.history.pushState(
            {},
            `/session/${sessionName}`,
            window.location.origin + '/session/' + sessionName
        );
        window.history.go();
    };

    return (
        <div className="App">
            <header>
                <h1 className="home-title">Welcome to Storypoint Picker!</h1>
                <div className="custom-shape-divider-top-1626280389">
                    {/* TODO: Move this to icons/svg file */}
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </header>
            <main>
                <Form
                    handleCreate={handleCreateSessionClick}
                    handleJoin={handleJoinSessionClick}
                />
            </main>
        </div>
    );
};

export default Home;
