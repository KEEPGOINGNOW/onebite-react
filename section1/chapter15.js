console.log("chapter 15");

// 객체 -> 객체타입 -> Object
// 객체(Object): 현실세계에 존재하는 어떤 사물이나 개념 표현 용이

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티(객체 속성)
let person = {
  name: "사람이름", // key : value
  age: 20,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "띄어쓰기 사용하는 경우": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 독점 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name; // 간결해서 자주 사용
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
let food = person.favoriteFood;
// console.log(name, age, hobby, food);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
let job = person.job;
// console.log(person);

//3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
// console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1, result2);
