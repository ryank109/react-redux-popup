import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import PopupMenu from 'app/components/popup-menu';

const menu1 = [
    { label: 'brian' },
    { label: 'tomasso' },
    { label: 'garcia' }
];

const menu2 = [
    { label: 'red' },
    { label: 'orange' },
    { label: 'green' },
    { label: 'purple' }
];

const menu3 = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '7' },
    { label: '8' },
];

const menu4 = [
    { label: 'gold' }
];

class Menus extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-item" onClick={this.onClickHandler('1')}>Playas</div>
                <div className="menu-item" onClick={this.onClickHandler('2')}>Colors</div>
                <div className="menu-item" onClick={this.onClickHandler('3')}>Numbers</div>
                <div className="menu-item" onClick={this.onClickHandler('4')}>Rainbow</div>
                <PopupMenu id="1" popupClassName="popup-menu" menuItems={menu1} containerElementId="mainContainer" />
                <PopupMenu id="2" popupClassName="popup-menu" menuItems={menu2} containerElementId="mainContainer" />
                <PopupMenu id="3" popupClassName="popup-menu" menuItems={menu3} containerElementId="mainContainer" />
                <PopupMenu id="4" popupClassName="popup-menu" menuItems={menu4} containerElementId="mainContainer" />
            </div>
        );
    }

    onClickHandler(id) {
        return event => {
            const rect = event.target.getBoundingClientRect();
            this.props.openPopup(id, { top: rect.bottom, left: rect.left } );

        };
    }
}

export default connect(null, popupActions)(Menus);
