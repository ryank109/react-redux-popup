import { Component } from 'react';
import PropTypes from 'prop-types';

export default class PopupMenuItem extends Component {
    render() {
        const label = this.props.label;
        return <a className="popup-menu-item" onClick={() => console.log(label)}>{label}</a>;
    }
}

PopupMenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string
};
