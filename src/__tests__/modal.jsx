import { shallow } from 'enzyme';
import { Modal } from 'rrp/modal';

describe('modal', () => {
    // eslint-disable-next-line no-console
    const origConsoleError = console.error;

    const renderComponent = () => <div>View</div>;

    afterEach(() => {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
    });

    it('should render the component', () => {
        const wrapper = shallow(
            <Modal
                id="modal1"
                render={renderComponent}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the render prop', () => {
        const wrapper = shallow(
            <Modal
                anchor="left"
                className="my-popup"
                id="modal1"
                layoverClassName="my-layover"
                render={renderComponent}
                style={{ color: '#fff' }}
                transitionEnterTimeout={300}
                transitionExitTimeout={300}
                transitionName="modal"
            />
        );
        const childWrapper = shallow(wrapper.prop('render')(), { disableLifecycleMethods: true });
        expect(childWrapper).toMatchSnapshot();
    });

    it('should render the render prop', () => {
        const wrapper = shallow(
            <Modal
                anchor="left"
                className="my-popup"
                id="modal1"
                layoverClassName="my-layover"
                render={renderComponent}
                style={{ color: '#fff' }}
                transitionEnterTimeout={300}
                transitionExitTimeout={300}
                transitionName="modal"
            />
        );
        const childWrapper = shallow(wrapper.prop('render')(), { disableLifecycleMethods: true });
        expect(childWrapper).toMatchSnapshot();
    });

    it('should render with modal prop', () => {
        const wrapper = shallow(
            <Modal
                anchor="left"
                className="my-popup"
                id="modal1"
                layoverClassName="my-layover"
                modal1
                render={renderComponent}
                transitionEnterTimeout={300}
                transitionExitTimeout={300}
                transitionName="modal"
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should warn about missing id', () => {
        const mockConsole = jest.fn();
        // eslint-disable-next-line no-console
        console.error = mockConsole;

        shallow(<Modal render={renderComponent} />);
        expect(mockConsole).toHaveBeenCalledTimes(1);
        expect(mockConsole).toHaveBeenCalledWith(
            expect.stringContaining('The prop `id` is marked as required'));
    });

    it('should warn about missing render prop', () => {
        const mockConsole = jest.fn();
        // eslint-disable-next-line no-console
        console.error = mockConsole;

        shallow(<Modal id="modal1" />);
        expect(mockConsole).toHaveBeenCalledTimes(1);
        expect(mockConsole).toHaveBeenCalledWith(
            expect.stringContaining('The prop `render` is marked as required'));
    });
});
