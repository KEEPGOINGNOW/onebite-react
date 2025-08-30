console.log("chapter 4");

// 1. 변수
// let: 변수 선언
let age = 27;
// 변수를 나타냄
// console.log(age);

// 변수 재선언
age = 30;

// 2. 상수: 변수와 달리 한번 저장되면 바꿀 수 없음
// 초기화 없이 상수를 선언하는 경우 오류 발생
const birth = "1997.01.07";
// birth = "123"; -> 재선언하는 경우 콘솔에서 오류 확인 가능

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let _2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드: 친절하고 의미있는 변수명을 사용
let salesCount = 4;
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;
console.log(totalSalesCount);
