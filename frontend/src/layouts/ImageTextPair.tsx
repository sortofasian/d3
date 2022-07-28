import './ImageTextPair.scss'

import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    img: string
}
function ImageTextPair({ children, img }: Props) {
    return (
        <div className='imgtext'>
            <div className='imgtext-text'>{children}</div>
            <img className='imgtext-image' src={img} alt='img' />
        </div>
    )
}

export default ImageTextPair
