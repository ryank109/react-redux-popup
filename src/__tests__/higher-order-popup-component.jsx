import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedComponent, { HigherOrderPopupComponent } from 'rrp/higher-order-popup-component';
import collection, { clearAll } from 'rrp/popup-collection';
import { updatePopupProps, closePopup } from 'rrp/actions';

describe('higher-order-popup-component', function() {
    const origConsoleError = console.error;
    const handler = () => true;
    const mockStore = configureStore();
    const ComposedComponent = <div>Test</div>;
    const TestComponent = HigherOrderPopupComponent(ComposedComponent, 'someType');

    beforeEach(clearAll);
    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;

        clearAll();
    });

    it('should render the component', function() {
        const wrapper = shallow(
            <TestComponent
                closePopup={handler}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with provider', function() {
        const ConnectedTestComponent = ConnectedComponent(ComposedComponent, 'someType');
        const wrapper = shallow(
            <Provider store={mockStore()}>
                <ConnectedTestComponent
                    closePopup={handler}
                    id="testPopup"
                    prop1="prop1_value"
                    updatePopupProps={handler}
                />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should push and remove from collection when mounted and unmounted', function() {
        const closePopup = jest.fn();
        const wrapper = mount(
            <TestComponent
                closePopup={closePopup}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        expect(collection.length).toBe(1);
        expect(collection).toEqual(expect.arrayContaining([
            [
                'someType',
                ComposedComponent,
                expect.objectContaining({
                    prop1: 'prop1_value'
                })
            ]
        ]));

        wrapper.unmount();
        expect(collection.length).toBe(0);
        expect(closePopup).toHaveBeenCalledWith('testPopup');
    });

    it('should dispatch closePopup action when closePopup is not specified', function() {
        const dispatch = jest.fn();
        const wrapper = mount(
            <TestComponent
                dispatch={dispatch}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );
        wrapper.unmount();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(closePopup('testPopup'));
    });

    it('should update the props in the collection and call updatePopupProps', function() {
        const updatePopupProps = jest.fn();
        const wrapper = mount(
            <TestComponent
                closePopup={handler}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={updatePopupProps}
            />
        );
        wrapper.setProps({ prop1: 'updated_value' });
        expect(updatePopupProps).toHaveBeenCalledWith('testPopup', {
            updatePopupProps,
            closePopup: handler,
            id: 'testPopup',
            prop1: 'updated_value'
        });

        wrapper.unmount();
    });

    it('should not update the props in the collection and call updatePopupProps when props are same', function() {
        const updatePopupProps = jest.fn();
        const wrapper = mount(
            <TestComponent
                closePopup={() => true}
                id="testPopup"
                prop1="prop1_value"
                updatePopupProps={updatePopupProps}
            />
        );
        wrapper.update();
        expect(updatePopupProps).toHaveBeenCalledTimes(0);
        wrapper.unmount();
    });

    it('should warn the missing id property', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        shallow(
            <TestComponent
                closePopup={handler}
                prop1="prop1_value"
                updatePopupProps={handler}
            />
        );

        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });
});
