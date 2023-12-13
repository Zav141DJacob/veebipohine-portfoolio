import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Head from 'next/head'

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width" />
            </Head>
            <div className="min-h-screen flex flex-col transition-all">
                {/* <ViewTransition/> */}
                <Header />
                <div className="grow flex flex-col">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Template;