## React Redux Popup

This is set of higher order components that enable popup behavior using react and redux.  I've tried to not define any styles on it so that the user can define their own style.  At least that's what I'm shooting for, but that might change in the future, based on the needs...

### Higher Order Components
 - **Modal** - creates a modal in the center of the screen with layover, so that nothing can be clicked outside.  Must dispatch `closePopup` from the modal in order to close it
   - Properties:
     - `id` - required id
     - `popupClassName` - the container style class name
     - `layoverClassName` - the layover style class name

 - **Popup** - creates a popup on the location specified in `options` argument on `openPopup`.  Clicking outside of the popup should close this popup or with dispatching `closePopup` action.
   - Properties:
     - `id` - required id
     - `popupClassName` - the container style class name

#### Passing in Store

Because the way that the popups are appended on the body, the root element that the popup is being attached doesn't have any reference to the store context.  So, if you want to nest the popup within a popup, it would throw invariant error.  Found one solution to this and which is to pass in the reference to the store when defining the component so that the popup can create a `Provider` with the store.

i.e. `export default Popup(MyComponent, myStoreRef);`

### Actions
 - `openPopup(id, [options])`
    - `id`: id of the popup to open
    - `options`:
      - `bottom`: bottom offset (absolute position)
      - `left`: left offset
      - `top`: top offset
      - `right`: right offset
 - `closePopup(id)`
    - `id`: id of the popup to close

### Usage

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
                <PopupMenu id="popup1" />
            </div>
        );
    }
    
    openMenu() {
        const options = this.refs.button.getBoundingClientRect();
        this.props.openPopup('popup1', options);
    }
}

export default connect(null, popupActions)(App);
```
