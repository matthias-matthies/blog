"use client"

import Link from "next/link";
import {FSFile} from "@/app/types/FileSystem";
import {useScrollDirection} from "@/app/lib/useScrollDirection";
import {useEffect, useState} from "react";

const Navbar = ({ className = "", links = [] }: {className?: string; links?: FSFile[]}) => {
    const [hideNav, setHideNav] = useState(false)
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        if (scrollDirection === "up" && hideNav) setHideNav(false)
        if (scrollDirection === "down" && !hideNav) setHideNav(true)
    },[scrollDirection])

    return (
        <div className={`backdrop-blur-sm transform transition duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`}>
            <nav className={`py-4 md:py-8 lg:py-16 hidden md:block ${className}`}>
                <ul className={`flex flex-row justify-between`}>
                    <li className={`text-lg font-bold uppercase`}><Link href={`/blog`}>Blog</Link></li>
                    {links.map((link) => (<li className={`text-lg font-bold uppercase`}><Link href={`/${link.absPath}`}>{link.name}</Link></li>))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
