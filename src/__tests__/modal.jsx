import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedComponent, { HOCModal } from 'rrp/modal';
import { clearAll } from 'rrp/popup-collection';

describe('modal', function() {
    const origConsoleError = console.error;
    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;
    const origRequestAnimationFrame = window.requestAnimationFrame;

    const handler = () => true;
    const mockStore = configureStore();
    const ComposedComponent = props => <div>Test</div>;
    const TestModal = HOCModal(ComposedComponent);

    const origSetState = TestModal.prototype.setState;
    const origUpdatePosition = TestModal.prototype.updatePosition;

    beforeEach(clearAll);
    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
        window.addEventListener = origAddEventListener;
        window.removeEventListener = origRemoveEventListener;
        window.requestAnimationFrame = origRequestAnimationFrame;
        TestModal.prototype.setState = origSetState;
        TestModal.prototype.updatePosition = origUpdatePosition;

        clearAll();
    });

    it('should render the component', function() {
        const wrapper = shallow(
            <TestModal
                closePopup={handler}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with provider', function() {
        const ConnectedModal = ConnectedComponent(ComposedComponent);
        const wrapper = mount(
            <Provider store={mockStore()}>
                <ConnectedModal
                    closePopup={handler}
                    id="testPopup"
                    prop1="prop1_value"
                    updatePopupProps={handler}
                />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('should render the component with popup classname', function() {
        const wrapper = shallow(
            <TestModal
                closePopup={handler}
                id="testPopup"
                popupClassName="my-class"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with layover classname', function() {
        const wrapper = shallow(
            <TestModal
                closePopup={handler}
                id="testPopup"
                layoverClassName="my-class"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with popup classname', function() {
        const wrapper = shallow(
            <TestModal
                closePopup={handler}
                id="testPopup"
                popupClassName="my-class"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should warn the missing id property', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        shallow(
            <TestModal
                closePopup={handler}
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );

        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });

    it('should initialize on mount and clean up on unmount', function() {
        const addEventListener = jest.fn();
        const removeEventListener = jest.fn();
        window.addEventListener = addEventListener;
        window.removeEventListener = removeEventListener;

        const mockSetState = jest.fn();
        TestModal.prototype.setState = mockSetState;
        const wrapper = mount(
            <TestModal
                closePopup={handler}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        const instance = wrapper.instance();
        expect(addEventListener).toHaveBeenCalledTimes(1);
        expect(addEventListener).toHaveBeenCalledWith('resize', instance.resizeHandler);
        expect(mockSetState).toHaveBeenCalledWith({
            style: {
                left: expect.any(Number),
                top: expect.any(Number)
            }
        });

        wrapper.unmount();
        expect(removeEventListener).toHaveBeenCalledTimes(1);
        expect(removeEventListener).toHaveBeenCalledWith('resize', instance.resizeHandler);
    });

    it('should close on window resize event', function() {
        const requestAnimationFrame = callback => callback();
        const updatePosition = jest.fn();
        const wrapper = mount(
            <TestModal
                closePopup={handler}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );

        window.requestAnimationFrame = requestAnimationFrame;
        TestModal.prototype.updatePosition = updatePosition;

        window.dispatchEvent(new Event('resize'));
        expect(updatePosition).toHaveBeenCalledTimes(1);

        wrapper.unmount();
    });
});
