import PropTypes from 'prop-types';
import { PureComponent } from 'react';

export default class ModalComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            top: 0,
        };
        this.resizeHandler = () => window.requestAnimationFrame(() => this.updatePosition());
    }

    componentDidMount() {
        this.updatePosition();
        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    updatePosition() {
        const { clientHeight, clientWidth } = this.modal;
        this.setState({
            left: (window.innerWidth - clientWidth) / 2,
            top: (window.innerHeight - clientHeight) / 2,
        });
    }

    render() {
        const style = {
            ...this.props.style,
            ...this.state,
        };

        return (
            <div>
                <div className={this.props.layoverClassName} />
                <div
                    className={this.props.className}
                    ref={e => { this.modal = e; }}
                    style={style}
                >
                    {this.props.render()}
                </div>
            </div>
        );
    }
}

ModalComponent.propTypes = {
    className: PropTypes.string,
    layoverClassName: PropTypes.string,
    render: PropTypes.func.isRequired,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
