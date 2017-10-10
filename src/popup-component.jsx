import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { getPopupPosition } from './utils';

function stopEvent(event) {
    event.stopPropagation();
}

export default class Popup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.refreshPositionHandler = () => this.refreshPosition();
    }

    componentDidMount() {
        this.setPopupPosition();
        window.addEventListener('mouseup', this.props.closePopup);
        window.addEventListener('resize', this.refreshPositionHandler);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.refreshPosition !== nextProps.refreshPosition
            || this.props.anchor !== nextProps.anchor
            || this.props.offset !== nextProps.offset
            || this.props.getRect !== nextProps.getRect) {
            this.setPopupPosition();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.props.closePopup);
        window.removeEventListener('resize', this.refreshPositionHandler);
    }

    setPopupPosition() {
        const popupRect = this.popup.getBoundingClientRect();
        const { left, top } = getPopupPosition(
            this.props.anchor,
            this.props.getRect(),
            popupRect.width,
            popupRect.height,
            window.innerWidth,
            window.innerHeight,
            this.props.offset);
        this.setState({ left, top });
    }

    refreshPosition() {
        // since React 16 requires RAF...
        window.requestAnimationFrame(() => this.setPopupPosition());
    }

    render() {
        const style = {
            ...this.props.style,
            left: this.state.left,
            top: this.state.top,
        };

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={this.props.className}
                onMouseUp={stopEvent}
                ref={e => { this.popup = e; }}
                style={style}
            >
                {this.props.render()}
            </div>
        );
    }
}

Popup.propTypes = {
    anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']).isRequired,
    className: PropTypes.string,
    closePopup: PropTypes.func.isRequired,
    getRect: PropTypes.func.isRequired,
    offset: PropTypes.number.isRequired,
    refreshPosition: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
