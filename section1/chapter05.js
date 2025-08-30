console.log("chapter 5");

// 자료형(Type)=집합: 동일한 속성이나 특징을 가진 원소들의 묶음
// 자료형 -> 원시타입 / 객체타입
// 원시타입 -> Number, String, Boolean, Null, Undefined
// 객체 타입 -> Object -> Array, Function, RegexExp

// 원시 타입(기본형 타입): 프로그래밍에 있어 기본적인 값들의 타입
// 1. Numer Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 + num2);
// console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // not a number: 수치 연산을 실패한 경우의 결과값으로 활용
// console.log(1 * "Hello"); // 계산이 안되는 경우에는 NaN이 콘솔에 표시됨(수학연산에 용이)

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let myIntroduce = myName + myLocation;
//console.log(myIntroduce);

// 백팁을 통해 문자열을 구성한다면 $과 {}를 통해 문자열 포함 가능 -> 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
// console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;
// console.log(isSwitchOn);

// 4. Null Type: 명시적으로 이 변수에 어떠한 값도 없다는 의미
let empty = null;

// 5. Undefined Type: 변수를 선언하고 아무런 값을 할당하지 않는 경우 자동으로 들어가는 값
let none;
console.log(none);
