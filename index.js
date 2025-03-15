var clicker = document.getElementById("clicker")
var counter = document.getElementById("counter")

var wealth = 0
var click_value = 1

clicker.addEventListener('click', function()  {
    wealth += click_value
    counter.innerHTML = wealth

    let id = null
    let i = 0
    let size = 500
    clearInterval(id)
    id = setInterval(frame, 5)
    function frame() {
    if (i === 20) {
        clearInterval(id)
    } else if (i < 10) {
        size += 5
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

var upgrade1_cost = 1
var upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener('click', function() {
    if (wealth >= upgrade1_cost) {
        upgrade1_cost = pay(upgrade1, upgrade1_cost)
        click_value++
    }   
})

function pay(upgrade, cost) {
    wealth -= cost
    cost = Math.ceil(cost * 1.2)
    counter.innerHTML = wealth
    upgrade.children[1].innerHTML = "Cost: " + cost
    return cost
}
