console.log("chapter 10");

// 반복문: 어떤 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
// for(초기식; 조건식; 증감식){반복 실행될 코드}
for (let idx = 0; idx < 5; idx++) {
  console.log("반복");
}

// 반복문을 중간에 조건식이 거짓이 되지 않는 경우에도 강제 종료
for (let idx = 0; idx <= 10; idx++) {
  console.log(idx);

  // 5 이상부터 종료된 것을 확인 가능
  if (idx >= 5) {
    break;
  }
}

// idx 값이 짝수인 경우에는 아무것도 출력하지 말고 해당회차 건너뛰게 만드는 경우
for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 진행하지 않고 다음으로 넘어간다
  }
  console.log(idx);

  // 5 이상부터 종료된 것을 확인 가능
  if (idx >= 5) {
    break;
  }
}
