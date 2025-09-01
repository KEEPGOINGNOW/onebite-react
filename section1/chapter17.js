console.log("chapter 17");

// 배열: 여러개의 값을 순차적으로 담을 수 있는 자료형
// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
// 순서는 0부터 시작됨
let item1 = arrC[0];
let item2 = arrC[8];
// console.log(item1, item2);

arrC[0] = "바꾼값";
console.log(arrC);
