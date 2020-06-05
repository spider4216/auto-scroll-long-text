window.onload = function() {
    var container = document.getElementById('container');
    var textElement = container.getElementsByTagName('span')[0];
    console.log(textElement.offsetWidth, container.offsetWidth);
    console.log(textElement.offsetWidth > container.offsetWidth);
    if (textElement.offsetWidth > container.offsetWidth) {
       var id = setInterval(function() {
           console.log('run timer');
           console.log(textElement.style.left, container.offsetWidth);
           if (parseInt(textElement.style.left) > (-textElement.offsetWidth) + container.offsetWidth) {
               console.log('move');
               console.log(textElement.style.left);
               textElement.style.left = (parseInt(textElement.style.left) - 1) + 'px';
               console.log(textElement.style.left);
           } else {
               console.log('stop');
               clearInterval(id);
           }
       }, 10);
    }
}
