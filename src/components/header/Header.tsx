import Link from "next/link";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className="fixed w-full border-solid bg-bg1 border-border1 border-b border-0 px-4 py-5">
            <div>
                <Link href="/" className="px-4 font-bold text-xl cursor-pointer">Jaagup Tomingas</Link>
                <HeaderItem title="About Me" />
                <HeaderItem title="Docs" />

                <HeaderItem>
                    Dark mode switcher
                </HeaderItem>
            </div>
        </header>
    )
}

export default Header;