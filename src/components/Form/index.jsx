
import React, { useState } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import './style.css';


export default function Form({ handleCreate, handleJoin }) {
    const [isCreating, setIsCreating] = useState(false);
    const [sessionName, setSessionName] = useState('');
    const [userName, setUserName] = useState('');

    const onSubmitClick = () => {
        console.log('On Submit Click')
        if (sessionName && userName) {
            // Have necessary inputs filled out
            if (isCreating) {
                // Create Session
                handleCreate(sessionName, userName)
            } else {
                // Join session
                handleJoin(sessionName, userName)
            }
            setSessionName('')
            setUserName('')

            
        } else {
            // Do not have to necessary data points filled show errors
            // TODO: Error handling
        }
    }

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 30,
    };

    return (
        <div className="form-container">
            <AnimateSharedLayout>
                <div className="tabs">
                    <button 
                        className={isCreating ? "tab-btn" : "tab-btn "} 
                        id="join-session=btn"
                        onClick={() => setIsCreating(false)}
                    >
                        {
                            !isCreating && (
                                <motion.div 
                                    className="tab-btn-selected"
                                    layoutId="tab-btn-selected"
                                    initial={false}
                                    animate={{
                                        borderBottom: '3px solid #000000'
                                    }}
                                    transition={spring}
                                />
                            )
                        }
                        Join Session
                    </button>
                    <button  
                        className={isCreating ? "tab-btn" : "tab-btn"} 
                        id="create-session=btn"
                        onClick={() => setIsCreating(true)}

                    >
                        {
                            isCreating && (
                                <motion.div 
                                    className="tab-btn-selected"
                                    layoutId="tab-btn-selected"
                                    initial={false}
                                    animate={{
                                        borderBottom: '3px solid #000000'
                                    }}
                                    transition={spring}
                                />
                            )
                        }
                        Create Session
                    </button>
                </div>
            </AnimateSharedLayout>
            <div className="inputs">
                <input 
                    className="input" 
                    placeholder="Your Name"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
                <input 
                    className="input" 
                    placeholder="Session Name"
                    onChange={(e) => setSessionName(e.target.value)}
                    value={sessionName}
                />
            </div>
            <button 
                onClick={onSubmitClick} 
                className="primary-btn"
            >
                { isCreating ? 'Create Session' : 'Join Session' }
            </button>
        </div>
    );
}