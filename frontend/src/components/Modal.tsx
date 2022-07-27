import './Modal.scss'

import { ProductData } from '../pages/Store'

export type ModalStatus = { visible: boolean; details?: ProductData }
type Props = {
    status: ModalStatus
    setStatus: (status: ModalStatus) => void
}

function Modal({ status, setStatus }: Props) {
    return (
        <div
            className={`modal-background ${status.visible ? '' : 'hidden'}`}
            onClick={() => setStatus({ visible: false, details: status.details })}
        >
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <button
                    className='modal-close'
                    onClick={() => setStatus({ visible: false, details: status.details })}
                >
                    x
                </button>

                <img className='image' src={status.details?.images[0]} alt='product' />

                <div className='info-container'>
                    <div className='description'>
                        <h2>{status.details?.title}</h2>
                        <p>{status.details?.description}</p>
                    </div>
                    <div className='bar' />
                    <div className='details'>
                        <h2 className='price'>{`$${status.details?.price}`}</h2>
                        <div className='stock'>{status.details?.stock} in stock</div>

                        <p>
                            <strong>Width:</strong> 100in (wing to wing)
                            <br />
                            <strong>Length:</strong> 100in (head to tail)
                            <br />
                            <strong>Weight:</strong> 100g
                        </p>

                        <button className='button buy-now'>
                            <div>Buy Now</div>
                        </button>

                        <button className='button'>
                            <div>Add to Cart</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
