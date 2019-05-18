var input = document.getElementsByClassName('input')
var submitbutton = document.getElementsByClassName('submitbutton')

submitbutton.addEventListener("click", submit())

function submit() {
    setInterval(read, 1000)
    input.style.display = "none";
    submitbutton.style.display = "none";
    var inputtext = input.value;
    var wordarray = inputtext.split(' ');
}

function read() {
    
}