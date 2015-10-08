var redButton = document.getElementById('redButton');
redButton.addEventListener('click', function () {
     var block = document.getElementById('block');
     block.innerHTML = "STOP";
     block.className = "red";
});


var greenButton = document.getElementById('greenButton');
greenButton.addEventListener('click', function () {
     var block = document.getElementById('block');
     block.innerHTML = "Go";
     block.className = "green";
});