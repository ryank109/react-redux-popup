import { mount, shallow } from 'enzyme';
import PopupComponent from 'rrp/popup-component';

describe('popup-component', () => {
    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;
    const origRequestAnimationFrame = window.requestAnimationFrame;
    const origSetState = PopupComponent.prototype.setState;
    const origRefreshPosition = PopupComponent.prototype.refreshPosition;

    const getRect = () => ({
        bottom: 150,
        left: 200,
        right: 300,
        top: 100,
    });
    const handler = () => true;
    const renderComponent = () => <div>Some View</div>;

    afterEach(() => {
        window.addEventListener = origAddEventListener;
        window.removeEventListener = origRemoveEventListener;
        window.requestAnimationFrame = origRequestAnimationFrame;
        PopupComponent.prototype.setState = origSetState;
        PopupComponent.prototype.refreshPosition = origRefreshPosition;
    });

    it('should render the component', () => {
        const wrapper = shallow(
            <PopupComponent
                anchor="bottom"
                className="my-class"
                closePopup={handler}
                getRect={handler}
                offset={0}
                refreshPosition
                render={renderComponent}
            />,
            { disableLifecycleMethods: true }
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should override the top and left styles', () => {
        const wrapper = shallow(
            <PopupComponent
                anchor="bottom"
                closePopup={handler}
                getRect={handler}
                offset={0}
                refreshPosition
                render={renderComponent}
                style={{ color: '#fff', left: 100, top: 50 }}
            />,
            { disableLifecycleMethods: true }
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should calculate the position and initialize event listeners', () => {
        const mockSetState = jest.fn();
        const mockAddEventListener = jest.fn();
        PopupComponent.prototype.setState = mockSetState;
        window.addEventListener = mockAddEventListener;
        const closePopupHandler = () => true;

        const wrapper = mount(
            <PopupComponent
                anchor="bottom"
                closePopup={closePopupHandler}
                getRect={getRect}
                offset={10}
                refreshPosition
                render={renderComponent}
            />
        );

        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({
            left: 200,
            top: 160,
        });
        expect(mockAddEventListener).toHaveBeenCalledWith('mouseup', closePopupHandler);
        expect(mockAddEventListener).toHaveBeenCalledWith(
            'resize',
            wrapper.instance().refreshPositionHandler);
    });

    it('should call refresh position on prop changes', () => {
        window.requestAnimationFrame = jest.fn();
        window.addEventListener = jest.fn();

        const wrapper = mount(
            <PopupComponent
                anchor="bottom"
                closePopup={handler}
                getRect={getRect}
                offset={10}
                refreshPosition
                render={renderComponent}
            />
        );

        const spy = jest.spyOn(wrapper.instance(), 'setPopupPosition');

        // REFRESH_POSITION
        wrapper.setProps({ refreshPosition: false });
        expect(spy).toHaveBeenCalledTimes(1);

        wrapper.setProps({ refreshPosition: true });
        expect(spy).toHaveBeenCalledTimes(2);

        // if the prop is not related to refreshPosition
        wrapper.setProps({ className: 'something-new' });
        expect(spy).toHaveBeenCalledTimes(2);

        // if the refreshPosition prop is same
        wrapper.setProps({
            refreshPosition: true,
        });
        expect(spy).toHaveBeenCalledTimes(2);

        // ANCHOR
        wrapper.setProps({ anchor: 'left' });
        expect(spy).toHaveBeenCalledTimes(3);

        // OFFSET
        wrapper.setProps({ offset: 15 });
        expect(spy).toHaveBeenCalledTimes(4);

        // GET_RECT
        wrapper.setProps({ getRect: () => true });
        expect(spy).toHaveBeenCalledTimes(5);

        // clean up mocks
        spy.mockReset();
        spy.mockRestore();
    });

    it('should remove event listener on unmoumnt', () => {
        const mockRemoveEventListener = jest.fn();
        window.addEventListener = jest.fn();
        window.removeEventListener = mockRemoveEventListener;

        const closePopupHandler = () => true;

        const wrapper = shallow(
            <PopupComponent
                anchor="bottom"
                closePopup={closePopupHandler}
                getRect={handler}
                offset={0}
                refreshPosition
                render={renderComponent}
            />,
            { disableLifecycleMethods: true }
        );

        const instance = wrapper.instance();
        wrapper.unmount();

        expect(mockRemoveEventListener).toHaveBeenCalledTimes(2);
        expect(mockRemoveEventListener).toHaveBeenCalledWith('mouseup', closePopupHandler);
        expect(mockRemoveEventListener).toHaveBeenCalledWith('resize', instance.refreshPositionHandler);
    });

    it('should stop event propagation on mouseup event', () => {
        const mockStopPropagation = jest.fn();
        const closePopupHandler = () => true;

        const wrapper = mount(
            <PopupComponent
                anchor="bottom"
                closePopup={closePopupHandler}
                getRect={getRect}
                offset={10}
                refreshPosition
                render={renderComponent}
            />
        );

        wrapper.first().simulate('mouseup', { stopPropagation: mockStopPropagation });
        expect(mockStopPropagation).toHaveBeenCalledTimes(1);

        // clean up the windows events
        wrapper.unmount();
    });

    it('should close popup on window mouseup event', () => {
        const closePopupHandler = jest.fn();
        const wrapper = mount(
            <PopupComponent
                anchor="bottom"
                closePopup={closePopupHandler}
                getRect={getRect}
                offset={10}
                refreshPosition
                render={renderComponent}
            />
        );

        window.dispatchEvent(new Event('mouseup'));
        expect(closePopupHandler).toHaveBeenCalledTimes(1);

        // clean up the windows events
        wrapper.unmount();
    });

    it('should refresh position on window resize event', () => {
        const mockRefreshPosition = jest.fn();
        PopupComponent.prototype.refreshPosition = mockRefreshPosition;
        const wrapper = mount(
            <PopupComponent
                anchor="bottom"
                closePopup={handler}
                getRect={getRect}
                offset={10}
                refreshPosition
                render={renderComponent}
            />
        );

        window.dispatchEvent(new Event('resize'));
        expect(mockRefreshPosition).toHaveBeenCalledTimes(1);

        // clean up the windows events
        wrapper.unmount();
    });

    it('should call setPopupPosition on refresh position', done => {
        PopupComponent.prototype.setPopupPosition = () => {
            expect(true).toBeTruthy();
            done();
        };
        const component = new PopupComponent();
        component.refreshPosition();
    });
});
