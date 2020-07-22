import React from 'react';
import './modal-confirm.scss';

function ModalConfirmation(props) {

    return (
        <div className="modal-confirm modal-confirm__container">
            <div className="modal-confirm__title">Just Like Old Friends</div>
            <div className="modal-confirm__dots">
                <span className="modal-confirm__dot"></span>
                <span className="modal-confirm__dots-line"></span>
                <span className="modal-confirm__three-dot">
                    <span className="modal-confirm__dot"></span>
                    <span className="modal-confirm__dot--large"></span>
                    <span className="modal-confirm__dot"></span>
                </span>
            </div>
            <div className="modal-confirm__message">
                We'll keep you updated on any deals, news, or gossip that comes our way!
            </div>
            <div className="modal-confirm__cta">
                <a onClick={props.closeModal} href="#shop" className="modal-confirm__cta__button">Go Shop!</a>
            </div>
        </div>
    );
}

export default ModalConfirmation;