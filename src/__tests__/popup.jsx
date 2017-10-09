import { shallow } from 'enzyme';
import { closePopup } from 'rrp/actions';
import { Popup, closePopupHandler, popupSelector } from 'rrp/popup';

describe('popup', () => {
    // eslint-disable-next-line no-console
    const origConsoleError = console.error;

    const handler = () => true;
    const getRect = () => ({
        bottom: 150,
        left: 200,
        right: 300,
        top: 100,
    });
    const renderFn = () => <div>Test</div>;

    afterEach(() => {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
    });

    it('should get the state', () => {
        expect(popupSelector({})).toBeFalsy();
        expect(popupSelector({ popup: 'abc' })).toBe('abc');
    });

    it('should render the component with defaults', () => {
        const wrapper = shallow(
            <Popup
                closePopup={handler}
                dispatch={handler}
                getRect={getRect}
                id="testPopup"
                render={renderFn}
                testPopup
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component without testPopup prop', () => {
        const wrapper = shallow(
            <Popup
                closePopup={handler}
                dispatch={handler}
                getRect={getRect}
                id="testPopup"
                render={renderFn}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the render prop', () => {
        const wrapper = shallow(
            <Popup
                anchor="left"
                className="my-popup"
                closePopup={handler}
                dispatch={handler}
                isPortalReady
                offset={10}
                getRect={getRect}
                id="testPopup"
                refreshPosition
                render={renderFn}
                style={{ color: '#fff' }}
                testPopup
                transitionEnterTimeout={300}
                transitionExitTimeout={300}
                transitionName="popup"
            />
        );
        const childWrapper = shallow(wrapper.prop('render')(), { disableLifecycleMethods: true });
        expect(childWrapper).toMatchSnapshot();
    });

    it('should call correct close popup handler', () => {
        const mockDispatch = jest.fn();
        closePopupHandler('popupId', null, mockDispatch)();
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(closePopup('popupId'));

        const mockClosePopup = jest.fn();
        closePopupHandler('popupId', mockClosePopup, mockDispatch)();
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockClosePopup).toHaveBeenCalledTimes(1);
        expect(mockClosePopup).toHaveBeenCalledWith('popupId');
    });

    it('should warn about missing id', () => {
        const mockConsole = jest.fn();
        // eslint-disable-next-line no-console
        console.error = mockConsole;

        shallow(
            <Popup
                closePopup={handler}
                dispatch={handler}
                getRect={getRect}
                render={renderFn}
            />
        );
        expect(mockConsole).toHaveBeenCalledTimes(1);
        expect(mockConsole).toHaveBeenCalledWith(
            expect.stringContaining('The prop `id` is marked as required'));
    });

    it('should warn about missing render prop', () => {
        const mockConsole = jest.fn();
        // eslint-disable-next-line no-console
        console.error = mockConsole;

        shallow(
            <Popup
                closePopup={handler}
                dispatch={handler}
                getRect={getRect}
                id="popup1"
            />
        );
        expect(mockConsole).toHaveBeenCalledTimes(1);
        expect(mockConsole).toHaveBeenCalledWith(
            expect.stringContaining('The prop `render` is marked as required'));
    });
});
