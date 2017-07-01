import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { closePopup } from 'rrp/actions';
import ConnectedComponent, { HOCPopup } from 'rrp/popup';
import { clearAll } from 'rrp/popup-collection';

describe('popup', function() {
    const origConsoleError = console.error;
    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;
    const origRequestAnimationFrame = window.requestAnimationFrame;

    const handler = () => true;
    const mockStore = configureStore();
    const ComposedComponent = props => <div>Test</div>;
    const TestPopup = HOCPopup(ComposedComponent);

    const origSetState = TestPopup.prototype.setState;
    const origRefreshPosition = TestPopup.prototype.refreshPosition;
    const origSetPopupPosition = TestPopup.prototype.setPopupPosition;

    beforeEach(clearAll);
    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
        window.addEventListener = origAddEventListener;
        window.removeEventListener = origRemoveEventListener;
        window.requestAnimationFrame = origRequestAnimationFrame;
        TestPopup.prototype.setState = origSetState;
        TestPopup.prototype.refreshPosition = origRefreshPosition;
        TestPopup.prototype.setPopupPosition = origSetPopupPosition;
        clearAll();
    });

    it('should render the component', function() {
        const wrapper = shallow(
            <TestPopup
                closePopup={handler}
                getRect={handler}
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
                    getRect={handler}
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
            <TestPopup
                closePopup={handler}
                getRect={handler}
                id="testPopup"
                popupClassName="my-class"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with offsets', function() {
        const wrapper = shallow(
            <TestPopup
                closePopup={handler}
                getRect={handler}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
                offset={5}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should warn the missing id property', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        shallow(
            <TestPopup
                closePopup={handler}
                getRect={handler}
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );

        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });

    it('should warn the missing getRect property', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        shallow(
            <TestPopup
                closePopup={handler}
                id="popup1"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );

        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });

    it('should initialize on mount and clean up on unmount', function() {
        const getRect = () => ({ bottom: 11, left: 22, right: 33, top: 44 });

        const addEventListener = jest.fn();
        const removeEventListener = jest.fn();
        window.addEventListener = addEventListener;
        window.removeEventListener = removeEventListener;

        const mockSetState = jest.fn();
        TestPopup.prototype.setState = mockSetState;
        const wrapper = mount(
            <TestPopup
                closePopup={handler}
                getRect={getRect}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
                offset={2}
            />
        );
        const instance = wrapper.instance();
        expect(addEventListener).toHaveBeenCalledTimes(2);
        expect(addEventListener).toHaveBeenCalledWith('mouseup', instance.closePopup);
        expect(addEventListener).toHaveBeenCalledWith('resize', instance.refreshPositionHandler);
        expect(mockSetState).toHaveBeenCalledWith({
            style: {
                left: 22,
                top: 13
            }
        });

        wrapper.unmount();
        expect(removeEventListener).toHaveBeenCalledTimes(2);
        expect(removeEventListener).toHaveBeenCalledWith('mouseup', instance.closePopup);
        expect(removeEventListener).toHaveBeenCalledWith('resize', instance.refreshPositionHandler);
    });

    it('should refresh position when refreshPosition property changes', function() {
        const getRect = () => ({ bottom: 11, left: 22, right: 33, top: 44 });
        const mockRefreshPosition = jest.fn();
        TestPopup.prototype.refreshPosition = mockRefreshPosition;

        const wrapper = mount(
            <TestPopup
                closePopup={handler}
                getRect={getRect}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        wrapper.setProps({ refreshPosition: true });
        expect(mockRefreshPosition).toHaveBeenCalledTimes(1);

        wrapper.setProps({ refreshPosition: false });
        expect(mockRefreshPosition).toHaveBeenCalledTimes(2);

        wrapper.setProps({ refreshPosition: false });
        expect(mockRefreshPosition).toHaveBeenCalledTimes(2);

        wrapper.setProps({ refreshPosition: true });
        expect(mockRefreshPosition).toHaveBeenCalledTimes(3);

        wrapper.unmount();
    });

    it('should close on window mouseup event', function() {
        const getRect = () => ({ bottom: 11, left: 22, right: 33, top: 44 });
        const closePopup = jest.fn();
        const wrapper = mount(
            <TestPopup
                closePopup={closePopup}
                getRect={getRect}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        window.dispatchEvent(new Event('mouseup'));
        expect(closePopup).toHaveBeenCalledTimes(1);
        expect(closePopup).toHaveBeenCalledWith('testPopup');

        wrapper.unmount();
    });

    it('should dispatch closePopup action when closePopup is not specified on window mouseup event', function() {
        const getRect = () => ({ bottom: 11, left: 22, right: 33, top: 44 });
        const dispatch = jest.fn();
        const wrapper = mount(
            <TestPopup
                dispatch={dispatch}
                getRect={getRect}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        window.dispatchEvent(new Event('mouseup'));
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(closePopup('testPopup'));

        wrapper.unmount();
    });

    it('should close on window resize event', function() {
        const getRect = () => ({ bottom: 11, left: 22, right: 33, top: 44 });
        const requestAnimationFrame = callback => callback();
        const setPopupPosition = jest.fn();
        const wrapper = mount(
            <TestPopup
                closePopup={handler}
                getRect={getRect}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );

        window.requestAnimationFrame = requestAnimationFrame;
        TestPopup.prototype.setPopupPosition = setPopupPosition;

        window.dispatchEvent(new Event('resize'));
        expect(setPopupPosition).toHaveBeenCalledTimes(1);

        wrapper.unmount();
    });

    it('should stop event propagation on mouseup', function() {
        const getRect = () => ({ bottom: 11, left: 22, right: 33, top: 44 });
        const stopPropagation = jest.fn();
        const wrapper = mount(
            <TestPopup
                closePopup={handler}
                getRect={getRect}
                id="testPopup"
                popupClassName="my-class"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        wrapper.find('.my-class').simulate('mouseup', { stopPropagation });
        expect(stopPropagation).toHaveBeenCalledTimes(1);
    });
});
