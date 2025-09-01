console.log("chapter 11");

// 함수선언: 중복으로 작성되는 코드들 -> 생산성이 낮아짐(리펙토링 문제 발생)
// 반드시 소괄호()와 함께 작성해야 한다 -> 함수 호출이 안됨
// 함수 호출이 위에서 함수 선어보다 먼저 이루어져도 실행된다 -> 자바스크립트의 호이스팅(끌어올린다) 기능
function greeting() {
  console.log("안녕하세요");
}

// 함수를 호출하는 경우에만 확인 가능
// console.log("함수 호출 전");
// greeting(); // 함수 내부의 코드 실행됨
// console.log("함수 호출 후");

// 직사각형의 넓이를 구하는 함수
function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log("직사각형 넓이 =", area);
}

getArea();

// 직접 가로 세로 입력 가능한 넓이 함수
// 매개변수(width, height) 활용
// 함수 안에 또 다른 함수 선언 가능
function getArea1(width, height) {
  let area = width * height;
  console.log("직사각형 넓이 =", area);

  function Name() {
    // 중첩 함수
    console.log("임의의 함수 선언 가능");
  }
  Name();
}

getArea1(30, 50);

// return: 반환값 = 결과값 -> 함수가 어떤 값을 반환하게 만드는 역할
// return 밑에 있는 코드는 실제로 수행되지 않는다
function getArea2(width, height) {
  let area = width * height;
  return area;
}

let area1 = getArea2(10, 60);
console.log(area1);
