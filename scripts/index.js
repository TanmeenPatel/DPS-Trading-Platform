// onload setting default balance to 100000 rupees.
localStorage.vis = localStorage.vis + "1"
if (localStorage.vis == "undefined1") {
    localStorage.balance = 100000
    localStorage.p1 = 259.076
    localStorage.p2 = 92.210
    localStorage.p3 = 150.456
    localStorage.p4 = 192.010
    localStorage.p5 = 72.789
    localStorage.p1_change = +"5.6"
    localStorage.p2_change = +"1.87"
    localStorage.p3_change = -"0.9"
    localStorage.p4_change = -"1.72"
    localStorage.p5_change = -"7.72"
    localStorage.stocks = '[{}]'
    localStorage.stock_history = JSON.stringify({ p1: [259.076], p2: [92.210], p3: [150.456], p4: [192.010], p5: [72.789] })
    localStorage.invested = "0"
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
    let product = getRandomInt(5)
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
    else if (product == 4) {
        p = "p5"
    }

    let value_dec = Number(localStorage[p]) * value / 100
    localStorage[p] = Number(localStorage[p]) - value_dec
    localStorage[`${p}_change`] = `-${value}`
    console.log(localStorage[p])
    register_change(p, localStorage[p])

}
function increase() {
    let product = getRandomInt(5)
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
    else if (product == 4) {
        p = "p5"
    }

    let value_inc = Number(localStorage[p]) * value / 100
    localStorage[p] = Number(localStorage[p]) + value_inc
    localStorage[`${p}_change`] = `+${value}`
    register_change(p, localStorage[p])
}

function Loop() {
    // here is buy and sell na?
    buy_s = document.getElementById('buy').value
    buy_s_name = document.querySelector(`option[value=${buy_s}]`).dataset.name
    sell_s = document.getElementById('sell').value
    sell_s_name = document.querySelector(`option[value=${sell_s}]`).dataset.name

    setTimeout(function () {
        display()
        if (k < 2) {
            Loop();
        }
    }, 200)
}
let n = 0
function display() {
    let worth = 0
    // displaying part
    // stocks is getting data from locastorage
    let stocks = JSON.parse(localStorage.stocks, [])
    for (l = 1; l <= 5; l++) {
        n++
        count = 0
        for (m = 1; m < stocks.length; m++) {
            if (stocks[m]['stock'] == `p${l}`) {
                count = count + Number(stocks[m]['number'])
            }
        }
        if (l == 1) {
            stock_n = 'Reliance Digital'
        }
        else if (l == 2) {
            stock_n = 'NVIDIA'
        }
        else if (l == 3) {
            stock_n = 'Tesla'
        }
        else if (l == 4) {
            stock_n = 'Tata'
        }
        else {
            stock_n = 'Microsoft'
        }
        worth = worth + (count * Number(localStorage[`p${l}`]))     //finding the sum of worth of all stocks based on current prices
        if (n <= 5) {
            let div = document.createElement("div");
            div.id = `display${l}`;
            document.getElementById("portfolio").appendChild(div)
            div.innerHTML = `You have ${count} of stock <br><b> ${stock_n}<b>`
        }
        else {
            document.getElementById(`display${l}`).innerHTML = `You have ${count} stock(s) of <br><b> ${stock_n}<b>`
        }
        document.getElementById("div-for-worth").innerHTML = `Your stocks are worth ` + String(worth).substring(0, 8)

    }

    if (Number(localStorage.balance) + worth > 100000) {    //to check if it's a profit
        document.getElementById("profit").innerHTML = String((Number(localStorage.balance) + worth) - 100000).substring(0, 8)
        document.getElementById("loss").innerHTML = "0"
    }
    else {  //else obviously it's a loss
        document.getElementById("loss").innerHTML = String(100000 - (Number(localStorage.balance) + worth)).substring(0, 8)
        document.getElementById("profit").innerHTML = "0"
    }
    for (a = 1; a <= 5; a++) {
        if (a == 1) {
            p = 'Reliance Digital '
        }
        else if (a == 2) {
            p = 'NVIDIA '
        }
        else if (a == 3) {
            p = 'Tesla '
        }
        else if (a == 4) {
            p = 'Tata '
        }
        else if (a == 5) {
            p = 'Microsoft '
        }
        if (localStorage[`p${a}_change`][0] == "-") {
            document.getElementById(`option${a}`).style.color = "red"
            document.getElementById(`option${a}y`).style.color = "red"
            if (document.getElementById("buy").value == `p${a}`) {
                document.getElementById('buy').style.color = "red"
            }
            if (document.getElementById("sell").value == `p${a}`) {
                document.getElementById('sell').style.color = "red"
            }
        }

        else {
            document.getElementById(`option${a}`).style.color = "green"
            document.getElementById(`option${a}y`).style.color = "green"
            if (document.getElementById("buy").value == `p${a}`) {
                document.getElementById('buy').style.color = "green"
            }
            if (document.getElementById("sell").value == `p${a}`) {
                document.getElementById('sell').style.color = "green"
            }
        }
        document.getElementById(`option${a}`).innerHTML = p + `(${String(localStorage[`p${a}`]).substring(0, 6)}) ${localStorage[`p${a}_change`].substring(0, 6)}%`
        document.getElementById(`option${a}y`).innerHTML = p + `(${String(localStorage[`p${a}`]).substring(0, 6)}) ${localStorage[`p${a}_change`].substring(0, 6)}%`
    }

    document.getElementById("net").innerHTML = String(Number(localStorage.balance) + worth).substring(0, 8)
    document.getElementById("invested").innerHTML = String(localStorage.invested).substring(0, 8) //updating the amount the player has invested
    document.getElementById("current-balance").innerHTML = localStorage.balance.substring(0, 8) //updating current balance 
    document.getElementById("current-price-sell-text").innerHTML = localStorage[sell_s].substring(0, 6)
    document.getElementById("current-price-buy-text").innerHTML = localStorage[buy_s].substring(0, 6)
    // document.getElementById("current-price-buy").innerHTML = localStorage[buy_s].substring(0, 6)
    // document.getElementById("trend-buy").innerHTML = `${localStorage[`${buy_s}_change`].substring(0, 6)}%` //representing the latest trend in buying subsection

    display_buy_chart(buy_s_name, buy_s)

    let quantity = Number(document.getElementById("quantity-buy").value)
    let option = document.getElementById('buy').value
    let current_price = Number(localStorage[option])
    let total = String(current_price * quantity)
    document.getElementById('invested-buy').innerHTML = total.substring(0, 6) //finding the total and displaying it in total

    let quantity2 = Number(document.getElementById("quantity-sell").value)
    let option2 = document.getElementById('sell').value
    let current_price2 = Number(localStorage[option2])
    let total2 = String(current_price2 * quantity2)
    document.getElementById('invested-sell').innerHTML = total2.substring(0, 6) //finding the total and displaying it in total


    // Selling Part
    // document.getElementById("current-price-sell").innerHTML = localStorage[sell_s].substring(0, 6)
    // document.getElementById("trend-sell").innerHTML = `${localStorage[`${sell_s}_change`].substring(0, 6)}%`
    if (localStorage[`${sell_s}_change`][0] == "-") {
        // document.getElementById("trend-sell").style.color = "red"
    }
    else {
        // document.getElementById("trend-sell").style.color = "green"
    }

    display_sell_chart(sell_s_name, sell_s)
}
Loop();

function buy() {
    let quantity = Number(document.getElementById("quantity-buy").value)
    let option = document.getElementById('buy').value
    let current_price = Number(localStorage[option])
    let total = String(current_price * quantity)
    if ((Number(document.getElementById("quantity-buy").value) != 'NaN') && (Number(localStorage.balance) >= Number(total))) {
        localStorage.balance = Number(localStorage.balance) - Number(total)
        const data = JSON.parse(localStorage.stocks, [])
        data.push({ stock: `${option}`, number: quantity })
        localStorage.stocks = JSON.stringify(data)
        document.getElementById("verified-bought").innerHTML = "Stock(s) bought successfully."
        setTimeout(function () {
            document.getElementById("verified-bought").innerHTML = ""
        }, 5000)
    }
    else if (Number(localStorage.balance) < Number(total)) {
        document.getElementById("verified-bought").innerHTML = "You do not have enough money."
        setTimeout(function () {
            document.getElementById("verified-bought").innerHTML = ""
        }, 5000)
    }
    else {
        document.getElementById("verified-bought").innerHTML = "The Quantity field must be a number."
        setTimeout(function () {
            document.getElementById("verified-bought").innerHTML = ""
        }, 5000)
    }
    localStorage.invested = Number(localStorage.invested) + Number(total)
}
function sell() {
    let quantity2 = Number(document.getElementById("quantity-sell").value)
    let option2 = document.getElementById('sell').value
    let current_price2 = Number(localStorage[option2])
    let total2 = current_price2 * quantity2
    let stocks = JSON.parse(localStorage.stocks, [])
    let sum = 0
    for (j = 1; j < stocks.length; j++) {
        if (stocks[j]['stock'] == option2) {
            sum = sum + Number(stocks[j]['number'])
        }
    }
    if (quantity2 <= sum) {
        localStorage.balance = Number(localStorage.balance) + total2
        stocks.push({ stock: `${option2}`, number: -(quantity2) })
        localStorage.stocks = JSON.stringify(stocks)
        document.getElementById("verified-sold").innerHTML = "Stock(s) sold successfully."
        setTimeout(function () {
            document.getElementById("verified-sold").innerHTML = ""
        }, 5000)
    }
    else {
        document.getElementById("verified-sold").innerHTML = "You do not have enough stocks."
        setTimeout(function () {
            document.getElementById("verified-sold").innerHTML = ""
        }, 5000)
    }
}
