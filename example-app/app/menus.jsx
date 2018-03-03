import { Component } from 'react';
import { connect } from 'react-redux';
import { closePopup, openPopup } from 'react-redux-popup';
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
    constructor(props) {
        super(props);
        this.state = {
            anchors: [ 'top', 'bottom', 'left', 'right' ],
            menus: [ menu1, menu2, menu3, menu4 ]
        };
        this.menu = {};
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-item" onClick={this.onClickHandler('0')} ref={e => { this.menu[0] = e; }}>Playas</div>
                <div className="menu-item" onClick={this.onClickHandler('1')} ref={e => { this.menu[1] = e; }}>Colors</div>
                <div className="menu-item" onClick={this.onClickHandler('2')} ref={e => { this.menu[2] = e; }}>Numbers</div>
                <div className="menu-item" onClick={this.onClickHandler('3')} ref={e => { this.menu[3] = e; }}>Rainbow</div>
                <button onClick={this.changeMenu.bind(this)}>Change Menu</button>
                {this.renderMenus()}
            </div>
        );
    }

    renderMenus() {
        return this.state.menus.map(
            (menu, index) => (
                <PopupMenu
                    anchor={this.state.anchors[index]}
                    getRect={() => this.menu[index].getBoundingClientRect()}
                    id={`${index}`}
                    key={index}
                    menuItems={menu}
                    onClick={() => true}
                    popupClassName="popup-menu"
                    offset={5}
                />
            )
        );
    }

    changeMenu() {
        this.setState({
            menus: [ menu2, menu3, menu4, menu1 ]
        });
    }

    onClickHandler(id) {
        return event => {
            this.props.openPopup(id);
        };
    }
}

export default connect(null, { closePopup, openPopup })(Menus);
