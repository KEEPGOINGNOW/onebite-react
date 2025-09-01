console.log("chapter 14");

// 스코프 = 범위: 변수나 함수에 접근하거나 호출할 수 있는 범위를 의미한다.
// 전역(전체 영역) 스코프 / 지역 스코프
// 전역 스코프: 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {}
}

funcA();

// 접근이 불가능한 영역에 있는 변수를 알 수 없음
// console.log(b);
// funcB(); // 지역 스코프로 인한 오류 발생

if (true) {
  let c = 1; // 중괄호(블럭) 내에서는 모두 지역 스코프를 가짐
}
// console.log(c); // 오류 발생

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcC() {}
}

// 반복문 안에서는 전역 스코
funcC();
