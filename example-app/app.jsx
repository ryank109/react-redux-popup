import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import { bindActionCreators } from 'redux';
import Menus from 'app/menus';
import ModalPopup from 'app/components/modal-popup';
import { PopupSandbox } from 'react-redux-popup';

class App extends Component {
    render() {
        const actions = bindActionCreators(popupActions, this.props.dispatch);
        return (
            <div>
                <Menus />
                <button onClick={this.openModal.bind(this)}>Open Modal</button>
                <ModalPopup id="modal1" popupClassName="modal-container" layoverClassName="modal-layover" closePopup={actions.closePopup}/>
                <PopupSandbox
                    modalTransitionEnterTimeout={300}
                    modalTransitionLeaveTimeout={300}
                    popupTransitionEnterTimeout={100}
                    popupTransitionLeaveTimeout={100} />
            </div>
        );
    }

    openModal() {
        this.props.dispatch(popupActions.openPopup('modal1'));
    }
}

export default connect(null)(App);
