console.log("chapter 13");

// 1. 콜백함수: 자신이 아닌 다른 함수에, 인수로써 정달된 함수를 의미한다
function main(value) {
  console.log("start");
  value(); // 다른 함수를 값으로 사용하여 다른 함수 출력이 위 함수를 통해 진해됨
  console.log("end");
}

function sub() {
  console.log("I am sub");
}

// main(sub);

// 화살표 함수
main(() => {
  console.log("i am sub");
});

// 2. 콜백 함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

// repeat(5);

// 중복코드를 작성하게 되면 효율성이 낮아짐
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

// repeatDouble(5);

// 콜백함수 추가
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// 간결하게 나타낼 수 있음
repeat(5, (idx) => {
  console.log(idx * 2);
});
