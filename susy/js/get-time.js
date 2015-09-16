var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Evening...';
}
else if (hourNow > 12) {
    greeting = 'Afternoon...';
}
else if (hourNow > 0) {
    greeting = 'Morning...';
}

var Note = document.getElementById('intro');
Note.innerHTML = greeting;

