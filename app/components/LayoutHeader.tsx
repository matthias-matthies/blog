import Navbar from "@/app/components/Navbar";

const LayoutHeader = ({ className = "" }: {className?: string;}) => {
    return (
        <header className={className}>
            <Navbar />
        </header>
    )
}

export default LayoutHeader
