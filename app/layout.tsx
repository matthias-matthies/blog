import './globals.css'
import LayoutHeader from '@/app/components/LayoutHeader'
import LayoutFooter from '@/app/components/LayoutFooter'
import React from 'react'

export const metadata = {
    title: 'Blog',
    description: 'Website Description',
    metadataBase: new URL(`${process.env.FULL_URL}`),
    category: `${process.env.BLOG_CATEGORY}`,
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        }
    },
    icons: {
        icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')],
        shortcut: ['/shortcut-icon.png'],
        apple: [
            { url: '/apple-icon.png' },
            { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
        ],
        /*other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/apple-touch-icon-precomposed.png',
            },
        ],*/
    }
}

export default function RootLayout(
    {
        children
    }:
    {
        children: React.ReactNode
    }
) {
    return (
        <html lang="en">
            <body>
                <LayoutHeader />
                <main className={"container mx-auto md:px-0 px-2 mt-24 lg:mt-40"}>
                    {children}
                </main>
                <LayoutFooter className={"container mx-auto md:px-0 px-2"} />
            </body>
        </html>
    )
}
