"use client";

import BAU_1 from '@/public/bau-1.png'
import BAU_2 from '@/public/bau-2.png'
import BAU_3 from '@/public/bau-3.png'
import BAU_QR from '@/public/bau-qr.png'
import CATRANG from '@/public/catrang.jpg'
import CIAO from '@/public/ciao.jpg'
import FULL_QR from '@/public/full-qr.jpg'
import {useCallback, useState} from 'react'
import Image from 'next/image'
import {SECTION_ANIMATIONS, SLIDE_FROM_BOTTOM} from "@/components/_animations";
import {motion} from "framer-motion";

const Donate = () => {
    const [showQR, setShowQR] = useState(false)
    const [type, setType] = useState<'catrang' | 'ciao'>('catrang')
    const [showOtherQR, setShowOtherQR] = useState(false)
    const [done, setDone] = useState(false)

    const handleShowQR = useCallback((_type: 'catrang' | 'ciao') => {
        setType(_type)
        setShowQR(true)
    }, [])

    const handleFinish = useCallback(async () => {
        setDone(true)
        try {
            await fetch('/api/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type
                })
            })
        } catch (e) {

        }
    }, [type])

    const reset = useCallback(() => {
        setDone(false)
        setShowQR(false)
    }, [])

    return <motion.section className={'bg-pink-50'} {...SECTION_ANIMATIONS}>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-[4rem] md:gap-4'>
                <div className={'flex items-center'}>
                    <div>
                        <h4 className={'text-2xl'}>Ủng hộ quỹ</h4>
                        <div className={'flex items-center'}>
                            <h3>Bâu có hạt</h3>
                            <Image src={BAU_2} alt='Bâu hóng' height={60} className={'ml-3'}/>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className={'rounded-2xl bg-white drop-shadow-xl relative'}>
                        <motion.div className={'absolute top-[-35px] right-5'}
                                    initial={{
                                        y: -50,
                                    }}
                                    whileInView={{
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.5,
                                        }
                                    }}>
                            <Image src={BAU_3} alt='Bâu nằm phè' height={80} className={'ml-3 cursor-progress'}/>
                        </motion.div>
                        <div className="hidden">
                            <Image src={FULL_QR} alt='QR'
                                   placeholder={'blur'}
                                   height={300} priority={true}/>
                            <Image src={BAU_QR} alt='QR'
                                   placeholder={'blur'}
                                   height={300} priority={true}/>
                        </div>
                        {
                            done ? <div className={'px-6 py-12'}>
                                    <div className={'flex justify-center'}>
                                        <Image src={BAU_1} alt='Bâu cảm ơn' height={300}/>
                                    </div>
                                    <div className='text-2xl text-center mt-4'>
                                        Cháu cảm ơn các bác rất nhiều ạ!
                                    </div>
                                    <div className='mt-4'>
                                        <button
                                            onClick={reset}
                                            className={'rounded-2xl px-4 py-3 bg-pink hover:bg-red-400 transition w-full'}>
                                            <span className={'text-xl'}>Ủng hộ thêm</span>
                                        </button>
                                    </div>
                                </div> :
                                <div className={'px-6 py-12'}>
                                    {
                                        showQR ? <div className={'flex flex-col justify-center'}>
                                                <div className={'flex justify-center items-center'}>
                                                    <Image src={showOtherQR ? FULL_QR : BAU_QR} alt='QR'
                                                           placeholder={'blur'}
                                                           height={300} priority={true}/>
                                                </div>
                                                <div className='px-4 pb-4 gap-4 flex flex-row'>
                                                    <button
                                                        onClick={() => setShowOtherQR(!showOtherQR)}
                                                        className={'rounded-2xl px-4 py-3 bg-gray-300 hover:bg-gray-400 transition w-full'}>
                                                        <span className={'text-xl'}>Đổi QR khác</span>
                                                    </button>
                                                    <button
                                                        onClick={handleFinish}
                                                        className={'rounded-2xl px-4 py-3 bg-pink hover:bg-red-400 transition w-full'}>
                                                        <span className={'text-xl'}>Xong</span>
                                                    </button>
                                                </div>
                                            </div> :
                                            <motion.div className={'flex justify-around flex-col md:flex-row gap-4'}
                                                        variants={SLIDE_FROM_BOTTOM} initial={'hidden'}
                                                        whileInView={'visible'}>
                                                <div onClick={() => handleShowQR('catrang')}
                                                     className={'border-2 border-pink rounded-2xl w-[300px] overflow-hidden flex flex-col justify-center cursor-pointer'}>
                                                    <Image src={CATRANG} alt='Catrang' className={'w-full'}/>
                                                    <div className='px-4 pb-4'>
                                                        <button
                                                            className={'rounded-2xl px-4 py-3 bg-pink hover:bg-red-400 transition w-full'}>
                                                            <span className={'text-xl'}>🛒</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div onClick={() => handleShowQR('ciao')}
                                                     className={'border-2 border-pink rounded-2xl w-[300px] overflow-hidden flex flex-col justify-center cursor-pointer'}>
                                                    <Image src={CIAO} alt='Catrang' className={'w-full p-6'}/>
                                                    <div className='px-4 pb-4'>
                                                        <button
                                                            className={'rounded-2xl px-4 py-3 bg-pink hover:bg-red-400 transition w-full'}>
                                                            <span className={'text-xl'}>🛒</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
}

export default Donate
