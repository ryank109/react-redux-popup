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
    constructor(props) {
        super(props);
        this.state = {
            menus: [ menu1, menu2, menu3, menu4 ]
        };
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-item" onClick={this.onClickHandler('0')}>Playas</div>
                <div className="menu-item" onClick={this.onClickHandler('1')}>Colors</div>
                <div className="menu-item" onClick={this.onClickHandler('2')}>Numbers</div>
                <div className="menu-item" onClick={this.onClickHandler('3')}>Rainbow</div>
                <button onClick={this.changeMenu.bind(this)}>Change Menu</button>
                {this.renderMenus()}
            </div>
        );
    }

    renderMenus() {
        return this.state.menus.map(
            (menu, index) => <PopupMenu key={index} id={`${index}`} popupClassName="popup-menu" menuItems={menu} onClick={() => true}/>);
    }

    changeMenu() {
        this.setState({
            menus: [ menu2, menu3, menu4, menu1 ]
        });
    }

    onClickHandler(id) {
        return event => {
            const top = event.target.offsetTop + event.target.offsetHeight;
            const left = event.target.offsetLeft;
            this.props.openPopup(id, { top, left });
        };
    }
}

export default connect(null, popupActions)(Menus);
