import './globals.scss'
import type {Metadata} from 'next'
import {Bellota} from 'next/font/google'
import React from "react";

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
        <body className={font.className} id={'root'}>{children}</body>
        </html>
    )
}
