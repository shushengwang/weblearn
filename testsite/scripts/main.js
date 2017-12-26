
var myImage = document.querySelector('img');
myImage.onclick = function () {
    var src = myImage.getAttribute('src');
    if (src === './images/snowman1.jpg') {
        myImage.setAttribute('src', './images/snowman2.jpg');
    } else {
        myImage.setAttribute('src', './images/snowman1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name1', myName);
    myHeading.innerHTML = 'You are very cool, ' + myName;
}

if(!localStorage.getItem('name1')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name1');
    myHeading.innerHTML = 'You are very cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}