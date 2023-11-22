const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col bg-bg1 min-w-[40rem] rounded-sm p-6 space-y-4">
            {children}
        </div>
    )
}

export default Card