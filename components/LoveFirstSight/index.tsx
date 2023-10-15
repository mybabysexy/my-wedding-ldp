"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import {SECTION_ANIMATIONS} from "@/components/_animations";
import DoubleQuote from '@/public/double-quotes-96.png'
import FIRST_SIGHT from '@/public/first-sight.jpg'

const DoubleQuoteIcon = ({className = ''}) => {
    return <Image src={DoubleQuote} alt='Bâu cảm ơn' height={50} className={className}/>
}

const LoveFirstSight = () => {
    return (
        <motion.section {...SECTION_ANIMATIONS} className={'min-h-[40vh] relative'} style={{
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
            backgroundImage: `url(${FIRST_SIGHT.src})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            willChange: 'transform',
        }}>
            <div className='container z-0'>
                <div className={'flex justify-center'}>
                    <h3 className={'text-center bg-secondary bg-opacity-70 rounded-2xl py-3 px-5'}>
                        <DoubleQuoteIcon className={'-mt-10 md:-mt-20 mr-3 block md:inline-block'}/>
                        <span className={'block md:inline'}>I love you at first sight!</span>
                        <DoubleQuoteIcon className={'-mb-10 md:mt-10 ml-3 rotate-180 hidden md:inline-block'}/>
                    </h3>
                </div>
            </div>
        </motion.section>
    );
};

export default LoveFirstSight;
