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
                <LayoutHeader className={"container mx-auto md:px-0 px-2"} />
                <main className={"container mx-auto md:px-0 px-2"}>
                    {children}
                </main>
                <LayoutFooter className={"container mx-auto md:px-0 px-2"} />
            </body>
        </html>
    )
}
