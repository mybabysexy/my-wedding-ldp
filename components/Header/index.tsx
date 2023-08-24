"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import DUC_IMG from '@/public/duc.png'
import XUA_IMG from '@/public/xua.png'

const Header = () => {
    return <header className={'flex justify-center py-4'}>
        <div className={'flex space-x-4 items-center'}>
            <motion.div animate={{
                x: 0,
                opacity: 1,
            }} initial={{
                x: -50,
                opacity: 0,
            }}>
                <Image src={DUC_IMG} alt='duc-meme' height={80}/>
            </motion.div>
            <motion.span className={'text-5xl'} animate={{
                y: 0,
                opacity: 1,
            }} initial={{
                y: -50,
                opacity: 0,
            }}>
                💞
            </motion.span>
            <motion.div animate={{
                x: 0,
                opacity: 1,
            }} initial={{
                x: 50,
                opacity: 0,
            }}>
                <Image src={XUA_IMG} alt='xua-meme' height={80}/>
            </motion.div>
        </div>
    </header>
}

export default Header
