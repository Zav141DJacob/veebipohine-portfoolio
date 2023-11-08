import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="">
            {/* <ViewTransition/> */}
            <Header />
            {children}
        </div>
    )
}

export default Template;