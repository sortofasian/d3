import './Product.scss'

type Props = {
    setModal: (modalVisible: boolean) => void
    title: string
    image: string
    variant?: '1x1' | '2x1' | '2x2'
}
function Product({ setModal, title, image, variant }: Props) {
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
            <img src={image} alt='product' className='product-image' />
            <div className='product-info'>
                <div className='product-title'>{title}</div>
                <button className='product-button' onClick={() => setModal(true)}>
                    See Options
                </button>
            </div>
        </div>
    )
}

export default Product
