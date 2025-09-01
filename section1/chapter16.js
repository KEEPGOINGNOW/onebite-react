console.log("chapter 16");

// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; // 상수인 animal에 다른 객체 생성하면 오류 발생

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// animal = 123; // 아예 새로운 값을 할당하는 것은 오류가 발생한다.
console.log(animal); // 객체 값의 프로퍼티를 변경하는 것은 문제 없음

// 2. 메서도: 객체 프로퍼티 중 값이 함수인 프로퍼티를 의미한다.
const person = {
  name: "홍길동",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
