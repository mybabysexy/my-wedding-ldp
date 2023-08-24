"use client"

import SOFTWATER_1 from '@/public/softwater-1.jpg'
import Image from 'next/image'
import {motion} from "framer-motion";
import {SECTION_ANIMATIONS, SLIDE_FROM_BOTTOM} from "@/components/_animations";

const SoftWater = () => {
    return (
        <motion.section id={'softwater'} className={'md:px-20 relative'} {...SECTION_ANIMATIONS}>
            <Image src={SOFTWATER_1} alt={'Softwater'} className={'object-cover object-center'} fill={true}
                   placeholder={'blur'} style={{
                filter: 'brightness(0.5)'
            }}/>
            <motion.div className='container z-0' variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                    },
                }
            }} initial={'hidden'} whileInView={'visible'}>
                <motion.h3 className={'text-white'} variants={SLIDE_FROM_BOTTOM} initial={'hidden'}
                           whileInView={'visible'}>
                    Chỉ 1 hôm duy nhất!
                </motion.h3>
                <motion.div className={'text-4xl text-white flex items-baseline mt-10'} variants={SLIDE_FROM_BOTTOM}
                            initial={'hidden'} whileInView={'visible'}>
                    11h30 tại nhà hàng tiệc cưới sân vườn Softwater
                </motion.div>
                <motion.div className={'text-2xl text-white mt-10'} variants={SLIDE_FROM_BOTTOM} initial={'hidden'}
                            whileInView={'visible'}>
                    Địa chỉ: <a href='https://goo.gl/maps/c7wycQH85NFT6QwX9' target={'_blank'}
                                className={'link-flash hover:text-green-300'}>
                    42 đường 9, tập thể F361 An Dương, Tây Hồ, Hà Nội
                </a>
                </motion.div>
            </motion.div>

        </motion.section>
    )
}

export default SoftWater
