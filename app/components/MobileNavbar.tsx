"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/Logo.svg"
import {useEffect, useState} from "react";
import {FSFile} from "@/app/types/FileSystem";
import useDebounce from "@/app/lib/useDebounce";
import {useScrollDirection} from "@/app/lib/useScrollDirection";

const MobileNavbar = ({ className = "", links = [] }: {className?: string; links?: FSFile[]}) => {
    const [navOpen, setNavOpen] = useState(false)
    const [hideNav, setHideNav] = useState(false)
    const scrollDirection = useScrollDirection();
    const debouncedIsNavOpen = useDebounce(navOpen, 100)

    useEffect(() => {
        if (scrollDirection === "up" && hideNav) setHideNav(false)
        if (scrollDirection === "down" && !hideNav) setHideNav(true)
    },[scrollDirection])
    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <div className={`backdrop-blur-sm transform transition duration-300 ${hideNav && !navOpen ? "-translate-y-full" : "translate-y-0"}`}>
                <nav className={`py-6 relative flex flex-row justify-end md:py-8 lg:py-16 z-20 block md:hidden ${className}`}>
                    <Link className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10`} href={`/`}>
                        <Image
                            src={Logo}
                            width={56}
                            height={56}
                            alt={`Blog Logo with Link to Homepage`}
                        />
                    </Link>
                    <div className={`${debouncedIsNavOpen ? "hidden" : "block"} p-2`} onClick={() => toggleNav()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                    <div className={`${debouncedIsNavOpen ? "block" : "hidden"} p-2`} onClick={() => toggleNav()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </nav>
                <ul className={`${debouncedIsNavOpen ? "translate-x-full" : "translate-x-[200%]" } px-6 absolute pt-16 transform transition duration-300 flex top-0 left-0 w-1/2 h-screen flex-col bg-white z-10 text-right block md:hidden`}>
                    <li className={`text-lg font-bold uppercase my-2`}><Link onClick={() => setNavOpen(false)} href={`/blog`}>Blog</Link></li>
                    {links.map((link) => (<li className={`text-lg font-bold uppercase my-2`}><Link onClick={() => setNavOpen(false)} href={`/${link.absPath}`}>{link.name}</Link></li>))}
                </ul>
                <div className={`${debouncedIsNavOpen ? "translate-x-0" : "translate-x-full" } absolute transform transition duration-300 top-0 left-0 w-full h-screen bg-gradient-to-l from-white from-50% backdrop-blur-sm z-[5] md:hidden`} />
            </div>
        </>
    )
}

export default MobileNavbar
