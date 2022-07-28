import './Product.scss'

import { ProductType } from '../pages/Store'
import { ModalStatus } from './Modal'

type Props = {
    setModalStatus: (status: ModalStatus) => void
    details: ProductType
    variant?: '1x1' | '2x1' | '2x2'
}
function Product({ setModalStatus, details, variant }: Props) {
    if (!variant) variant = '1x1'
    let size
    switch (variant) {
        case '2x1':
            size = 'wide'
            break
        case '2x2':
            size = 'large'
    }

    return (
        <div className={`product${size ? ' ' + size : ''}`}>
            <img src={details.thumbnail} alt='product' className='product-image' />
            <div className='product-info'>
                <div className='product-title'>{details.title}</div>
                <button
                    className='product-button'
                    onClick={() => setModalStatus({ visible: true, details: details })}
                >
                    See Options
                </button>
            </div>
        </div>
    )
}

export default Product
