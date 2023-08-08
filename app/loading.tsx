import './globals.css'
import React from 'react'

export default function RootLoading(
    {
        children
    }:
        {
            children: React.ReactNode
        }
) {
    return (
        <>
            Loading...
            {children}
        </>
    )
}
