import collection, {
    TYPE_MODAL,
    TYPE_POPUP,
    add,
    clearAll,
    remove,
    update
} from 'rrp/popup-collection';

describe('popup-collection', function() {
    beforeEach(clearAll);
    afterEach(clearAll);

    it('should add/remove popup object to the collection', function() {
        const composedObj = {};
        add(TYPE_POPUP, composedObj, { id: '1' });
        add(TYPE_MODAL, composedObj, { id: '2' });
        add(TYPE_POPUP, composedObj, { id: '3' });

        expect(collection.length).toBe(3);
        expect(collection[0]).toEqual([TYPE_POPUP, composedObj, { id: '1' }]);
        expect(collection[1]).toEqual([TYPE_MODAL, composedObj, { id: '2' }]);
        expect(collection[2]).toEqual([TYPE_POPUP, composedObj, { id: '3' }]);

        remove('1');
        expect(collection.length).toBe(2);
        expect(collection[0]).toEqual([TYPE_MODAL, composedObj, { id: '2' }]);
        expect(collection[1]).toEqual([TYPE_POPUP, composedObj, { id: '3' }]);

        // no-op
        remove('1');
        expect(collection.length).toBe(2);
        expect(collection[0]).toEqual([TYPE_MODAL, composedObj, { id: '2' }]);
        expect(collection[1]).toEqual([TYPE_POPUP, composedObj, { id: '3' }]);

        remove('2');
        remove('3');
        expect(collection.length).toBe(0);
    });

    it('should update props', function() {
        const composedObj = {};
        add(TYPE_POPUP, composedObj, { id: '1' });
        update('1', { id: '1', prop1: 'val1' });

        expect(collection.length).toBe(1);
        expect(collection[0]).toEqual([TYPE_POPUP, composedObj, { id: '1', prop1: 'val1' }]);

        update('2', { id: '2', prop2: 'val2' });
        expect(collection.length).toBe(1);
    });

    it('should clear all', function() {
        const composedObj = {};
        add(TYPE_POPUP, composedObj, { id: '1' });
        add(TYPE_MODAL, composedObj, { id: '2' });
        add(TYPE_POPUP, composedObj, { id: '3' });
        clearAll();
        expect(collection.length).toBe(0);
    });
});
