import Link from "next/link";
import HeaderItem from "./HeaderItem";
import { Button } from "../button/Button";

const Header = () => {
    return (
        <header className="fixed flex justify-between w-full border-solid bg-bg1 border-border1 border-b border-0 px-4 py-5 z-20">
            <div className="">
                <Link href="/" className="mx-4 font-bold text-xl cursor-pointer">Jaagup Tomingas</Link>
                <HeaderItem href="about-me">
                    About Me
                </HeaderItem>
                <HeaderItem href="/#employment-history">
                    Employment History
                </HeaderItem>
                <HeaderItem href="/#education">
                    Education
                </HeaderItem>
                <HeaderItem href="/#courses">
                    Courses
                </HeaderItem>
                <HeaderItem href="/#projects">
                    Projects
                </HeaderItem>
                <HeaderItem href="/#hackathons">
                    Hackathons
                </HeaderItem>
            </div>
            <HeaderItem>
                {/* <Button intent="clickable">
                    Dark mode switcher
                </Button> */}
            </HeaderItem>
        </header>
    )
}

export default Header;