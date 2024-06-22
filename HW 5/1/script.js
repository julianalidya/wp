document.getElementById('resizeButton').addEventListener('click', function() {
    var button = this;
    var width = button.offsetWidth;
    var height = button.offsetHeight;
    button.style.width = (width + 10) + 'px';
    button.style.height = (height + 10) + 'px';
});
