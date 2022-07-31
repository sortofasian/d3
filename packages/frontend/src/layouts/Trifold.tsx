import './Trifold.scss'

import { ReactNode } from 'react'

type Props = {
    panel1: ReactNode
    image1: string
    panel2: ReactNode
    image2: string
    panel3: ReactNode
    image3: string
}
function Trifold({ panel1, image1, panel2, image2, panel3, image3 }: Props) {
    const panels = [panel1, panel2, panel3]
    const images = [image1, image2, image3]

    const elements = panels.map((panel, i) => {
        return (
            <div className='trifold-panel' key={i}>
                <img src={images[i]} alt='panel1' />
                <div className='trifold-card'>{panel}</div>
            </div>
        )
    })

    return <div className='trifold'>{elements}</div>
}

export default Trifold
