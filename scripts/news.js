// let NewsTrip = [
//     { News: "Reliance digital decides to offer 5G services to all of it's users.", P: "5G succeeds in India.", N: "5G fails in India." },
//     { News: "AMD radeon releases their first ever graphics drive in India. It looks cool!", P: "AMD Radeon does not do well for graphic drivers in India.", N: "AMD Radeon succeeds in selling graphic drivers in India." },
//     { News: "Tesla gets permission to manufacture cars in India.", P: "People's opinion has shifted to support electric cars in India.", N: "Indians boycott electric cars." },
//     { News: "A desperate attempt is made to revive Air India.", P: "An Air India aircraft landed safely into Mumbai after a dual engine failure.", N: "Pilots boycott Vistara due to crew harassment complaints." }
// ]
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// i = 0
// function loop() {
//     setTimeout(function () {
//         let p = `p${i + 1}`
//         if (i < NewsTrip.length) {
//             alert(NewsTrip[i].News)
//             setTimeout(function () {
//                 let random = getRandomInt(2)
//                 if (random == 0) {
//                     alert(NewsTrip[i].N)
//                     let value = getRandomArbitrary(15, 25)
//                     let dec = Number(localStorage[p]) * value / 100
//                     localStorage[p] = Number(localStorage[p]) - dec
//                     localStorage[`${p}_change`] = `-${value}`
//                     i++
//                 }
//                 else {
//                     alert(NewsTrip[i].P)
//                     let value = getRandomArbitrary(15, 40)
//                     let inc = Number(localStorage[p]) * value / 100
//                     localStorage[p] = Number(localStorage[p]) + inc
//                     localStorage[`${p}_change`] = `+${value}`
//                     i++
//                 }
//             }, 15000)
//             loop();
//         }
//     }, 45000)
// }
// loop()

