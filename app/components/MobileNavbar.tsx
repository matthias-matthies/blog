"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/Logo.svg"
import {useState} from "react";
import {FSFile} from "@/app/types/FileSystem";

const MobileNavbar = ({ className = "", links = [] }: {className?: string; links?: FSFile[]}) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <nav className={`py-4 relative flex flex-row justify-end md:py-8 lg:py-16 ${className}`}>
            <Link className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`} href={`/`}>
                <Image
                    src={Logo}
                    width={56}
                    height={56}
                    alt={`Blog Logo with Link to Homepage`} />
            </Link>
            <div className={`p-2  ${isNavOpen ? "hidden" : "block"}`} onClick={() => toggleNav()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </div>
            <div className={`p-2 ${isNavOpen ? "block" : "hidden"}`} onClick={() => toggleNav()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>

            <ul className={`hidden flex-row justify-between`}>
                <li className={`text-lg font-bold uppercase`}><Link href={`/blog`}>Blog</Link></li>
                {links.map((link) => (<li className={`text-lg font-bold uppercase`}><Link href={`/${process.env.BASE_DIRECTORY}/${link.name}`}>{link.name}</Link></li>))}
            </ul>
        </nav>
    )
}

export default MobileNavbar
