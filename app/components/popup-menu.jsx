import _ from 'lodash';
import { Component, PropTypes } from 'react';
import MenuItem from 'rrp/components/popup-menu-item';
import Popup from 'rrp/popup/popup';

class PopupMenu extends Component {
    render() {
        return <div className="popup-menu">{this.renderMenuItems()}</div>;
    }

    renderMenuItems() {
        return _.map(this.props.menuItems, item => {
            return <MenuItem {...item} />;
        });
    }
}

PopupMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string
    })).isRequired
};


export default Popup(PopupMenu);
