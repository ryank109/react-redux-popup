import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import PopupMenu from 'app/components/popup-menu';

const menu1 = [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' }
];

const menu2 = [
    { label: 'banana' },
    { label: 'watermelon' },
    { label: 'pineapple' }
];

const menu3 = [
    { label: 'Dog' },
    { label: 'Bird' },
    { label: 'Cat' },
    { label: 'Dinosaur' }
];

class Menus extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-item" onClick={this.onClickHandler('11')}>Playas</div>
                <div className="menu-item" onClick={this.onClickHandler('12')}>Colors</div>
                <div className="menu-item" onClick={this.onClickHandler('13')}>Numbers</div>
                <PopupMenu id="11" menuItems={menu1} containerElementId="mainContainer" />
                <PopupMenu id="12" menuItems={menu2} containerElementId="mainContainer" />
                <PopupMenu id="13" menuItems={menu3} containerElementId="mainContainer" />
            </div>
        );
    }

    onClickHandler(id) {
        return event => {
            const rect = event.target.getBoundingClientRect();
            this.props.openPopup(id, rect);

        };
    }
}

export default connect(null, popupActions)(Menus);
