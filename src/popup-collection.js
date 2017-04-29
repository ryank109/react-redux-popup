export const TYPE_MODAL = 'modal';
export const TYPE_POPUP = 'popup';

const popupCollection = [];

function indexOf(collection, popupId) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i][2].id === popupId) {
            return i;
        }
    }
    return -1;
}

export function add(type, component, props) {
    popupCollection.push([type, component, props]);
}

export function remove(popupId) {
    const index = indexOf(popupCollection, popupId);
    if (index > -1) {
        popupCollection.splice(index, 1);
    }
}

export function update(popupId, props) {
    const index = indexOf(popupCollection, popupId);
    if (index > -1) {
        popupCollection[index][2] = props;
    }
}

export function clearAll() {
    popupCollection.splice(0, popupCollection.length);
}

export default popupCollection;
