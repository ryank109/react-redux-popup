const popupCollection = [];
popupCollection.remove = function(popupId) {
    let i;
    for (i = 0; i < popupCollection.length; i++) {
        if (popupCollection[i].props.id === popupId) {
            break;
        }
    }
    popupCollection.splice(i, 1);
};

export default popupCollection;
