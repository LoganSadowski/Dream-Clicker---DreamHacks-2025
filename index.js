var clicker = document.getElementById("clicker")
var counter = document.getElementById("counter")

var wealth = 0
var click_value = 1
var prestige = 1

clicker.addEventListener('click', function()  {
    wealth += click_value
    counter.innerHTML = wealth

    let id = null
    let i = 0
    let size = 500
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
    upgrade.children[2].innerHTML = "Cost: " + cost
    return cost
}

// Increase amount of wealth gained per click
var upgrade1_cost = 50
var upgrade1_level = 0
var upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener('click', function() {
    if (wealth >= upgrade1_cost) {
        upgrade1_cost = pay(upgrade1, upgrade1_cost, 1.2)
        upgrade1_level += prestige
        upgrade1.children[1].innerHTML = "Level: " + upgrade1_level
        click_value += prestige
    }
})


// auto clicker values
var upgrade2_cost = 100
var upgrade2_level = 0
var auto_clicker_value = 0
var auto_clicker_speed = 5000
var click_interval = setInterval(0)

// auto clicker upgrade
var upgrade2 = document.getElementById("upgrade2");
upgrade2.addEventListener('click', function() {
    if (wealth >= upgrade2_cost) {
        upgrade2_cost = pay(upgrade2, upgrade2_cost, 1.2)
        upgrade2_level += prestige
        upgrade2.children[1].innerHTML = "Level: " + upgrade2_level
        auto_clicker_value += prestige

        clearInterval(click_interval)
        click_interval = setInterval(function() {
            wealth += auto_clicker_value
            counter.innerHTML = wealth
        }, auto_clicker_speed)
    }
})

var upgrade3_cost = 1000
var upgrade3_level = 0
var upgrade3 = document.getElementById("upgrade3")
upgrade3.addEventListener('click', function() {
    if (wealth >= upgrade3_cost) {
        upgrade3_cost = pay(upgrade3, upgrade3_cost, 1.2)
        upgrade3_level += prestige
        upgrade3.children[1].innerHTML = "Level: " + upgrade3_level
        auto_clicker_speed -= 100 * prestige

        clearInterval(click_interval)
        click_interval = setInterval(function() {
            wealth += auto_clicker_value
            counter.innerHTML = wealth
        }, auto_clicker_speed)
    }
})

var prestige1_cost = 100000
var prestige1 = document.getElementById("prestige1")
prestige1.addEventListener('click', function() {
    if (wealth >= prestige1_cost) {
        pay(prestige1, prestige1_cost, 10)   
        prestige++
        prestige1.children[1].innerHTML = "Prestige: " + (prestige - 1)
        prestige1.children[0].innerHTML = "Enter sleep stage " + prestige
    }
})