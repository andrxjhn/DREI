document.addEventListener('DOMContentLoaded', function() {
    const bgm = document.getElementById('bgm');

    // Function to play or pause the background music
    function toggleBackgroundMusic() {
        if (bgm.paused) {
            bgm.play();
        } else {
            bgm.pause();
        }
    }

    // Play or pause background music when the window is clicked
    window.addEventListener('click', toggleBackgroundMusic);
});
$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});