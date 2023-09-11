import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/Logo.svg"

const LayoutFooter = ({ className = "" }: {className?: string;}) => {
    return (
        <footer className={`text-gray-700 flex justify-between text-sm pt-20 pb-4 ${className}`}>
            <ul className={`flex flex-row`}>
                <li className={`mr-4`}>
                    <Link href={`/`}>
                    <Image
                        src={Logo}
                        width={21}
                        height={21}
                        alt={`Blog Logo with Link to Homepage`}
                        />
                    </Link>
                </li>
                <li className={`mr-4`}><Link href={`/legals/imprint`}>Imprint</Link></li>
                <li><Link href={`/legals/privacy-policy`}>Privacy Policy</Link></li>
            </ul>
            <div>
                &copy; {new Date().getFullYear()} {process.env.IMPRINT_OWNER}
            </div>
        </footer>
    )
}

export default LayoutFooter
