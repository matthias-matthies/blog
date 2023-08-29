import Link from "next/link";
import {FSFile} from "@/app/types/FileSystem";

const Navbar = ({ className = "", links = [] }: {className?: string; links?: FSFile[]}) => {

    return (
        <nav className={`py-4 md:py-8 lg:py-16 ${className}`}>
            <ul className={`flex flex-row justify-between`}>
                <li className={`text-lg font-bold uppercase`}><Link href={`/blog`}>Blog</Link></li>
                {links.map((link) => (<li className={`text-lg font-bold uppercase`}><Link href={`/${process.env.BASE_DIRECTORY}/${link.name}`}>{link.name}</Link></li>))}
            </ul>
        </nav>
    )
}

export default Navbar
