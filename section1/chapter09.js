console.log("chapter 9");

// 조건문: 특정 조건을 만족하는 경우 실행되는 코드를 작성하기 위한 문법
// if, switch 조건문이 존재

// 1.  if 조건문 (if문): 복잡한 여러 개의 조건을 이용하는 경우 용이
let num = 9;

// if(조건식){조건 만족 시 실행 코드}
// else {조건 만족하지 않는 경우 실행 코드}
// 무조건 if로 시작해서 else로 종료되어야 한다.
if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else {
  console.log("조건에 맞지 않습니다.");
}

//else if: 새로운 조건을 추가하는 경우 사용
let num1 = 6;

if (num1 >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num1 >= 5) {
  console.log(num1);
  console.log("num이 10 미만 5 이상입니다.");
} else {
  console.log("조건에 맞지 않습니다.");
}

// 2. Switch 조건문: 어떤 변수의 값을 기준으로 각각 다른 코드 실행하는 경우 용이
// if문과 기능 자체는 동일
// -> 다수의 조건 처리 시 if보다 직관적
let animal = "owl";

// 모든 값이 나오는 이유: case 일치하는 경우 나머지 코드 전부 실행한다.
// break: 스위치문을 원하는 케이스에서만 멈추는 역할
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("위 동물은 존재하지 않습니다."); // if문의 else 역할
  }
}
