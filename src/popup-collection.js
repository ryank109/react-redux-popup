export const TYPE_MODAL = 'modal';
export const TYPE_POPUP = 'popup';

const popupCollection = [];
popupCollection.remove = function(popupId) {
    let i;
    for (i = 0; i < popupCollection.length; i++) {
        if (popupCollection[i][2].id === popupId) {
            break;
        }
    }
    popupCollection.splice(i, 1);
};

export default popupCollection;
