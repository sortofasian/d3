import './Modal.scss'

type Props = {
    visible: boolean
    setVisible: (modalVisible: boolean) => void
}

function Modal({ visible, setVisible }: Props) {
    return (
        <div
            className={`modal-background ${visible ? '' : 'hidden'}`}
            onClick={() => setVisible(false)}
        >
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <div className='modal-close' onClick={() => setVisible(false)}>
                    x
                </div>
                <img className='image' src='/img/dragon.jpg' alt='product' />
                <div className='info-container'>
                    <div className='description'>
                        <h2>Crystal Dragon</h2>
                        <p>
                            3D printed articulated crystal dragon from Cinderwing3D. Printed in a
                            mix of blue and purple with sparkles.
                        </p>
                    </div>
                    <div className='bar' />
                    <div className='details'>
                        <h2 className='price'>$50.00</h2>
                        <h6>
                            <strong>Length:</strong> 100in (head to tail)
                        </h6>
                        <h6>
                            <strong>Width:</strong> 100in (wing to wing)
                        </h6>
                        <h6>
                            <strong>Weight:</strong> 100g
                        </h6>
                        <div style={{ marginBottom: '20px' }} />
                        <button className='button buy-now'>Buy Now</button>
                        <button className='button add-cart'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
