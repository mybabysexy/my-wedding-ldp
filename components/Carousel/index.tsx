"use client"

import {motion} from "framer-motion";
import {SECTION_ANIMATIONS} from "@/components/_animations";
import Image from "next/image";
import BANNER from '@/public/banner.jpg'

const Carousel = () => {
    return (
        <motion.section {...SECTION_ANIMATIONS} className={'relative'}>
            <Image src={BANNER} alt={'Softwater'} className={'object-cover object-center'} fill={true}
                   quality={80}
                   priority
                   placeholder={'blur'} style={{
                filter: 'brightness(0.6)'
            }}/>
            <div className="container text-white z-0 text-center">
                <div className={'text-2xl'}>
                    We are getting married!
                </div>
                <div className={'text-5xl md:text-7xl mt-10 flex flex-col md:flex-row justify-center items-center'}>
                    <span>Minh Đức</span>
                    <span className={'rounded-full m-5 flex items-center justify-center w-20 h-20 bg-pink text-5xl'}>&</span>
                    <span>Thanh Xuân</span>
                </div>
            </div>
        </motion.section>
    )
}

export default Carousel
