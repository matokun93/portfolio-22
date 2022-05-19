import { useRef, memo } from 'react'
import useClickOutside from '../../CustomHooks/useClickOutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.css'

const Modal = memo(({ openModal, setOpenModal }) => {
    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        if (openModal.open) setOpenModal({
            ...openModal,
            open: false
        })
    })

    return (
        <div className={openModal.open ? 'modal-container open-modal-container' : 'modal-container'}>
            <div className={openModal.open ? 'modal-background open-background' : 'modal-background'}></div>
            <div className={openModal.open ? 'modal open-modal' : 'modal'} ref={modalRef} >
                <h1>{openModal.title}</h1>
                <p>{openModal.text}</p>
                {
                    (openModal.icon)
                        ? <div className="icon">
                            <FontAwesomeIcon icon={openModal.icon} />
                        </div>
                        : <div />
                }
            </div>
        </div>
    )
})

export default Modal