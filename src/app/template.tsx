import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col transition-all">
            {/* <ViewTransition/> */}
            <Header />
            <div className="grow flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default Template;