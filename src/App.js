import React from 'react';
import Modal from './components/modal';
import './App.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            modalShow: false,
            modalConfirm: false,
            isValidating: false
        }

        this.modalTriggerClick = this.modalTriggerClick.bind(this);
        this.modalConfirmation = this.modalConfirmation.bind(this);
    }

    modalTriggerClick(e) {
        e.preventDefault();
        this.setState({
            modalShow: !this.state.modalShow,
            modalConfirm: false
        });
    }

    modalConfirmation(email) {
        console.log( email );

        this.setState({
            modalConfirm: true
        });
    }

    render() {
        return (
            <div className="App">
                <div className="modal-trigger modal-trigger__container">
                    <button onClick={this.modalTriggerClick} type="button" className="modal-trigger__button">Launch the modal</button>
                </div>
                { this.state.modalShow &&
                    <Modal modalView={this.state.modalConfirm} modalTrigger={this.modalTriggerClick} modalConfirm={this.modalConfirmation} />
                }
            </div>
        );
    }
}

export default App;
