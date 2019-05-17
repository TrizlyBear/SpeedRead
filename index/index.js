var input = document.getElementsByClassName('input')
var submitbutton = document.getElementsByClassName('submitbutton')

function submit() {
    setInterval(read, 1000)
    input.setPropert('display', 'none')
    submitbutton.setPropert('display', 'none')
}

function read() {
    const wordstoread = input.value.split(' ');

}

document.createElement()