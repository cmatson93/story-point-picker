import { useState } from 'react';
import { motion } from 'framer-motion';

import './style.css';

const PointCard = ({ value, handleClick, isSelected }) => {
    const [flipped, setFlipped] = useState(false);

    const framerHandleClick = () => {
        setFlipped(true);
        handleClick(value);
    };

    const topVariants = {
        initial: {
            rotateY: 0,
            background: '#501098',
            color: '#f2f2f2'
        },
        active: {
            rotateY: -180,
            transition: { duration: 3 }
        }
    };

    const bottomVariants = {
        initial: {
            rotateY: -180
        },
        active: {
            background: '#f2f2f2',
            color: '#501098',
            rotateY: 0,
            transition: { duration: 3 }
        }
    };

    return (
        <motion.div
            key={value}
            value={value}
            onClick={framerHandleClick}
            style={{
                position: 'relative',
                minWidth: '196px',
                minHeight: '125px'
            }}
        >
            <motion.div
                className={
                    isSelected ? 'point-card-btn selected' : 'point-card-btn'
                }
                // initial={{ rotateY: 0 }}
                // animate={{ rotateY: -180 }}
                // transition={{ duration: 3 }}
                animate={isSelected ? 'active' : 'initial'}
                initial="initial"
                variants={topVariants}
            >
                <span
                    className={
                        isSelected
                            ? 'non-selected-top-value'
                            : 'selected-top-value'
                    }
                >
                    {value}
                    {/* first */}
                </span>
            </motion.div>
            <motion.div
                className={
                    isSelected ? 'point-card-btn selected' : 'point-card-btn'
                }
                // value={value}
                // onClick={handleClick}
                initial="initial"
                animate={isSelected ? 'active' : 'initial'}
                variants={bottomVariants}
            >
                <span
                    className={
                        isSelected ? 'selected-span' : 'non-selected-span'
                    }
                >
                    {/* {value} */}
                    second
                </span>
            </motion.div>
        </motion.div>
    );
};

export default PointCard;
