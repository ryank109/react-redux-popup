import { mount } from 'enzyme';
import TransitionWrapper from 'rrp/transition-wrapper';

describe('transition-wrapper', () => {
    const renderComponent = () => <div>View</div>;

    it.skip('should render component', () => {
        const wrapper = mount(
            <TransitionWrapper
                render={renderComponent}
                transitionEnterTimeout={200}
                transitionExitTimeout={200}
                transitionName="some-transition"
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should append to portal on mount', () => {

    });

    it.skip('should append to portal on is portal ready', () => {

    });

    it.skip('should clean up', () => {

    });
});
