import { mount, shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';
import { Portal, getPortalElement, setPortalElement } from 'rrp/portal';

describe('portal', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Portal portalInitialized={() => true} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should initialize the portal element on mount', () => {
        const portalInitialized = jest.fn();
        const wrapper = mount(<Portal portalInitialized={portalInitialized} />);
        expect(wrapper).toMatchSnapshot();
        expect(portalInitialized).toHaveBeenCalledTimes(1);
    });

    it('should not update on prop changes', () => {
        const spy = jest.spyOn(Portal.prototype, 'shouldComponentUpdate');

        const portalInitialized = jest.fn();
        const wrapper = shallow(<Portal portalInitialized={portalInitialized} />);
        wrapper.setProps({ portalInitialized: () => true });

        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockReset();
        spy.mockRestore();
    });

    it('should set and get portal element', () => {
        const elem = 'some elem';
        setPortalElement(elem);
        expect(getPortalElement()).toBe(elem);
    });
});
