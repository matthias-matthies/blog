import {parseDirectoryForNavbar} from "@/app/lib/fileSystemParser";
import Link from "next/link";
import {FSFile} from "@/app/types/FileSystem";


const Navbar = ({ className = "" }: {className?: string;}) => {
    const links = parseDirectoryForNavbar(`${process.env.BASE_DIRECTORY}`)
    return (
        <nav className={className}>
            <ul>
                {links.map((link) => (<li><Link href={`/${process.env.BASE_DIRECTORY}/${link.name}`}>{link.name}</Link></li>))}
            </ul>
        </nav>
    )
}

export default Navbar
