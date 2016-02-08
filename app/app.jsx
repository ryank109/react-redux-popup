import { Component } from 'react';
import { connect } from 'react-redux';

import { openPopup } from 'rrp/popup/actions';
import PopupMenu from 'rrp/components/popup-menu';

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

export default class App extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-item" ref="menu1" onClick={this.onClickHandler('1', 'menu1')}>Playas</div>
                <div className="menu-item" ref="menu2" onClick={this.onClickHandler('2', 'menu2')}>Colors</div>
                <div className="menu-item" ref="menu3" onClick={this.onClickHandler('3', 'menu3')}>Numbers</div>
                <div className="menu-item" ref="menu4" onClick={this.onClickHandler('4', 'menu4')}>Rainbow</div>
                <PopupMenu id="1" menuItems={menu1} />
                <PopupMenu id="2" menuItems={menu2} />
                <PopupMenu id="3" menuItems={menu3} />
                <PopupMenu id="4" menuItems={menu4} />
            </div>
        );
    }

    onClickHandler(id, container) {
        return () => this.props.dispatch(openPopup(id, this.refs[container]));
    }
}

export default connect(null)(App);
