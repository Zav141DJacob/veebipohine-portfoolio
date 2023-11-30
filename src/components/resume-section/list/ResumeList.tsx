type Props = { 
    children: React.ReactNode; 
    title: string; 
}

const ResumeList: React.FC<Props> = ({ children, title }) => {
    return (
        <section id={title.toLowerCase().split(' ').join('-')} className='flex flex-col lg:flex-row justify-center gap-12 pt-12 lg:pt-20'>
            <div className='w-80 text-3xl font-semibold whitespace-nowrap'>
                {title}
            </div>
            <div className='flex flex-col gap-4'>
                {children}
            </div>
        </section>
    )
}

export default ResumeList;