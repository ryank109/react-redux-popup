import { getPopupPosition } from 'rrp/utils';

describe('utils', function() {
    it('should anchor to bottom when enough space below', function() {
        const anchor = 'bottom';
        const rect = { bottom: 50, left: 10, right: 50, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 10,
            top: 60
        });
    });

    it('should anchor to bottom when not enough space below', function() {
        const anchor = 'bottom';
        const rect = { bottom: 250, left: 10, right: 50, top: 210 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 10,
            top: 100
        });
    });

    it('should anchor to bottom when not enough space below or above', function() {
        const anchor = 'bottom';
        const rect = { bottom: 120, left: 10, right: 50, top: 80 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 10,
            top: 130
        });
    });

    it('should anchor to bottom and adjust on left when not enough space on the right', function() {
        const anchor = 'bottom';
        const rect = { bottom: 50, left: 120, right: 160, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 60,
            top: 60
        });
    });

    it('should anchor to bottom and adjust on left when not enough space below on the right or left', function() {
        const anchor = 'bottom';
        const rect = { bottom: 50, left: 70, right: 90, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 150;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 70,
            top: 60
        });
    });

    it('should anchor to top when enough space above', function() {
        const anchor = 'top';
        const rect = { bottom: 290, left: 10, right: 50, top: 250 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 10,
            top: 140
        });
    });

    it('should anchor to top when not enough space above', function() {
        const anchor = 'top';
        const rect = { bottom: 50, left: 10, right: 50, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 10,
            top: 60
        });
    });

    it('should anchor to top when not enough space above or below', function() {
        const anchor = 'top';
        const rect = { bottom: 120, left: 10, right: 50, top: 80 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 10,
            top: -30
        });
    });

    it('should anchor to top and adjust on left when not enough space on the right', function() {
        const anchor = 'top';
        const rect = { bottom: 290, left: 120, right: 160, top: 250 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 60,
            top: 140
        });
    });

    it('should anchor to top and adjust on left when not enough space below on the right or left', function() {
        const anchor = 'top';
        const rect = { bottom: 290, left: 70, right: 90, top: 250 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 150;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 70,
            top: 140
        });
    });

    it('should anchor to right when enough space on the right', function() {
        const anchor = 'right';
        const rect = { bottom: 50, left: 10, right: 50, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 60,
            top: 10
        });
    });

    it('should anchor to right when not enough space on the right', function() {
        const anchor = 'right';
        const rect = { bottom: 50, left: 250, right: 290, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 140,
            top: 10
        });
    });

    it('should anchor to right when not enough space on the right or left', function() {
        const anchor = 'right';
        const rect = { bottom: 50, left: 80, right: 120, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 130,
            top: 10
        });
    });

    it('should anchor to right and adjust on top when not enough space on the bottom', function() {
        const anchor = 'right';
        const rect = { bottom: 290, left: 10, right: 50, top: 250 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 60,
            top: 190
        });
    });

    it('should anchor to right and adjust on top when not enough space below on the top or bottom', function() {
        const anchor = 'right';
        const rect = { bottom: 90, left: 10, right: 50, top: 70 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 150;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 60,
            top: 70
        });
    });

    it('should anchor to left when enough space on the left', function() {
        const anchor = 'left';
        const rect = { bottom: 50, left: 250, right: 290, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 140,
            top: 10
        });
    });

    it('should anchor to left when not enough space on the left', function() {
        const anchor = 'left';
        const rect = { bottom: 50, left: 10, right: 50, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 60,
            top: 10
        });
    });

    it('should anchor to left when not enough space on the left or right', function() {
        const anchor = 'left';
        const rect = { bottom: 50, left: 80, right: 120, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: -30,
            top: 10
        });
    });

    it('should anchor to left and adjust on top when not enough space on the bottom', function() {
        const anchor = 'left';
        const rect = { bottom: 290, left: 250, right: 290, top: 250 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 200;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 140,
            top: 190
        });
    });

    it('should anchor to left and adjust on top when not enough space below on the top or bottom', function() {
        const anchor = 'left';
        const rect = { bottom: 90, left: 250, right: 290, top: 70 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 200;
        const windowHeight = 150;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 140,
            top: 70
        });
    });

    it('should anchor to bottom when enough space below and window has scrolled', () => {
        window.scrollX = 20;
        window.scrollY = 30;

        const anchor = 'bottom';
        const rect = { bottom: 50, left: 10, right: 50, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 30,
            top: 90
        });
    });

    it('should anchor to top when enough space above and window has scrolled', () => {
        window.scrollX = 20;
        window.scrollY = 30;

        const anchor = 'top';
        const rect = { bottom: 290, left: 10, right: 50, top: 250 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 30,
            top: 170
        });
    });

    it('should anchor to right when enough space on the right and window has scrolled', () => {
        window.scrollX = 20;
        window.scrollY = 30;

        const anchor = 'right';
        const rect = { bottom: 50, left: 10, right: 50, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 80,
            top: 40
        });
    });

    it('should anchor to left when enough space on the left and window has scrolled', () => {
        window.scrollX = 20;
        window.scrollY = 30;

        const anchor = 'left';
        const rect = { bottom: 50, left: 250, right: 290, top: 10 };
        const popupWidth = 100;
        const popupHeight = 100;
        const windowWidth = 300;
        const windowHeight = 300;
        const offset = 10;

        expect(getPopupPosition(
            anchor,
            rect,
            popupWidth,
            popupHeight,
            windowWidth,
            windowHeight,
            offset
        )).toEqual({
            left: 160,
            top: 40
        });
    });
});
