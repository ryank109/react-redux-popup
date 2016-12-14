import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import { bindActionCreators } from 'redux';
import Menus from 'app/menus';
import ModalPopup from 'app/components/modal-popup';
import { Portal } from 'react-redux-popup';

class App extends Component {
    render() {
        const actions = bindActionCreators(popupActions, this.props.dispatch);
        return (
            <div
                style={{overflow:'auto', height:'400px'}}
                onScroll={this.scroll.bind(this)}
                ref="main">
                <button onClick={this.openModal.bind(this)}>Open Modal</button>
                <div style={{height:'1000px'}}>
                    <Menus />
                </div>
                <ModalPopup id="modal1" popupClassName="modal-container" layoverClassName="modal-layover" closePopup={actions.closePopup}/>
                <Portal
                    modalTransitionEnterTimeout={300}
                    modalTransitionLeaveTimeout={300}
                    popupTransitionEnterTimeout={100}
                    popupTransitionLeaveTimeout={100} />
            </div>
        );
    }

    scroll(event) {
        this.props.updateScrollPosition(this.refs.main.scrollLeft, this.refs.main.scrollTop);
    }

    openModal() {
        this.props.openPopup('modal1');
    }
}

export default connect(null, popupActions)(App);
