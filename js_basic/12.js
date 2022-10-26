//spread 연산자 ...
//객체에서
const cookie ={
    base: "cookie",
    mandIn:"korea"
}

const chocochipCookie = {
    ...cookie,
    toping:"chocochip"
}

const blueberryCookie = {
    ...cookie,
    toping:"blueberry"
}

const strawberryCookie = {
    ...cookie,
    toping:"strawberry"
}

console.log(chocochipCookie)
console.log(blueberryCookie)
console.log(strawberryCookie)

//배열에서

const noTopingCookies = ["촉촉한쿠키","안촉촉한쿠키"];
const topingCookies = ["바나나쿠키","블루베리쿠키","딸기쿠키","초코칩쿠키"]

const concatCookies = noTopingCookies.concat(topingCookies)
const spreadCooikes = [...noTopingCookies,"함정쿠키",...topingCookies]

console.log(concatCookies)
console.log(spreadCooikes)