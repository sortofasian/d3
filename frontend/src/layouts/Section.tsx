type Props = {
    id: string
    children: React.ReactNode
}

function Section({ id, children }: Props) {
    return (
        <section id={id} className='section'>
            {children}
        </section>
    )
}

export default Section
