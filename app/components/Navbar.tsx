"use client"

import Link from "next/link";
import {FSFile} from "@/app/types/FileSystem";
import {useScrollDirection} from "@/app/lib/useScrollDirection";
import {useEffect, useState} from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.svg";

const Navbar = ({ className = "", links = [] }: {className?: string; links?: FSFile[]}) => {
    const [hideNav, setHideNav] = useState(false)
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        if (scrollDirection === "up" && hideNav) setHideNav(false)
        if (scrollDirection === "down" && !hideNav) setHideNav(true)
    },[scrollDirection])

    return (
        <div className={`backdrop-blur-sm transform transition duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`}>
            <Link className={`hidden md:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10`} href={`/`}>
                <Image
                    src={Logo}
                    width={56}
                    height={56}
                    alt={`Blog Logo with Link to Homepage`}
                />
            </Link>
            <nav className={`py-4 md:py-8 lg:py-16 hidden md:block ${className}`}>
                <ul className={`flex flex-row justify-between`}>
                    <li className={`text-lg font-bold uppercase`}><Link href={`/blog`}>Blog</Link></li>
                    {links.map((link, index) => (<li key={index} className={`text-lg font-bold uppercase`}><Link href={`/${link.absPath}`}>{link.name}</Link></li>))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
