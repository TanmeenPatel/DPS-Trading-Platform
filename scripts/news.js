let NewsTrip = [
    { News: "Research by Rimac causes new disruption in car batteries.", P: "Tesla makes use of new technology to make better vehicles.", N: "Tesla loses it's technological edge over battery production." },
    { News: "Mitsubishi outsources part of Japanese production to third world country.", P: "Crtics laud the decision as it will improve profits.", N: "Critics criticize Mitsubishi for abandoning their home country to make a little profit." },
    { News: "Apple encourages government of China to adopt better working laws. Potential sanction on Chinese production facilities.", P: "People appreciate Apple's commitment to health and well-being.", N: "Apple's factories get affected by the sanctions." },
    { News: "Kota considers expansion for more coaching buildings.", P: "Byjus utilize opportunity to add physical coaching.", N: "Less students use Byjus because of onsite class." },
    { News: "Microsoft releases Windows 12 in India.", P: "People appreciate the new design. Everyone adopts windows 12.", N: "No one feels the need to update to windows 12. " }
]

let NewsTrip2 = [
    { P: "p1", N: "p2", R: "Shell is facing stress due to the Russia-Ukraine war. Shell decides to stop extraction of oil for 15 days." },
    { P: "p5", N: "p3", R: "Biometric tech startup refuses buyout from Apple. Apple files lawsuit against the company." },
    { P: "p4", N: "p5", R: "Microsoft announces a partnership with Byjus, agreeing to add Byjus as a default installed application." }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
i = 0
d = NewsTrip
var dhoom = 0
function loop() {
    setTimeout(function () {
        if (i == 5) {
            d = NewsTrip2
            i = 0
        }
        if (d == NewsTrip) {
            setTimeout(function () {
                document.getElementById("news").innerHTML = ""
                document.getElementById("news-info").style.display = "none"
            }, 5000)
            let p = `p${i + 1}`
            if (i < d.length) {
                document.getElementById("news").innerHTML = d[i].News
                document.getElementById("news-info").style.display = "block"
                setTimeout(function () {
                    let random = getRandomInt(2)
                    if (random == 0) {
                        document.getElementById("news").innerHTML = d[i].N
                        document.getElementById("news-info").style.display = "flex"
                        setTimeout(function () {
                            document.getElementById("news").innerHTML = ""
                            document.getElementById("news-info").style.display = "none"
                        }, 5000)
                        let value = getRandomArbitrary(10, 20)
                        let dec = Number(localStorage[p]) * value / 100
                        localStorage[p] = Number(localStorage[p]) - dec
                        localStorage[`${p}_change`] = `-${value}`
                        register_change(p, localStorage[p])
                        i++
                    }
                    else {
                        document.getElementById("news").innerHTML = d[i].P
                        document.getElementById("news-info").style.display = "flex"
                        setTimeout(function () {
                            document.getElementById("news").innerHTML = ""
                            document.getElementById("news-info").style.display = "none"
                        }, 5000)
                        let value = getRandomArbitrary(15, 25)
                        let inc = Number(localStorage[p]) * value / 100
                        localStorage[p] = Number(localStorage[p]) + inc
                        localStorage[`${p}_change`] = `+${value}`
                        register_change(p, localStorage[p])
                        i++
                    }
                }, 15000)
                loop();
            }
        }
        else if (d == NewsTrip2) {
            if (dhoom == 0) {
                document.getElementById("news").innerHTML = "From now on, the news that will be displayed will affect 2 stock prices. Think logically and figure out where to invest."
                document.getElementById("news-info").style.display = "block"
                dhoom++
            }
            setTimeout(function () {
                document.getElementById("news").innerHTML = ""
                document.getElementById("news-info").style.display = "none"
            }, 5000)
            let pneg = NewsTrip2[i].N
            let ppos = NewsTrip2[i].P
            if (i < d.length) {
                document.getElementById("news").innerHTML = d[i].R
                document.getElementById("news-info").style.display = "block"
                setTimeout(function () {
                    let value = getRandomArbitrary(10, 20)
                    let dec = Number(localStorage[pneg]) * value / 100
                    localStorage[pneg] = Number(localStorage[pneg]) - dec
                    localStorage[`${pneg}_change`] = `-${value}`
                    register_change(pneg, localStorage[pneg])
                    let value2 = getRandomArbitrary(15, 25)
                    let inc = Number(localStorage[ppos]) * value2 / 100
                    localStorage[ppos] = Number(localStorage[ppos]) + inc
                    localStorage[`${ppos}_change`] = `+${value2}`
                    register_change(ppos, localStorage[ppos])
                    document.getElementById("news").innerHTML = "Stock prices of the affected stocks have been uodated."
                    document.getElementById("news-info").style.display = "flex"
                    setTimeout(function () {
                        document.getElementById("news").innerHTML = ""
                        document.getElementById("news-info").style.display = "none"
                    }, 5000)
                    i++
                }, 15000)
                loop();
            }
        }
    }, 45000)
}
loop()