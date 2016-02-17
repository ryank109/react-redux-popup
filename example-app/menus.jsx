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
                <PopupMenu id="1" menuItems={menu1} />
                <PopupMenu id="2" menuItems={menu2} />
                <PopupMenu id="3" menuItems={menu3} />
                <PopupMenu id="4" menuItems={menu4} />
            </div>
        );
    }

    onClickHandler(id) {
        return event => {
            const rect = event.target.getBoundingClientRect();
            this.props.dispatch(popupActions.openPopup(id, rect));

        };
    }
}

export default connect()(Menus);
