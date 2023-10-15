"use client"

import {motion} from "framer-motion";
import {POP_FROM_CENTER, SECTION_ANIMATIONS, SLIDE_FROM_BOTTOM} from "@/components/_animations";

const SaveTheDate = () => {
    return (
        <motion.section {...SECTION_ANIMATIONS} className={'relative'}>
            <video autoPlay loop muted playsInline className={'absolute top-0 left-0 w-full h-full object-cover object-bottom'}>
                <source src="/bg1.mp4" type="video/mp4" />
            </video>
            <div className='container relative'>
                <h3 className={'text-center'}>
                    Save Our Date
                </h3>
                <motion.div className={'flex justify-center space-y-10 md:space-y-0 md:space-x-20 flex-col md:flex-row'} variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.2,
                        },
                    }
                }} initial={'hidden'} whileInView={'visible'}>
                    <motion.div className={'flex flex-col items-center gap-2'} variants={POP_FROM_CENTER}>
                        <span
                            className={'text-7xl md:text-9xl font-bold leading-none px-6 py-3 bg-pink text-white rounded-3xl order-2 md:order-1'}>21</span>
                        <span className={'text-2xl md:text-3xl order-1'}>ngày</span>
                    </motion.div>
                    <motion.div className={'flex flex-col items-center gap-2'} variants={POP_FROM_CENTER}>
                        <span
                            className={'text-7xl md:text-9xl font-bold leading-none px-6 py-3 bg-pink text-white rounded-3xl order-2 md:order-1'}>11</span>
                        <span className={'text-2xl md:text-3xl order-1'}>tháng</span>
                    </motion.div>
                    <motion.div className={'flex flex-col items-center gap-2'} variants={POP_FROM_CENTER}>
                        <span
                            className={'text-7xl md:text-9xl font-bold leading-none px-6 py-3 bg-pink text-white rounded-3xl order-2 md:order-1'}>2023</span>
                        <span className={'text-2xl md:text-3xl order-1'}>năm</span>
                    </motion.div>
                </motion.div>
                <motion.div className='mt-5 text-center md:text-2xl italic' variants={SLIDE_FROM_BOTTOM} initial={'hidden'} whileInView={'visible'}>
                    (Tức ngày 09 tháng 10 năm 2023 Âm lịch)
                </motion.div>
            </div>
        </motion.section>
    )
}

export default SaveTheDate
