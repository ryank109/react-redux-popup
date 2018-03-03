import { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-redux-popup';
import MenuItem from 'app/components/popup-menu-item';


const PopupMenu = props => (
    <div className="popup-menu__container">
        {props.menuItems.map(item => <MenuItem {...item} key={item.label} />)}
    </div>
);

PopupMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
    })).isRequired,
};


export default props => (
    <Popup
        anchor={props.anchor}
        className="popup-menu"
        getRect={props.getRect}
        id={props.id}
        offset={props.offset}
        render={() => <PopupMenu menuItems={props.menuItems} />}
    />
);
