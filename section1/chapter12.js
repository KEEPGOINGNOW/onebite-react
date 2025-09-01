console.log("chapter 12");

// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
// console.log(varA); // 함수 실행 코드 자체가 출력
// varA(); // 함수 할당된 변수 자체를 함수처럼 활용 가능

// 선언식이 아니다 -> 함수 이름으로는 출력이 안되고 변수 이름으로 출력 가능
// 콜백 함수 같은 등등의 개념에서 유용하게 활용된다
let varB = function funcB() {
  //익명 함수
  console.log("funcB");
};

// varB();
// funcB(); // 오류 발생

// 2. 화살표 함수: function을 없애고 화살표로 함수 선언
let varC = () => {
  return 1;
};

// console.log(varC());

// 중괄호도 지우고 작성 가능
let varD = (value) => value + 1;
// console.log(varD(10));

let varE = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varE(10));
