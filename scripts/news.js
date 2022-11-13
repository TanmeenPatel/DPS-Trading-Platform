let NewsTrip = [
    { News: "Reliance digital decides to offer 5G services to all of it's users.", P: "<br>5G succeeds in India. ", N: "<br>5G fails in India." },
    { News: "AMD radeon releases their first ever graphics drive in India. It looks cool!", P: "AMD Radeon does not do well for graphic drivers in India.", N: "AMD Radeon succeeds in selling graphic drivers in India." },
    { News: "Tesla gets permission to manufacture cars in India.", P: "People's opinion has shifted to support electric cars in India.", N: "Indians boycott electric cars." },
    { News: "Tata decides to buy two major Indian airlines: Air India and Vistara", P: "An Air India aircraft landed safely into Mumbai after a dual engine failure.", N: "Pilots boycott Vistara due to crew harassment complaints." },
    { News: "Microsoft releases windows 12 in India.", P: "Windows 12 update is so good looking. Everyone Adopts windows 12.", N: "No one feels the need to update to windows 12. " },
]
let NewsTrip2 = [
    { News: "Enter new news here for Reliance", P: "Enter it's positives for Reliance", N: "Enter it's negatives for Reliance" },
    { News: "Enter new news here for NVIDIA", P: "Enter it's positives for NVIDIA", N: "Enter it's negatives for NVIDIA" },
    { News: "Enter new news here for Tesla", P: "Enter it's positives for Tesla", N: "Enter it's negatives for Tesla" },
    { News: "Enter new news here for Tata", P: "Enter it's positives for Tata", N: "Enter it's negatives for Tata" },
    { News: "Enter new news here for Microsoft", P: "Enter it's positives for Microsoft", N: "Enter it's negatives for Micosoft" }
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
i = 0
d = NewsTrip
function loop() {
    setTimeout(function () {
        if (i == 5) {
            d = NewsTrip2
            i = 0
        }
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
                    let value = getRandomArbitrary(15, 25)
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
                    let value = getRandomArbitrary(15, 40)
                    let inc = Number(localStorage[p]) * value / 100
                    localStorage[p] = Number(localStorage[p]) + inc
                    localStorage[`${p}_change`] = `+${value}`
                    register_change(p, localStorage[p])
                    i++
                }
            }, 15000)
            loop();
        }
    }, 45000)
}
loop()

