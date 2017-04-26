import { map } from 'lodash/fp';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-redux-popup';
import MenuItem from 'app/components/popup-menu-item';

class PopupMenu extends Component {
    render() {
        return <div className="popup-menu__container">{this.renderMenuItems()}</div>;
    }

    renderMenuItems() {
        return map(item => {
            return <MenuItem {...item} key={item.label}/>;
        }, this.props.menuItems);
    }
}

PopupMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string
    })).isRequired
};


export default Popup(PopupMenu);
