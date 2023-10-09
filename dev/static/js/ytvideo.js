// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytPlayer', {
        videoId: 'kr_CtA1z2o4',
        playerVars: {
            controls: 0,
            disablekb: 1,
            autoplay: 0,
            modestbranding: 1,
            rel: 0
        },
        
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.stopVideo();
        showPlayButton();
    }
}

function showPlayButton() {
    const playButton = document.querySelector('.social-video__play');
    playButton.style.display = 'block';
}

function hidePlayButton() {
    const playButton = document.querySelector('.social-video__play');
    playButton.style.display = 'none';
}

const playButton = document.querySelector('.social-video__play');
playButton.addEventListener('click', function() {
    player.playVideo();
    player.setOption('controls', 1);
    hidePlayButton();
});