import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedComponent, { Portal, popupSelector } from 'rrp/portal';
import collection, { TYPE_MODAL, TYPE_POPUP, add, clearAll } from 'rrp/popup-collection';

describe('portal', function() {
    const mockStore = configureStore();
    const TestComponent = props => <div>test component</div>;

    beforeEach(clearAll);
    afterEach(clearAll);

    it('should render the component', function() {
        const wrapper = shallow(<Portal />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with modal type', function() {
        add(TYPE_MODAL, TestComponent, { id: 'modal1', prop1: 'value1' });
        const wrapper = shallow(<Portal modal1 />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with popup type', function() {
        add(TYPE_POPUP, TestComponent, { id: 'popup1', prop1: 'value1' });
        const wrapper = shallow(<Portal popup1 />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should not render the model when id is not present', function() {
        add(TYPE_MODAL, TestComponent, { id: 'modal1', prop1: 'value1' });
        const wrapper = shallow(<Portal />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should not render the popup when id is not present', function() {
        add(TYPE_POPUP, TestComponent, { id: 'popup1', prop1: 'value1' });
        const wrapper = shallow(<Portal />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should return the state', function() {
        const state = {
            popup: { prop1: 'value1' }
        };
        expect(popupSelector(state)).toEqual({ prop1: 'value1' });
    });
});
