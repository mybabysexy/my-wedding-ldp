import './globals.scss'
import type {Metadata} from 'next'
import {Bellota} from 'next/font/google'
import React from "react";
import Image from "next/image";
import BG from '@/public/bg.jpg'

const font = Bellota({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Wedding of Duc & Xuan',
    description: 'Đám cưới nho nhỏ của chúng mình',
    openGraph: {
        authors: 'duc1067',
        images: '/album/2.jpg',
    }
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
            <div className='fixed w-[100vw] h-[100vh] top-0 left-0'>
                <Image src={BG} alt={'bg'} fill objectFit={'cover'}/>
            </div>
            <main id={'root'} className={'relative'}>
                {children}
            </main>
        </body>
        </html>
    )
}
