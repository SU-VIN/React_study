// import './App.css';
import React  from 'react';
import MyHeader from './MyHeader';
import Counter from './Counter';
import OddEvenResult from './OddEvenResult';
import Container from './Container';

function App() {
  const number = 5;

  const counterProps={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
  }

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>

  );
}


//module.exports

//react가 주로 사용하는 es module system
//module를 내보내면 import 이름 from 경로로 사용함
export default App;


/*
JSX 규칙
1. 닫힘규칙- <div></div> 안닫아 주면 에러, <div/> 열자마자 닫는것은 self colsing
2. 최상위태그 규칙- return 가장 위에 코드들을 모두 감싸고 있는 태그
최상위 태그를 만드록 싶지 않다면 import React from 'react' 한 후
<React.Fragment></React.Fragment> 로 묶어주면됨
*/