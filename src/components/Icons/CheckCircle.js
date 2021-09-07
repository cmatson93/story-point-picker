import { motion } from 'framer-motion';

const CheckCircle = () => {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    };

    const polylineVariants = {
        hidden: {
            opacity: 0,
            points: 0
        },
        visible: {
            opacity: 1,
            points: '22 4 12 14.01 9 11.01',
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
            />
            <motion.polyline
                variants={polylineVariants}
                initial="hidden"
                animate="visible"
                points="22 4 12 14.01 9 11.01"
            />
            {/* <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                fill="#ffffff"
                d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            /> */}
        </svg>
    );
};
export default CheckCircle;
