const ResumeSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="bg-bg2 flex flex-col grow px-6 lg:px-auto py-12">
            {children}
        </section>
    )
}

export default ResumeSection