"use client"

import {motion} from "framer-motion";
import {SECTION_ANIMATIONS} from "@/components/_animations";

const Carousel = () => {
    return (
        <motion.section className={'bg-gray-500 flex items-center justify-center text-white text-4xl'} {...SECTION_ANIMATIONS}>
            Ảnh gì đó
        </motion.section>
    )
}

export default Carousel
