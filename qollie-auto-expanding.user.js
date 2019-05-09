// ==UserScript==
// @name         Qollie Auto-expanding
// @namespace    https://wiki.gslin.org/wiki/Qollie_Auto-expanding
// @version      0.20190510.0
// @description  Qollie Auto-expanding
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @match        https://www.qollie.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let work = () => {
        for (let el of document.querySelectorAll('button, span')) {
            if ('查看全文' === el.innerText) {
                el.click();
            }
        }
    };
    work();

    document.addEventListener('click', work);
})();
