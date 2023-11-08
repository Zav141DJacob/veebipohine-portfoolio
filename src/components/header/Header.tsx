import Link from "next/link";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className="w-full border-solid border-[#e5e7eb] border-b border-0 px-4 py-5">
            <div>
                <Link href="/" className="mx-4 font-bold text-xl cursor-pointer">Jaagup Tomingas</Link>
                <HeaderItem title="About Me"/>
                <HeaderItem title="Docs"/>
            </div>
        </header>
    )
}

export default Header;