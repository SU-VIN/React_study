/*

html에선 중복 코드가 많이 일어남 (header,footer)등은 페이지가 바껴도
그대로인 경우가 많으니깐 그래서 여기서 수정을 하려면 모든파일을
다 수정해야하는데 파일의 개수가 많을경우 수정하기 힘들어짐
중복 코드 작성시 - shotgun surgery (산탄총 수술) 문제 생김!

컴포넌트화 방식 - 재사용할 부분들을 모듈로 만들어 불러와서씀

React 는 Component 기반의 UI라이브러리


명령형 프로그램- 절차를 하나하나 다 나열해야함 ex) j query
선언형 프로그램- 그냥 목적을 바로 말함 ex) React

virtual DOM
DOM(Document Object Model )
자바스크립트가 요소를 추가하는 과정에서 발생하는 변화를
실제의 dom을 업데이트 시키는게 아니라 가상의 dom을 만들어서함 
그래서 실제로 화면에 렌더링 하지는 않음
쉽게 다섯번 업데이트 해야할것을 
다섯개를 모아서 한번에 업데이트함
성능저하를 막을 수 있음
*/