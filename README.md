## React Redux Popup

This is set of higher order components that enable popup behavior using react and redux.  I've tried to not define any styles on it so that the user can define their own style.  At least that's what I'm shooting for, but that might change in the future, based on the needs...

### PopupSandbox Component
This component is the component where the popups are rendered to.  So, it's important that this component is specified after the main body so that popups are rendered on top of everything else.  The properties to this component mostly deals with the animation.

 - Properties:
   - `modalTransitionName`: [default to 'modal'] used for css animation
   - `modalTransitionEnterTimeout`: [default to 0] the modal enter animation duration in miliseconds
   - `modalTransitionLeaveTimeout`: [default to 0] the modal leave animation duration in miliseconds
   - `popupTransitionName`: [default to 'popup'] used for css animation
   - `popupTransitionEnterTimeout`: [default to 0] the popup enter animation duration in miliseconds
   - `popupTransitionLeaveTimeout`: [default to 0] the popup leave animation duration in miliseconds

### Higher Order Components
 - **Modal** - creates a modal in the center of the screen with layover, so that nothing can be clicked outside.  Must dispatch `closePopup` from the modal in order to close it
   - Properties:
     - `id` - required id
     - `popupClassName` - the modal class name
     - `layoverClassName` - the layover class name
     - `style` - optional styles

 - **Popup** - creates a popup on the location specified in `options` argument on `openPopup`.  Clicking outside of the popup should close this popup or with dispatching `closePopup` action.
   - Properties:
     - `id` - required id
     - `popupClassName` - the popup class name
     - `style` - optional styles

### Actions
 - `openPopup(id, [options])`
    - `id`: id of the popup to open
    - `options`:
      - `left`: left offset
      - `top`: top offset
 - `closePopup(id)`
    - `id`: id of the popup to close

### Dependencies
 - react
 - react-addons-css-transition-group
 - react-dom
 - react-redux
 - redux

### Usage

#### Hook to the Application
When you want the contents of the popup to the store, or if we need to popup another popup within a popup, the store context is needed. `PopupSandbox` is the way to include the store context without having to pass in the store to the components. Include the `PopupSandbox` within the `Provider`. It doesn't matter where you define it, it just needs to be after the main app component to show the popups on top of the app.

```javascript
import { PopupSandbox } from 'react-redux-popup';

render(
    <Provider store={store}>
        <div>
            <App />
            <PopupSandbox />
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
import { popupActions } from 'react-redux-popup';
import PopupMenu from './popup-menu';

class App extends Component {
    render() {
        return (
            <div>
                <button refs="button" onClick={this.openMenu.bind(this)} />
                <PopupMenu id="popup1" popupClassName="popup" />
            </div>
        );
    }

    openMenu() {
        const rect = this.refs.button.getBoundingClientRect();
        this.props.openPopup('popup1', { top: rect.bottom, left: rect.left });
    }
}

export default connect(null, popupActions)(App);
```

### Animation

Animation support has been added with [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html).
To use, you must specify transition enter/leave timeout properties for `PopupSandbox` and define css to handle the animation and define the following styles:

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
