$(document).ready(function() {
    animateDiv();

});

function makeNewPosition($bound) {

    // Get viewport dimensions (remove the dimension of the div)
    $bound = ($bound || $(window))
    let h = $bound.height() - 50;
    let w = $bound.width() - 50;

    let nh = Math.floor(Math.random() * h * 0.7);
    let nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv() {
    let $target = $('.mover');
    let newq = makeNewPosition($target.parent());
    let oldq = $target.offset();
    let speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv();
    });

};

function calcSpeed(prev, next) {

    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);

    let greatest = x > y ? x : y;

    let speedModifier = 2;

    let speed = Math.ceil(greatest / speedModifier);

    return speed;

}