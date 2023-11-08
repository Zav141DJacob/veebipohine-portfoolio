import Link from "next/link";
// About Me

type Props = {
    children?: React.ReactNode;
    title?: string;
}
const HeaderItem: React.FC<Props> = ({ children, title }) => {
    return (
        <span className="px-3">
            <span className="cursor-pointer">
                {title ?
                    <Link href={title?.toLowerCase().split(' ').join('-')}>
                        {title}
                        {children}
                    </Link> :
                    <span>
                        {children}
                    </span>}
            </span>
        </span>
    )
}

export default HeaderItem;