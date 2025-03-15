var clicker = document.getElementById("clicker");
var counter = document.getElementById("counter");

clicker.addEventListener('click', function()  {
    counter.innerHTML++;

    let id = null;
    let i = 0;
    let size = 500;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (i == 20) {
        clearInterval(id);
    } else if (i < 10) {
        size += 5;
        clicker.style.height = size + 'px';
        clicker.style.width = size + 'px';

        i++;
    } else {
        size -= 5;
        clicker.style.height = size + 'px';
        clicker.style.width = size + 'px';

        i++;
    }
  }
})
