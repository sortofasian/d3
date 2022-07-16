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
                <h2>Dragon</h2>
            </div>
        </div>
    )
}

export default Modal
