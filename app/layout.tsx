import './globals.css'
import LayoutHeader from '@/app/components/LayoutHeader'
import LayoutFooter from '@/app/components/LayoutFooter'
import React from 'react'

export const metadata = {
    title: 'Blog',
    description: 'Website Description',
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
                <LayoutHeader className={"md:px-0 px-2"} />
                <main className={"container mx-auto md:px-0 px-2 mt-20 md:mt-24 lg:mt-40"}>
                    {children}
                </main>
                <LayoutFooter className={"container mx-auto md:px-0 px-2"} />
            </body>
        </html>
    )
}
