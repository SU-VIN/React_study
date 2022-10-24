//배열 내장함수
const arr= [1,2,3,4,5]
var newArr= [];
//1. forEach(배열 순회)
arr.forEach((value)=>console.log(value))
arr.forEach((value)=>{
    newArr.push(value*2)
})
console.log(newArr)


//2. map(조건에맞게 새로운 배열을 만듬 단 원본배열과 길이는 똑같음.)
newArr = arr.map((value)=>{
    return value*2
})
console.log(newArr)

//3. includes(배열에 요소가 있는지 t or f)
console.log(arr.includes(6))

//4. indexOf(배열에 찾는 요소가 몇번째 인덱스에 있는지 없으면 -1)
console.log(arr.indexOf(1))

//5. findIndex(객체배열일때 요소 좀 더 쉽게 찾을 수 있음)

const arrColor = [
    {color: "red"},
    {color: "blue"},
    {color: "yellow"},
    {color: "green"}
]
console.log(arrColor.findIndex((value)=>{
  return  value.color === "green"
}))

// 인덱스 말고 그 요소자체를 알고 싶을떼
console.log(arrColor[arrColor.findIndex((value)=>{
    return  value.color === "green"
  })])
  
//6. find(객체배열일때 요소의 인덱스 말고 그 요소자체를 알 수 있음)  
console.log(arrColor.find((value)=>{
    return  value.color === "green"
  }))

//7. filter (배열에서 특정한 조건을 만족하는것들만 출력 원본배열과 길이 다를 수 있음)
const arrColorNum = [
    {num:1,color: "red"},
    {num:2,color: "blue"},
    {num:3,color: "yellow"},
    {num:4,color: "green"},
    {num:5,color: "blue"},
]

console.log(arrColorNum.filter((value)=>{
    return value.color === "blue"
}))

//8. slice (배열 자르기 slice(begin,end) begin 부터 end-1까지 출력)
console.log(arrColorNum.slice(0,2))


//9. concat (배열 합치기)
const arrColorNum1 = [
    {num:1,color: "red"},
    {num:2,color: "blue"},
    {num:3,color: "yellow"},
]

const arrColorNum2= [
    {num:4,color: "green"},
    {num:5,color: "blue"},
]
console.log(arrColorNum1.concat(arrColorNum2))

//10. sort (원본 배열 문자열 기준으로 정렬함)
let chars = ["나","다","가","라"]
let nums = [2,3,1,4]
console.log(chars.sort())

const compare = (a,b)=>{
    if(a>b){
        return 1 //큰값이 뒤로
    }
    else if(a<b){
        return -1//작은값이 앞으로
    }else{
        return 0
    }
}

console.log(nums.sort(compare))

//11. join(배열 합쳐서 문자열로 반환)
const arr3 = ["임짱돌님","안녕하세요","또오셨군요"]

console.log(arr3.join()) //쉼표 구분
console.log(arr3.join(" ")) //공백 구분
console.log(arr3.join("/")) //슬래쉬 구분
