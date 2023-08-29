import Navbar from "@/app/components/Navbar";
import MobileNavbar from "@/app/components/MobileNavbar";
import {parseDirectoryForNavbar} from "@/app/lib/fileSystemParser";

const LayoutHeader = ({ className = "" }: {className?: string;}) => {
    const links = parseDirectoryForNavbar(`${process.env.BASE_DIRECTORY}`)

    return (
        <header className={`fixed top-0 w-screen backdrop-blur-sm z-10 ${className}`}>
            <Navbar links={links} className={`container mx-auto hidden md:block`} />
            <MobileNavbar links={links} className={`container mx-auto block md:hidden`}/>
        </header>
    )
}

export default LayoutHeader
