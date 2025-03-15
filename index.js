const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const body = document.getElementsByTagName("body")[0];

let wealth = 0;
let click_value = 1;
let prestige = 1;

clicker.addEventListener('click', function()  {
    wealth += click_value
    counter.innerHTML = wealth

    let id = null
    let i = 0
    let size = 500
    let r = Math.round(Math.random() * 20) - 10
    clicker.style.transform = 'rotate(' + r + 'deg)'
    clearInterval(id)
    id = setInterval(frame, 5)
    function frame() {
    if (i === 15) {
        clearInterval(id)
    } else if (i < 5) {
        size += 10
        clicker.style.height = size + 'px'
        clicker.style.width = size + 'px'

        i++
    } else {
        size -= 5
        clicker.style.height = size + 'px'
        clicker.style.width = size + 'px'

        i++
    }
  }
})

function pay(upgrade, cost, cost_multiplier) {
    wealth -= cost
    cost = Math.ceil(cost * cost_multiplier)
    counter.innerHTML = wealth
    upgrade.children[3].innerHTML = "Cost: " + cost
    return cost
}

// Increase amount of wealth gained per click
let upgrade1_cost = 50;
let upgrade1_level = 0;

const upgrade1 = document.getElementById("upgrade1");

function reset_upgrade1() {
    upgrade1_cost = 50
    upgrade1_level = 0
    click_value = 1
    upgrade1.children[3].innerHTML = "Cost: " + upgrade1_cost
    upgrade1.children[2].innerHTML = "Level: " + upgrade1_level
}

upgrade1.addEventListener('click', function() {
    if (wealth >= upgrade1_cost) {
        upgrade1_cost = pay(upgrade1, upgrade1_cost, 1.2)
        upgrade1_level += prestige
        upgrade1.children[2].innerHTML = "Level: " + upgrade1_level
        click_value += prestige
    }
})


// auto clicker values
let upgrade2_cost = 100;
let upgrade2_level = 0;
let auto_clicker_value = 0;
let auto_clicker_speed = 2000;
let click_interval = setInterval(0);


// auto clicker upgrade
const upgrade2 = document.getElementById("upgrade2");

function reset_upgrade2() {
    upgrade2_cost = 100
    upgrade2_level = 0         
    auto_clicker_value = 0
    upgrade2.children[3].innerHTML = "Cost: " + upgrade2_cost
    upgrade2.children[2].innerHTML = "Level: " + upgrade2_level
}
upgrade2.addEventListener('click', function() {
    if (wealth >= upgrade2_cost) {
        upgrade2_cost = pay(upgrade2, upgrade2_cost, 1.2)
        upgrade2_level += prestige
        upgrade2.children[2].innerHTML = "Level: " + upgrade2_level
        auto_clicker_value += 20 * prestige

        clearInterval(click_interval)
        click_interval = setInterval(function() {
            wealth += auto_clicker_value
            counter.innerHTML = wealth
        }, auto_clicker_speed)
    }
})

let upgrade3_cost = 100;
let upgrade3_level = 0;

const upgrade3 = document.getElementById("upgrade3");

function reset_upgrade3() {
    upgrade3_cost = 100
    upgrade3_level = 0
    auto_clicker_speed = 2000
    upgrade3.children[3].innerHTML = "Cost: " + upgrade3_cost
    upgrade3.children[2].innerHTML = "Level: " + upgrade3_level
}

upgrade3.addEventListener('click', function() {
    if (wealth >= upgrade3_cost && auto_clicker_speed > 200) {
        upgrade3_cost = pay(upgrade3, upgrade3_cost, 1.2)
        upgrade3_level += prestige
        upgrade3.children[2].innerHTML = "Level: " + upgrade3_level
        auto_clicker_speed -= 200 * prestige

        if (auto_clicker_speed <= 200) {
            upgrade3.children[3].innerHTML = "Fully Upgraded"
        }

        clearInterval(click_interval)
        click_interval = setInterval(function() {
            wealth += auto_clicker_value
            counter.innerHTML = wealth
        }, auto_clicker_speed)
    }
})

var upgrade4_cost = 100
var upgrade4_level = 0

function reset_upgrade4() {
    upgrade4_cost = 100
    upgrade4_level = 0         
    auto_clicker_value = 0
    upgrade4.children[3].innerHTML = "Cost: " + upgrade4_cost
    upgrade4.children[2].innerHTML = "Level: " + upgrade4_level
}


// auto clicker upgrade
const upgrade4 = document.getElementById("upgrade4");
upgrade4.addEventListener('click', function() {
    if (wealth >= upgrade4_cost) {
        upgrade4_cost = pay(upgrade4, upgrade4_cost, 1.2)
        upgrade4_level += prestige
        upgrade4.children[2].innerHTML = "Level: " + upgrade4_level
        auto_clicker_value += 50 * prestige

        clearInterval(click_interval)
        click_interval = setInterval(function() {
            wealth += auto_clicker_value
            counter.innerHTML = wealth
        }, auto_clicker_speed)
    }
})

let prestige1_cost = 100000;
const prestige1 = document.getElementById("prestige1");
prestige1.addEventListener('click', function() {
    if (wealth >= prestige1_cost) {
        pay(prestige1, prestige1_cost, 10)   
        prestige++
        wealth = 0
        counter.innerHTML = wealth
        prestige1.children[2].innerHTML = "Prestige: " + (prestige - 1)
        prestige1.children[0].innerHTML = "Enter sleep stage " + prestige

        reset_upgrade1()
        reset_upgrade2()
        reset_upgrade3()
        if (prestige === 2) {
            const stars = document.getElementById("star_group")
            body.style.opacity = "0"

            setTimeout(function () {
            stars.removeAttribute("hidden")
            body.style.background = "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)"

            clicker.setAttribute("src", "images/moon.png")
            const eye = document.getElementById("eye")
            eye.setAttribute("src", "images/eye_closed.png")

            upgrade4.removeAttribute("hidden")
            }, 1000)

            setTimeout(function () {
                body.style.opacity = "1"
            }, 1000)
        }
    }
})