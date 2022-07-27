

import { useState } from "react";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from 'framer-motion';


import { skill, SliderImages } from './dataimg'
import colorSharp from "../assets/img/color-sharp.png"


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
const swipeConfidenceThreshold = 10000;

export const Skill = () => {
    const [[page, direction], setPage] = useState([1, 0]);
    const imageIndex = wrap(0, SliderImages.length, page);



    const paginate = (newDirection) => {

        console.log(newDirection);
        setPage([page + newDirection, newDirection]);
         console.log(page);
        
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h2> My Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className="skill-slider">
                                <AnimatePresence initial={false} custom={direction}  >
                                    <div className='item'>
                                        <motion.img
                                            key={page}
                                            src={SliderImages[imageIndex]}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={1}
                                            onDragEnd={(e, { offset, velocity }) => {
                                                const swipe = swipePower(offset.x, velocity.x);

                                                if (swipe < -swipeConfidenceThreshold) {
                                                    paginate(1);
                                                } else if (swipe > swipeConfidenceThreshold) {
                                                    paginate(-1);
                                                }
                                            }}
                                        />
                                        <h5>{skill[imageIndex]}</h5>
                                    </div>
                                </AnimatePresence>
                            </div>
                            <motion.div whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 1.8 }} className="next" onClick={() => paginate(1)}>
                                {">"}
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 1.8 }} className="prev" onClick={() => paginate(-1)}>
                                {"<"}
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
