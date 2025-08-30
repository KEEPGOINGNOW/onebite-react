console.log("chapter 6");

// 형 변환(Type Casting): 어떤 값의 타입을 다른 타입으로 변경
// 1. 묵시적 형 변환: 개발자 설정 X 자바스크립트 엔진이 형 변환하는 것

let num = 10;
let str = "20";
const result = num + str;
// console.log(result);

// 명시적 형 변환: 개발자가 직접 함수 등을 통해 형 변환 일으킴
// -> 프로그래머 내장함수 등을 이용해 직접 형 변환 지시
let str1 = "10";
let strToNum1 = Number(str1);
//console.log(10 + strToNum1);

let str2 = "10개";
let strTonum2 = parseInt(str2);
// console.log(strTonum2);

// 숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1);
console.log(numTostr1 + "입니다.");
