import React from 'react';

class ModalMessage extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            emailAddress: '',
            emptyEmail: false,
            invalidEmail: false,
            isValid: true
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({
            emailAddress: e.target.value,
            emptyEmail: false,
            invalidEmail: false,
            isValid: true
        })
    }

    validateEmail( email ) {
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return regex.test( email );
    }

    formSubmit(e) {
        e.preventDefault();
        const submittedEmail = this.state.emailAddress;
        
        if( !submittedEmail ) {
            this.setState({
                emptyEmail: true,
                isValid: false
            });
            return;
        }

        if( !this.validateEmail( submittedEmail ) ) {
            this.setState({
                invalidEmail: true,
                isValid: false
            });
            return;
        }

        if( this.state.isValid ) {
            this.props.modalConfirm( submittedEmail );
        }
    }

    render() {
        let validationMessage;

        if( this.state.emptyEmail ) {
            validationMessage = 'No email address entered';
        }

        if( this.state.invalidEmail ) {
            validationMessage = 'Please enter a valid email address';
        }
        return (
            <div className="modal__content">
                <div className="modal__message">
                    <div className="modal__message__left">
                        Get Your Style On <span className="modal__message__left__ampersand"><i>&amp;</i></span>
                    </div>
                    <div className="modal__message__right">
                        20<span className="modal__message__right__extra">%<span>off</span></span>
                    </div>
                    <div className="modal__form">
                        <form onSubmit={this.formSubmit} className={`modal__form__container ${!this.state.isValid ? "modal__form__container--invalid" : ""}`} id="modalForm">
                            <div className="modal__form__body">
                                <input onChange={this.handleEmailChange} value={this.state.emailAddress} aria-label="Email Address" placeholder="Email Address" className="modal__form__input" type="text" id="modalFormEmail" name="modalFormEmail" />                                
                                <div className="modal__form__validation">
                                    {validationMessage}
                                </div>
                            </div>
                            <div className="modal__form__footer">
                                <button className="modal__form__submit" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalMessage;