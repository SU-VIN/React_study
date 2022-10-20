//콜백 함수
//어떤 함수에 매개변수로 함수를 넘겨주는것
function checkMood(mood, goodCallback, badCallback){
    if(mood =="good"){
        goodCallback()
        //기분 좋을때 하는 동작
    }else{
        badCallback()
        //기분 안좋을때 하는 동작
    }
}

function cry(){
    console.log("ACTION :: CRY")
}
function sing(){
    console.log("ACTION :: SING")
}
function dance(){
    console.log("ACTION :: DANCE")
}
//함수를 값에 담아 즉 함수표현식
checkMood("bad",sing,cry)