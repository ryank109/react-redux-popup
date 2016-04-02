## React Redux Popup

This is set of higher order components that enable popup behavior using react and redux.  I've tried to not define any styles on it so that the user can define their own style.  At least that's what I'm shooting for, but that might change in the future, based on the needs...

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
      - `bottom`: bottom offset
      - `left`: left offset
      - `top`: top offset
      - `right`: right offset
 - `closePopup(id)`
    - `id`: id of the popup to close

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
import store from 'app/store';

class PopupMenu extends Component {
    render() {
        return // your popup menu content
    }
}

export default Popup(PopupMenu, store);
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
