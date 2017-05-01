export function getOffsetPosition(position, offset) {
    return position + offset;
}

export function getNegativeOffsetPosition(position, offset, popupWidth) {
    return position - offset - popupWidth;
}

export function adjustPosition(windowSize, popupSize, ceiling, floor) {
    return (ceiling + popupSize > windowSize && floor - popupSize >= 0)
        ? floor - popupSize : ceiling;
}

export function calculatePosition(
    windowSize,
    popupSize,
    ceiling,
    floor,
    offset,
    shouldMatchPositive
) {
    const offsetPosition = getOffsetPosition(floor, offset);
    const offsetNegativePosition = getNegativeOffsetPosition(ceiling, offset, popupSize);
    if (shouldMatchPositive) {
        return (offsetPosition + popupSize > windowSize && offsetNegativePosition >= 0)
            ? offsetNegativePosition : offsetPosition;
    }

    return (offsetNegativePosition < 0 && offsetPosition + popupSize <= windowSize)
        ? offsetPosition : offsetNegativePosition;
}

export function getPopupPosition(
    anchor,
    rect,
    popupWidth,
    popupHeight,
    windowWidth,
    windowHeight,
    offset
) {
    switch (anchor) {
    case 'bottom':
    case 'top':
        return {
            left: adjustPosition(
                windowWidth,
                popupWidth,
                rect.left,
                rect.right),
            top: calculatePosition(
                windowHeight,
                popupHeight,
                rect.top,
                rect.bottom,
                offset,
                anchor === 'bottom')
        };
    default: // left and right
        return {
            left: calculatePosition(
                windowWidth,
                popupWidth,
                rect.left,
                rect.right,
                offset,
                anchor === 'right'),
            top: adjustPosition(
                windowHeight,
                popupHeight,
                rect.top,
                rect.bottom)
        };
    }
}
