const ScrollOver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-bg2 grow flex justify-center px-[15%] space-x-24 py-12">
            {children}
        </div>
    )
}

export default ScrollOver