//조건문 업그레이드
function isKoreanFood(food){
    if(food==="불고기"||food==="비빔밥"||food==="떡볶이"){
        return true;
    }else{
        return false;
    }
}
//includes를 사용해서 업그레이드
function isKoreanFood(food){
    if(["불고기","떡볶이","비빔밥"].includes(food)){
        return true;
    }else{
        return false;
    }
}

const food1 = isKoreanFood("불고기")
console.log(food1)

const food2 = isKoreanFood("파스타")
console.log(food2)



const getMeal = (mealType)=> {
    if(mealType ==="한식") return "불고기"
    if(mealType ==="양식") return "파스타"
    if(mealType ==="중식") return "멘보샤"
    if(mealType ==="일식") return "초밥"
}

console.log(getMeal("한식"))
console.log(getMeal("중식"))
console.log(getMeal("양식"))
console.log(getMeal("일식"))

//업그레이드

const meal = {
    한식:"불고기",
    중식:"멘보샤",
    양식:"파스타",
    일식:"초밥",
    인도식:"카레"
}

const getMeal2 = (mealType)=> {
    return meal[mealType] || "굶기"
}

console.log(getMeal2("한식"))
console.log(getMeal2("중식"))
console.log(getMeal2("양식"))
console.log(getMeal2("인도식"))
console.log(getMeal2(""))