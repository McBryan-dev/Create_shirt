import React from 'react';

import state from '../store';

// FRAMER
import { motion, AnimatePresence } from 'framer-motion';
// FRAMER

// VALTIO
import {useSnapshot} from 'valtio';
// VALTIO

// CONFIG
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
// CONFIG

import { CustomButton } from '../components';


const Home = () => {

    const snap = useSnapshot(state);

    return (
       <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" 
                {...slideAnimation('left')}>

                    <motion.header {...slideAnimation('down')}>
                        <img src='./threejs.png' alt="logo" className="w-8 h-8 object-contain" />
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text rubik font-rubik">
                                LET'S <br className="xl:block hidden" /> DO IT.
                            </h1>
                        </motion.div>

                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-bold text-gray-600 text-base">
                                Create YOUR own unique and exclusive shirt with 
                                our brand-new 3D customization tool. <strong>Let loose your imagination</strong>
                                {" "} and define your own style
                            </p>

                            <CustomButton 
                                type="filled"
                                title="Start Now"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>

                    </motion.div>

                </motion.section>
            )}
       </AnimatePresence>
    )

}

export default Home;