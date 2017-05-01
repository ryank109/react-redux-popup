## React Redux Popup

This is set of higher order components that enable popup behavior using react and redux.  I've tried to not define any styles on it so that the user can define their own style.  At least that's what I'm shooting for, but that might change in the future, based on the needs...

### Features
 - Portal design
 - Auto positioning based on the resize and scrolling events (See [Scrolling Section](https://github.com/ryank109/react-redux-popup#scrolling))
 - Smart positioning based on the popup content size and available space

### Redux Actions
 - `openPopup(id)`
    - `id`: id of the popup to open
 - `closePopup(id)`
    - `id`: id of the popup to close
 - `refreshPopupPosition()`
    - Refresh popup position, such as on scroll. The refreshing is throttled, so that you don't have to throttle in your call.

### Higher Order Components
 - **Modal** - creates a modal in the center of the screen with layover, so that nothing can be clicked outside.  Must dispatch `closePopup` from the modal in order to close it
   - Properties:
     - `id` - required id
     - `popupClassName` - the modal class name
     - `layoverClassName` - the layover class name
     - `style` - optional styles to apply on the modal

 - **Popup** - creates a popup on the location specified in `options` argument on `openPopup`.  Clicking outside of the popup should close this popup or with dispatching `closePopup` action.
   - Properties:
     - `anchor` - [default to 'bottom'] `bottom`|`left`|`right`|`top`
     - `getRect` - the required function to describe the position that the popup should appear. The return of the function should be same as `element.getBoundingClientRect()` object or use that for simplicity. i.e. `getRect={() => element.getBoundingClientRect()}`
     - `id` - required id
     - `popupClassName` - the popup class name
     - `style` - optional styles to apply on the popup
     - `offset` - the offset distance

### Portal Component
This component is the component where the popups are rendered to.  So, it's important that this component is specified after the main body so that popups are rendered on top of everything else.  The properties to this component mostly deals with the animation.

 - Properties:
   - `modalTransitionName`: [default to 'modal'] used for css animation
   - `modalTransitionEnterTimeout`: [default to 0] the modal enter animation duration in miliseconds
   - `modalTransitionLeaveTimeout`: [default to 0] the modal leave animation duration in miliseconds
   - `popupTransitionName`: [default to 'popup'] used for css animation
   - `popupTransitionEnterTimeout`: [default to 0] the popup enter animation duration in miliseconds
   - `popupTransitionLeaveTimeout`: [default to 0] the popup leave animation duration in miliseconds

### Usage

#### Hook to the Application
When you want the contents of the popup to the store, or if we need to popup another popup within a popup, the store context is needed. `Portal` is the way to include the store context without having to pass in the store to the components. Include the `Portal` within the `Provider`. It doesn't matter where you define it, it just needs to be after the main app component to show the popups on top of the app.

```javascript
import { Portal } from 'react-redux-popup';

render(
    <Provider store={store}>
        <div>
            <App />
            <Portal />
        </div>
    </Provider>
, document.body);
```

#### Reducer
```javascript
import { combineReducers, createStore } from 'redux';
import { popupReducer } from 'react-redux-popup';

const reducers = combineReducers({
    popup: popupReducer
});
const store = createStore(reducers);
```

#### Component

popup-menu.js
```javascript
import { Component } from 'react';
import { Popup } from 'react-redux-popup';

class PopupMenu extends Component {
    render() {
        return // your popup menu content
    }
}

export default Popup(PopupMenu);
```

app.js
```javascript
import { connect } from 'react-redux';
import { openPopup } from 'react-redux-popup';
import PopupMenu from './popup-menu';

class App extends Component {
    render() {
        return (
            <div>
                <button
                    refs={e => { this.elem = e; }}
                    onClick={() => this.props.openPopup('popup1'))}
                />
                <PopupMenu
                    getRect={() => this.elem.getBoundingClientRect()}
                    id="popup1"
                    popupClassName="popup"
                />
            </div>
        );
    }
}

export default connect(null, { openPopup })(App);
```

### Animation

Animation support has been added with [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html).
To use, you must specify transition enter/leave timeout properties for `Portal` and define css to handle the animation and define the following styles:

```css
.modal-enter .modal-container {
}
.modal-enter .modal-layover {
}
.modal-enter.modal-enter-active .modal-container {
}
.modal-enter.modal-enter-active .modal-layover {
}
.modal-leave .modal-container {
}
.modal-leave .modal-layover {
}
.modal-leave.modal-leave-active .modal-container {
}
.modal-leave.modal-leave-active .modal-layover {
}

.popup-enter {
}
.popup-enter.popup-enter-active {
}
.popup-leave {
}
.popup-leave.popup-leave-active {
}
```

### Scrolling

Scrolling event isn't something that can't be watched from global document, so the solution is to call `refreshPopupPosition` action to refresh the positions on the popups that are open. In most cases, there should be only one `Popup` open at a time. `Modal` doesn't get repositioned from this action.
