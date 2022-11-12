// onload setting default balance to 100000 rupees.
localStorage.vis = localStorage.vis + "1"
if (localStorage.vis == "undefined1") {
    localStorage.balance = 100000
    localStorage.p1 = 259.076
    localStorage.p2 = 92.210
    localStorage.p3 = 150.456
    localStorage.p4 = 192.010
    localStorage.p1_change = +"5.6"
    localStorage.p2_change = +"1.87"
    localStorage.p3_change = -"0.9"
    localStorage.p4_change = -"1.72"
}
var k = 1;

// The main loop
function myLoop() {
    setTimeout(function () {
        choose()
        if (k < 2) {
            myLoop();
        }
    }, 30000)
}

myLoop();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function choose() {
    let option = getRandomInt(2)
    if (option == 0) {
        decrease()
    }
    else {
        increase()
    }
}
function decrease() {
    let product = getRandomInt(4)
    let value = getRandomArbitrary(1, 4)
    let p;

    if (product == 0) {
        p = "p1"
    }
    else if (product == 1) {
        p = "p2"
    }
    else if (product == 2) {
        p = "p3"
    }
    else if (product == 3) {
        p = "p4"
    }

    let value_dec = Number(localStorage[p]) * value / 100
    localStorage[p] = Number(localStorage[p]) - value_dec
    localStorage[`${p}_change`] = `-${value}`

}
function increase() {
    let product = getRandomInt(4)
    let value = getRandomArbitrary(1, 4)
    let p;

    if (product == 0) {
        p = "p1"
    }
    else if (product == 1) {
        p = "p2"
    }
    else if (product == 2) {
        p = "p3"
    }
    else if (product == 3) {
        p = "p4"
    }

    let value_inc = Number(localStorage[p]) * value / 100
    localStorage[p] = Number(localStorage[p]) + value_inc
    localStorage[`${p}_change`] = `+${value}`
}

function Loop() {
    // here is buy and sell na?
    buy_s = document.getElementById('buy').value
    sell_s = document.getElementById('sell').value

    setTimeout(function () {
        display()
        if (k < 2) {
            Loop();
        }
    }, 500)
}

function display() {
    // Buying Part
    document.getElementById("current-price-buy").innerHTML = localStorage[buy_s].substring(0, 6)
    document.getElementById("trend-buy").innerHTML = `${localStorage[`${buy_s}_change`].substring(0, 6)}%`
    if (localStorage[`${buy_s}_change`][0] == "-") {
        document.getElementById("trend-buy").style.color = "red"
    }
    else {
        document.getElementById("trend-buy").style.color = "green"
    }

    // Selling Part
    document.getElementById("current-price-sell").innerHTML = localStorage[sell_s].substring(0, 6)
    document.getElementById("trend-sell").innerHTML = `${localStorage[`${sell_s}_change`].substring(0, 6)}%`
    if (localStorage[`${sell_s}_change`][0] == "-") {
        document.getElementById("trend-sell").style.color = "red"
    }
    else {
        document.getElementById("trend-sell").style.color = "green"
    }
}
Loop();
