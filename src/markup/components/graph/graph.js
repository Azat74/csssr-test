import {isNode} from '../../static/js/helpers-js/is-node';
import {forEach} from '../../static/js/helpers-js/for-each';

export default function graph(node, lvl = 0) {
    if (!isNode(node) || !node.hasAttribute('lvl')) {
        return false;
    } else {
        lvl = parseInt(node.getAttribute('lvl'), 10);
        forEach(node.querySelectorAll('div'), (item, i) => {
            if (i === lvl) {
                node.classList.add('js-active');
                item.classList.add('js-active');
            }
        });
    }
}
