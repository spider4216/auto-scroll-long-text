window.onload = function() {
    var container = document.getElementById('container');
    var textElement = container.getElementsByTagName('span')[0];
    if (textElement.offsetWidth > container.offsetWidth) {
       var id = setInterval(function() {
           if (parseInt(textElement.style.left) > (-textElement.offsetWidth) + container.offsetWidth) {
               textElement.style.left = (parseInt(textElement.style.left) - 1) + 'px';
           } else {
               clearInterval(id);
           }
       }, 20);
    }
}
