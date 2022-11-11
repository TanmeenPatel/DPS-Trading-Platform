// onload setting default balance to 100000 rupees.
localStorage.balance = 100000
localStorage.p1 = 259.076
localStorage.p2 = 92.210
localStorage.p3 = 150.456
localStorage.p4 = 192.010
localStorage.p1_change = +"5.6"
localStorage.p2_change = +"1.87"
localStorage.p3_change = -"0.9"
localStorage.p4_change = -"1.72"
var i = 1;
function myLoop() {
    setTimeout(function () {
        choose()
        if (i < 2) {
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
    if (product == 0) {
        let value = getRandomArbitrary(1, 4)
        let value_dec = Number(localStorage.p1) * value / 100
        localStorage.p1 = Number(localStorage.p1) - value_dec
        localStorage.p1_change = `-${value}`
    }
    else if (product == 1) {
        let value = getRandomArbitrary(1, 4)
        let value_dec = Number(localStorage.p2) * value / 100
        localStorage.p2 = Number(localStorage.p2) - value_dec
        localStorage.p2_change = `-${value}`
    }
    else if (product == 2) {
        let value = getRandomArbitrary(1, 4)
        let value_dec = Number(localStorage.p3) * value / 100
        localStorage.p3 = Number(localStorage.p3) - value_dec
        localStorage.p3_change = `-${value}`
    }
    else if (product == 3) {
        let value = getRandomArbitrary(1, 4)
        let value_dec = Number(localStorage.p4) * value / 100
        localStorage.p4 = Number(localStorage.p4) - value_dec
        localStorage.p4_change = `-${value}`
    }
}
function increase() {
    let product = getRandomInt(4)
    if (product == 0) {
        let value = getRandomArbitrary(1, 4)
        let value_inc = Number(localStorage.p1) * value / 100
        localStorage.p1 = Number(localStorage.p1) + value_inc
        localStorage.p1_change = `+${value}`
    }
    else if (product == 1) {
        let value = getRandomArbitrary(1, 4)
        let value_inc = Number(localStorage.p2) * value / 100
        localStorage.p2 = Number(localStorage.p2) + value_inc
        localStorage.p2_change = `+${value}`
    }
    else if (product == 2) {
        let value = getRandomArbitrary(1, 4)
        let value_inc = Number(localStorage.p3) * value / 100
        localStorage.p3 = Number(localStorage.p3) + value_inc
        localStorage.p3_change = `+${value}`
    }
    else if (product == 3) {
        let value = getRandomArbitrary(1, 4)
        let value_inc = Number(localStorage.p4) * value / 100
        localStorage.p4 = Number(localStorage.p4) + value_inc
        localStorage.p4_change = `+${value}`
    }
}

function Loop() {
    buy_s = document.getElementById('buy').value
    sell_s = document.getElementById('sell').value

    setTimeout(function () {
        display()
        if (i < 2) {
            Loop();
        }
    }, 500)
}
function display() {
    if (buy_s == "p1") {
        document.getElementById("current-price-buy").innerHTML = localStorage.p1.substring(0, 6)
        document.getElementById("trend-buy").innerHTML = `${localStorage.p1_change.substring(0, 6)}%`
        if (localStorage.p1_change[0] == "-") {
            document.getElementById("trend-buy").style.color = "red"
        }
        else {
            document.getElementById("trend-buy").style.color = "green"
        }
    }
    else if (buy_s == "p2") {
        document.getElementById("current-price-buy").innerHTML = localStorage.p2.substring(0, 6)
        document.getElementById("trend-buy").innerHTML = `${localStorage.p2_change.substring(0, 6)}%`
        if (localStorage.p2_change[0] == "-") {
            document.getElementById("trend-buy").style.color = "red"
        }
        else {
            document.getElementById("trend-buy").style.color = "green"
        }
    }
    else if (buy_s == "p3") {
        document.getElementById("current-price-buy").innerHTML = localStorage.p3.substring(0, 6)
        document.getElementById("trend-buy").innerHTML = `${localStorage.p3_change.substring(0, 6)}%`
        if (localStorage.p3_change[0] == "-") {
            document.getElementById("trend-buy").style.color = "red"
        }
        else {
            document.getElementById("trend-buy").style.color = "green"
        }
    }
    else if (buy_s == "p4") {
        document.getElementById("current-price-buy").innerHTML = localStorage.p4.substring(0, 6)
        document.getElementById("trend-buy").innerHTML = `${localStorage.p4_change.substring(0, 6)}%`
        if (localStorage.p4_change[0] == "-") {
            document.getElementById("trend-buy").style.color = "red"
        }
        else {
            document.getElementById("trend-buy").style.color = "green"
        }
    }
    if (sell_s == "p1") {
        document.getElementById("current-price-sell").innerHTML = localStorage.p1.substring(0, 6)
        document.getElementById("trend-sell").innerHTML = `${localStorage.p1_change.substring(0, 6)}%`
        if (localStorage.p1_change[0] == "-") {
            document.getElementById("trend-sell").style.color = "red"
        }
        else {
            document.getElementById("trend-sell").style.color = "green"
        }
    }
    else if (sell_s == "p2") {
        document.getElementById("current-price-sell").innerHTML = localStorage.p2.substring(0, 6)
        document.getElementById("trend-sell").innerHTML = `${localStorage.p2_change.substring(0, 6)}%`
        if (localStorage.p2_change[0] == "-") {
            document.getElementById("trend-sell").style.color = "red"
        }
        else {
            document.getElementById("trend-sell").style.color = "green"
        }
    }
    else if (sell_s == "p3") {
        document.getElementById("current-price-sell").innerHTML = localStorage.p3.substring(0, 6)
        document.getElementById("trend-sell").innerHTML = `${localStorage.p3_change.substring(0, 6)}%`
        if (localStorage.p3_change[0] == "-") {
            document.getElementById("trend-sell").style.color = "red"
        }
        else {
            document.getElementById("trend-sell").style.color = "green"
        }
    }
    else if (sell_s == "p4") {
        document.getElementById("current-price-sell").innerHTML = localStorage.p4.substring(0, 6)
        document.getElementById("trend-sell").innerHTML = `${localStorage.p4_change.substring(0, 6)}%`
        if (localStorage.p4_change[0] == "-") {
            document.getElementById("trend-sell").style.color = "red"
        }
        else {
            document.getElementById("trend-sell").style.color = "green"
        }
    }

}
Loop();
