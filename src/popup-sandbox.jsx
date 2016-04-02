import { Component } from 'react';
import { connect } from 'react-redux';
import collection from 'rrp/popup-collection';

export const popupSelector = state => state.popup;

class Sandbox extends Component {
    render() {
        return <div>{this.renderPopups()}</div>;
    }

    renderPopups() {
        return collection.filter(popup => this.props[popup.props.id]);
    }
}

export default connect(popupSelector)(Sandbox);
