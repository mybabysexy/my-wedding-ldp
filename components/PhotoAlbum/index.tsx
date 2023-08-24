'use client'

import Image from "next/image";
import PHOTO_1 from '@/public/album/1.jpg'
import PHOTO_2 from '@/public/album/2.jpg'
import PHOTO_3 from '@/public/album/3.jpg'
import PHOTO_4 from '@/public/album/4.jpg'
import PHOTO_5 from '@/public/album/5.jpg'
import PHOTO_6 from '@/public/album/6.jpg'
import {motion} from "framer-motion";
import {SLIDE_FROM_BOTTOM, SECTION_ANIMATIONS} from "@/components/_animations";

const PhotoAlbum = () => {
    const whileHoverAnimation = {
        y: -10,
    }

    return <motion.section {...SECTION_ANIMATIONS}>
        <div className='container'>
            <h3 className={'text-center'}>Ảnh của chúng mình nè</h3>
            <motion.div className={'grid grid-cols-2 md:grid-cols-3 gap-4'} layout
                        variants={SLIDE_FROM_BOTTOM} initial={'hidden'} whileInView={'visible'}>
                <motion.div
                    whileHover={whileHoverAnimation}
                    className={'relative cursor-zoom-in rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image placeholder={'blur'} quality={80} src={PHOTO_1} alt={'Ảnh 1'} fill
                           className={'object-cover object-top'}/>
                </motion.div>
                <motion.div
                    whileHover={whileHoverAnimation}
                    className={'relative cursor-zoom-in row-span-2 rounded-2xl overflow-hidden md:min-h-[350px]'}>
                    <Image placeholder={'blur'} quality={80} src={PHOTO_3} alt={'Ảnh 2'} fill
                           className={'object-cover object-top'}/>
                </motion.div>
                <motion.div
                    whileHover={whileHoverAnimation}
                    className={'relative cursor-zoom-in rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image placeholder={'blur'} quality={80} src={PHOTO_4} alt={'Ảnh 3'} fill
                           className={'object-cover object-top'}/>
                </motion.div>
                <motion.div
                    whileHover={whileHoverAnimation}
                    className={'relative cursor-zoom-in md:row-span-2 rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image placeholder={'blur'} quality={80} src={PHOTO_6} alt={'Ảnh 4'} fill
                           className={'object-cover object-top'}/>
                </motion.div>
                <motion.div
                    whileHover={whileHoverAnimation}
                    className={'relative cursor-zoom-in rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image placeholder={'blur'} quality={80} src={PHOTO_5} alt={'Ảnh 5'} fill
                           className={'object-cover object-top'}/>
                </motion.div>
                <motion.div
                    whileHover={whileHoverAnimation}
                    className={'relative cursor-zoom-in col-span-2 rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[450px]'}>
                    <Image placeholder={'blur'} quality={80} src={PHOTO_2} alt={'Ảnh 6'} fill
                           className={'object-cover object-top'}/>
                </motion.div>
            </motion.div>
        </div>
    </motion.section>;
}

export default PhotoAlbum;
