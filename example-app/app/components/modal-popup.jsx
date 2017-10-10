import { connect } from 'react-redux';
import { Modal, closePopup } from 'react-redux-popup';
import Menus from 'app/menus2';

const doSomethingAction = () => ({ type: 'DO_SOMETHING' });
const selector = state => state.modal;

const View = props => (
    <div>
        <label>This is modal popup</label>
        <label>Open menu from the modal</label>
        <Menus />
        <button onClick={props.doSomethingAction}>Activate</button>
        <button onClick={() => props.closePopup(props.id)}>OK</button>
        {props.isActivated && <label>Activated!</label>}
    </div>
);

const ConnectedView = connect(selector, { closePopup, doSomethingAction })(View);

export default props => <Modal id={props.id} render={() => <ConnectedView id={props.id}/>} />;
