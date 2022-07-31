import './Section.scss'

type Props = {
    id: string
    children: React.ReactNode
    title?: string
}

function Section({ id, children, title }: Props) {
    return (
        <section id={id} className='section'>
            {title ? <h2 className='section-title'>{title}</h2> : undefined}
            {children}
        </section>
    )
}

export default Section
