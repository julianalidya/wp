var moveButton = document.getElementById('moveButton');

moveButton.onclick = function() {
    var currentLeft = parseInt(moveButton.style.left) || 0;

    moveButton.style.position = 'relative';
    moveButton.style.left = (currentLeft + 10) + 'px';
};
