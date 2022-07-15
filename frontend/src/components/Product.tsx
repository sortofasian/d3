import './Product.scss'

type Props = {
    variant?: '1x1' | '2x1' | '2x2'
}

function Product({ variant }: Props) {
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
            <img src='/img/dragon.jpg' alt='product' className='image' />
            <div className='info'>
                <div className='title'>Absolutely fkn sick dragon thing</div>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
