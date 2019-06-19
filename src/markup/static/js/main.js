'use strict';

import polyfills from './libraries/polyfills';
import graph from './../../components/graph/graph';
import { forEach } from './helpers-js/for-each';
import autosize from 'autosize';
import {visible} from './helpers-js/is-visible';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    forEach(document.querySelectorAll('.graph'), item => {
        graph(item);
    });
    let activated = false;
    let TO;
    window.addEventListener('scroll', () => {
        window.clearTimeout(TO);
        TO = window.setTimeout(() => {
            if (activated === false) {
                if (visible(textarea) === true) {
                    console.log('activated');
                    activated = true;
                    autosize(textarea);
                }
            }
        }, 100);
    });
    if (visible(textarea) === true) {
        window.setTimeout(() => {
            console.log('activated');
            activated = true;
            autosize(textarea);
        }, 500);
    }
});

