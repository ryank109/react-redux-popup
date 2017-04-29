import { Component } from 'react';
import { connect } from 'react-redux';
import { openPopup } from 'react-redux-popup';
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
                <div
                    className="menu-item"
                    onClick={this.onClickHandler('11')}
                    ref={e => { this.menu1 = e; }}
                >
                    Playas
                </div>
                <div
                    className="menu-item"
                    onClick={this.onClickHandler('12')}
                    ref={e => { this.menu2 = e; }}
                >
                    Colors
                </div>
                <div
                    className="menu-item"
                    onClick={this.onClickHandler('13')}
                    ref={e => { this.menu3 = e; }}
                >
                    Numbers
                </div>
                <PopupMenu
                    containerElementId="mainContainer"
                    getRect={() => this.menu1.getBoundingClientRect()}
                    id="11"
                    menuItems={menu1}
                    popupClassName="popup-menu"
                />
                <PopupMenu
                    containerElementId="mainContainer"
                    getRect={() => this.menu2.getBoundingClientRect()}
                    id="12"
                    menuItems={menu2}
                    popupClassName="popup-menu"
                />
                <PopupMenu
                    containerElementId="mainContainer"
                    getRect={() => this.menu3.getBoundingClientRect()}
                    id="13"
                    menuItems={menu3}
                    popupClassName="popup-menu"
                />
            </div>
        );
    }

    onClickHandler(id) {
        return () => this.props.openPopup(id);
    }
}

export default connect(null, { openPopup })(Menus);
