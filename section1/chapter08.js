console.log("chapter 8");

// 1. null 병합 연산자: 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

// ??: 연산에 참여하는 값들 중에 null, undefined가 아닌 값을 찾아냄
let var4 = var1 ?? var2;
// console.log(var4);

let var5 = var1 ?? var3;
// console.log(var5);

let var6 = var2 ?? var3; // 아닌 값들 중 순서 상 앞에 있는 값이 출력
// console.log(var6);

let userName;
let userNicName = "human";

// 유저이름이 존재하고, 닉네임이 undefined라면 유저이름을 저장해라
// 동시에 닉네임이 존재하고, 유저이름이 undefined라면 닉네임으로 저장해라
let dispalyName = userName ?? userNicName;
// console.log(dispalyName);

// 2. typeof 연산자: 값의 타입을 문자열로 변환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";
var7 = true;

// 뒤에 나오는 변수나 값의 타입을 문자열로 변환
let t1 = typeof var7;
// console.log(t1);

// 3. 삼항 연산자: 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓인 경우 값을 다르게 반환
let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수(짝), 홀수(홀) 출력
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
