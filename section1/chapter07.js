console.log("chapter 7");

// 연산자: 프로그래밍에서의 다양한 연산을 위한 기호, 키워드 의미
// 덧셈(+), 뺄셈(-), 곱셉(*), 나눗셈(/), ...

// 1. 대입 연산자(=)
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
// console.log(num6);

let num7 = (1 + 2) * 10;
// console.log(num7);

// 3. 복합 대입 연산자(산술 + 대입)
let num8 = 10;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;
// console.log(num8);

// 4. 중감 연산자
let num9 = 10;
++num9; // 전위연산
num9++; // 후위연산
// console.log(num9);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
// console.log(or, and, not);

// 6. 비교 연산자
// === 3번을 사용하는 경우에는 값의 자료형까지 고려한다
let comp0 = 1 == "1"; // 자료형은 고려되지 않아 true를 산출
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
// console.log(comp0, comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
// console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);
