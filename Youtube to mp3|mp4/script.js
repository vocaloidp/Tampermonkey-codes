// ==UserScript==
// @name         YouTube Video Download
// @namespace    http://tampermonkey.net/
// @version      2024-11-30
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let videoId;
let videoIdMatch;
let url;
// Add event listeners for keydown and keyup events
document.addEventListener('keydown', (event) => {
url = window.location.href;

function getYouTubeVideoId(url) {
    videoIdMatch = url.match(/(?:watch\?v=|\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : null;
}

// Example usage
videoId = getYouTubeVideoId(url);
    // Check if both keys are pressed
    if (event.key === 'KanjiMode'){
        window.open(`https://mp4api.ytjar.info/?id=${videoId}`, '_blank');
    }else if (event.key === '`') {
        window.open(`https://mp3api.ytjar.info/?id=${videoId}`, '_blank');
    }
});
})();
