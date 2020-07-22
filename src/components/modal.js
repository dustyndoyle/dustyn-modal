import React from 'react';
import ModalMessage from './modalMessage';
import ModalConfirmation from './modalConfirmation';
import './modal.scss';

function Modal( props ) {
    
    let message = <ModalMessage modalConfirm={props.modalConfirm} />;

    if( props.modalView ) {
        message = <ModalConfirmation closeModal={props.modalTrigger} />
    }
    return (
        <div className="modal modal__container">
            <div onClick={props.modalTrigger} className="modal__overlay"></div>
            <div className="modal__inner">
                <div className="modal__close">
                    <button onClick={props.modalTrigger} type="button" className="modal__close__button">Close</button>
                </div>
                <div className="modal__info">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Modal;