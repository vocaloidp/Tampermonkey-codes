// ==UserScript==
// @name         music repeater
// @namespace    http://tampermonkey.net/
// @version      2024-10-27
// @description  try to take over the world!
// @author       You
// @match        file:///C:/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
/*var videoPlayer = document.querySelector('video');
videoPlayer.setAttribute('id', 'audio');

function addLoopAttribute() {
    var audioElement = document.getElementById('audio');
    if (audioElement) {
        audioElement.setAttribute('loop', '');
    }
}

addLoopAttribute();*/

    var audioElement = document.querySelector('video');
    if (audioElement) {
        audioElement.setAttribute('loop', '');
    }



})();
