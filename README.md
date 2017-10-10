## React Redux Popup

Set of components to handle modal dialog and popups with redux actions.

### Version 3.0
 - Big changes from 2.x.x. Instead of using HOC to decorate the Popup or Modal containers, I've used render function property to define the view component on the Popup. I believe using render function property makes it easier to define the property that only applies to the component, which makes easier for doing flowtypes and debugging later.
 - React v16 only, because it leverages its [Portal API](https://reactjs.org/blog/2017/09/26/react-v16.0.html#portals))
 - For React v15.5 - use version 2.x

### Features
 - Portal design - benefit of the portal is that you don't have to mess with `z-index`.
 - Auto positioning based on the resize and scrolling events (See [Scrolling Section](https://github.com/ryank109/react-redux-popup#scrolling))
 - Smart positioning based on the popup content size and available window space

### Redux Actions
 - `openPopup(id)`
    - `id`: id of the popup to open
 - `closePopup(id)`
    - `id`: id of the popup to close
 - `refreshPopupPosition()`
    - Refresh popup position, such as on scroll. The refreshing is throttled (with `requestAnimationFrame`), so that you don't have to throttle in your call.

### Components
 - **Modal** - creates a modal in the center of the screen with layover, so that nothing can be clicked outside.  Must dispatch `closePopup` from the modal in order to close it
   - Properties:
     - `id` - required id
     - `className` - the modal class name
     - `getPortalElement` - optional portal element, or define `Portal` component elsewhere and let it take care of this
     - `layoverClassName` - the layover class name
     - `render` - the required render function
     - `style` - optional styles to apply on the modal
     - `transitionEnterTimeout` - enter transition time (defaults to 300ms)
     - `transitionExitTimeout` - exit transition time (defaults to 300ms)
     - `transitionName` - the transition name. Defaults to `modal`. See [Animation](https://github.com/ryank109/react-redux-popup#animation) for more details

 - **Popup** - creates a popup on the location specified in `options` argument on `openPopup`.  Clicking outside of the popup should close this popup or with dispatching `closePopup` action.
   - Properties:
     - `anchor` - [default to 'bottom'] `bottom`|`left`|`right`|`top`
     - `className` - the popup class name
     - `closePopup` - optionally define closePopup handler
     - `getRect` - the required function to describe the position that the popup should appear. The return of the function should be same as `element.getBoundingClientRect()` object or use that for simplicity. i.e. `getRect={() => element.getBoundingClientRect()}`
     - `getPortalElement` - optional portal element, or define `Portal` component elsewhere and let it take care of this
     - `id` - required id
     - `render` - the required render function
     - `style` - optional styles to apply on the popup
     - `offset` - the offset distance from the anchored element in pixels
     - `transitionEnterTimeout` - enter transition time (defaults to 100ms)
     - `transitionExitTimeout` - exit transition time (defaults to 100ms)
     - `transitionName` - the transition name. Defaults to `popup`. See [Animation](https://github.com/ryank109/react-redux-popup#animation) for more details

 - **Portal** - this component is where the popup and modal will be rendered to.  Or you can define your own portal element and pass that to `Modal` and/or `Popup` components via `getPortalElement` property.

### Usage

#### Define portal
`Portal` component basically defines where your modal or popup should be rendering on.  So define this below your app root or just below the App component.

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

Alternatively, you can define your own portal element and assign it to `Modal` and `Popup` component.  One caveat to this is that this portal element must be defined before the `Modal` or `Popup` component gets mounted.

```javascript
<Popup
    getPortalElement={() => document.getElementById('portalRoot')}
/>
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
```javascript
import { PureComponent } from 'react-redux-popup';
import { connect } from 'react-redux';
import PopupView from 'popup-view';

// you can connect the view like this, then pass to render prop
const ConnectedView = connect()(PopupView);

let elem;
export default props => (
    <div>
        <button
            onClick={() => props.openPopup('popup1')}
            ref={ btn => { elem = btn; }}
        >
            Open
        </button>
        <Popup
            getRect={() => elem.getBoundingClientRect()}
            id="popup1"
            render={() => <ConnectedView />}
        />
    </div>
);
```

### Animation

Animation support has been added with [ReactTransitionGroup](https://reactjs.org/docs/animation.html).
To use, you must specify transition enter/exit timeout properties for the components and define css to handle the animation and define the following styles.  **Note** version 2.x had `leave` for exit transition in accordance with the version of `react-transition-group` that it was using.  The 3.x uses `exit` to follow the latest version of `react-transition-group`.

```css
.modal-enter .modal-container {
}
.modal-enter .modal-layover {
}
.modal-enter.modal-enter-active .modal-container {
}
.modal-enter.modal-enter-active .modal-layover {
}
.modal-exit .modal-container {
}
.modal-exit .modal-layover {
}
.modal-exit.modal-exit-active .modal-container {
}
.modal-exit.modal-exit-active .modal-layover {
}

.popup-enter {
}
.popup-enter.popup-enter-active {
}
.popup-exit {
}
.popup-exit.popup-exit-active {
}
```

### Scrolling

Scrolling event isn't something that can't be watched from global document, so the solution is to call `refreshPopupPosition` action to refresh the positions on the popups that are open. `Modal` doesn't get repositioned from this action.
