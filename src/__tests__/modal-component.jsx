import { mount, shallow } from 'enzyme';
import ModalComponent from 'rrp/modal-component';

describe('modal-component', () => {
    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;
    const origSetState = ModalComponent.prototype.setState;
    const origUpdatePosition = ModalComponent.prototype.updatePosition;

    const renderFn = () => <div>View</div>;

    afterEach(() => {
        window.addEventListener = origAddEventListener;
        window.removeEventListener = origRemoveEventListener;
        ModalComponent.prototype.setState = origSetState;
        ModalComponent.prototype.updatePosition = origUpdatePosition;
    });

    it('should render component', () => {
        const wrapper = shallow(
            <ModalComponent
                className="my-class"
                layoverClassName="my-layover-class"
                render={renderFn}
                style={{ color: '#fff' }}
            />,
            { disableLifecycleMethods: true }
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should initialize on mount', () => {
        const mockAddEventListener = jest.fn();
        window.addEventListener = mockAddEventListener;
        const mockUpdatePosition = jest.fn();
        ModalComponent.prototype.updatePosition = mockUpdatePosition;

        const wrapper = shallow(<ModalComponent render={renderFn} />);
        expect(mockUpdatePosition).toHaveBeenCalledTimes(1);
        expect(mockAddEventListener).toHaveBeenCalledTimes(1);
        expect(mockAddEventListener).toHaveBeenCalledWith(
            'resize', wrapper.instance().resizeHandler);
    });

    it('should remove event listeners on unmount', () => {
        const mockRemoveEventListener = jest.fn();
        window.addEventListener = jest.fn();
        window.removeEventListener = mockRemoveEventListener;
        ModalComponent.prototype.updatePosition = jest.fn();

        const wrapper = shallow(<ModalComponent render={renderFn} />);
        const instance = wrapper.instance();
        wrapper.unmount();

        expect(mockRemoveEventListener).toHaveBeenCalledTimes(1);
        expect(mockRemoveEventListener).toHaveBeenCalledWith('resize', instance.resizeHandler);
    });

    it('should update position on resize event', done => {
        const mockUpdatePosition = () => {
            expect(true).toBeTruthy();
            done();
        };
        ModalComponent.prototype.updatePosition = mockUpdatePosition;
        const wrapper = mount(<ModalComponent render={renderFn} />);
        window.dispatchEvent(new Event('resize'));
        wrapper.unmount();
    });

    it('should set state on update position', () => {
        const mockSetState = jest.fn();
        ModalComponent.prototype.setState = mockSetState;

        window.innerHeight = 500;
        window.innerWidth = 500;
        const clientHeight = 100;
        const clientWidth = 200;

        const component = new ModalComponent();
        component.modal = {
            clientHeight,
            clientWidth,
        };
        component.updatePosition();

        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({
            left: 150,
            top: 200,
        });
    });
});
