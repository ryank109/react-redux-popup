import collection, {
    TYPE_MODAL,
    TYPE_POPUP
} from 'rrp/popup-collection';

describe('popup-collection', function() {
    beforeEach(collection.clearAll);
    afterEach(collection.clearAll);

    it('should add/remove popup object to the collection', function() {
        const composedObj = {};
        collection.push([ TYPE_POPUP, composedObj, { id: '1' } ]);
        collection.push([ TYPE_MODAL, composedObj, { id: '2' } ]);
        collection.push([ TYPE_POPUP, composedObj, { id: '3' } ]);

        expect(collection.length).toBe(3);
        expect(collection[0]).toEqual([ TYPE_POPUP, composedObj, { id: '1' } ]);
        expect(collection[1]).toEqual([ TYPE_MODAL, composedObj, { id: '2' } ]);
        expect(collection[2]).toEqual([ TYPE_POPUP, composedObj, { id: '3' } ]);

        collection.remove('1');
        expect(collection.length).toBe(2);
        expect(collection[0]).toEqual([ TYPE_MODAL, composedObj, { id: '2' } ]);
        expect(collection[1]).toEqual([ TYPE_POPUP, composedObj, { id: '3' } ]);

        // no-op
        collection.remove('1');
        expect(collection.length).toBe(2);
        expect(collection[0]).toEqual([ TYPE_MODAL, composedObj, { id: '2' } ]);
        expect(collection[1]).toEqual([ TYPE_POPUP, composedObj, { id: '3' } ]);

        collection.remove('2');
        collection.remove('3');
        expect(collection.length).toBe(0);
    });

    it('should update props', function() {
        const composedObj = {};
        collection.push([ TYPE_POPUP, composedObj, { id: '1' }]);
        collection.update('1', { id: '1', prop1: 'val1' });

        expect(collection.length).toBe(1);
        expect(collection[0]).toEqual([ TYPE_POPUP, composedObj, { id: '1', prop1: 'val1' }]);

        collection.update('2', { id: '2', prop2: 'val2' });
        expect(collection.length).toBe(1);
    });

    it('should clear all', function() {
        const composedObj = {};
        const props = { id: '1' }
        collection.push([ TYPE_POPUP, composedObj, { id: '1' } ]);
        collection.push([ TYPE_MODAL, composedObj, { id: '2' } ]);
        collection.push([ TYPE_POPUP, composedObj, { id: '3' } ]);
        collection.clearAll();
        expect(collection.length).toBe(0);
    });
});
