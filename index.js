var clicker = document.getElementById("clicker");
var counter = document.getElementById("counter");

clicker.addEventListener('click', function()  {
    counter.innerHTML++;

    let id = null;
    let i = 0;
    let size = 60;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (i === 40) {
        clearInterval(id);
    } else if (i < 20) {
        size++;
        clicker.style.height = size + 'px';
        clicker.style.width = size + 'px';

        i++;
    } else {
        size--;
        clicker.style.height = size + 'px';
        clicker.style.width = size + 'px';

        i++;
    }
  }
})
