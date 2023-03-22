import React from 'react'
import styles from './up.module.css'

import { AnimatePresence,motion } from 'framer-motion'
import {IoArrowUp} from 'react-icons/io5'


interface UpProps {
    show: boolean,
    handleScroll: () => void
}

function Up({show, handleScroll}:UpProps) {


    
  return(<AnimatePresence>
    {show && <motion.div 
        onClick={handleScroll}
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        exit={{ y: '-60%', opacity: 0 }}
        className={styles.upCircle}
    >
       <IoArrowUp/>
    </motion.div>}
    </AnimatePresence>
    )
  
}

export default Up
