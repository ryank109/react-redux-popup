import { Component } from 'react';
import { connect } from 'react-redux';
import { closePopup, openPopup, refreshPopupPosition } from 'react-redux-popup';
import Menus from 'app/menus';
import ModalPopup from 'app/components/modal-popup';
import { Portal } from 'react-redux-popup';

class App extends Component {
    constructor(props) {
        super(props);
        this.openModal = () => this.props.openPopup('modal1');
        this.scroll = () => this.props.refreshPopupPosition();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    render() {
        return (
            <div
                style={{overflow:'auto', height:'400px'}}
                onScroll={this.scroll}
                ref={div => { this.containerElement = div; }}>
                <button onClick={this.openModal}>Open Modal</button>
                <div className="abc" style={{height:'1000px'}}>
                    <Menus />
                </div>
                <ModalPopup id="modal1" />
                <Portal />
            </div>
        );
    }
}

export default connect(null, { closePopup, openPopup, refreshPopupPosition })(App);
