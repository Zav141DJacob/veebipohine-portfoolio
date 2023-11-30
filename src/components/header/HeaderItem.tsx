import Link from "next/link";
import { Button } from "../button/Button";
// About Me

type Props = {
    children?: React.ReactNode;
    title?: string;
    href?: string;
}
const HeaderItem: React.FC<Props> = ({ children, title, href }) => {
    return (

        <Button intent="clickable" href={href} className="mx-3">
            {children}
        </Button>
    )
}

export default HeaderItem;