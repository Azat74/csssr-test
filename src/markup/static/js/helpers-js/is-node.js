// returns true if is it a DOM node

export const isNode = o => {
    return (
        typeof Node === 'object' ? o instanceof Node :
            o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'
    );
};
