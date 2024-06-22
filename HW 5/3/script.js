var randomButton = document.getElementById('randomButton');

function centerButton() {
    var bodyHeight = document.documentElement.clientHeight;
    var bodyWidth = document.documentElement.clientWidth;

    var buttonHeight = randomButton.clientHeight;
    var buttonWidth = randomButton.clientWidth;

    var centerTop = (bodyHeight / 2) - (buttonHeight / 2);
    var centerLeft = (bodyWidth / 2) - (buttonWidth / 2);

    randomButton.style.top = centerTop + 'px';
    randomButton.style.left = centerLeft + 'px';
}

function moveButtonRandomly() {
    var bodyHeight = document.documentElement.clientHeight;
    var bodyWidth = document.documentElement.clientWidth;

    var buttonHeight = randomButton.clientHeight;
    var buttonWidth = randomButton.clientWidth;

    var randomTop = Math.random() * (bodyHeight - buttonHeight);
    var randomLeft = Math.random() * (bodyWidth - buttonWidth);

    randomButton.style.top = randomTop + 'px';
    randomButton.style.left = randomLeft + 'px';
}

centerButton();

randomButton.onmouseover = function() {
    moveButtonRandomly();
};
