// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.

function solution(a, b, c) {
  let answer = 0;
  // 내가 푼 것 : 각 각 케이스별로 비교한다 (a case, b case만 파악하면 c케이스까진 파악하지 않아도 됨)
  if (a < b) {
    if (a < c) {
      // a < b,c
      answer = a;
    } else {
      // c < a < b
      answer = c;
    }
  } else if (b < a) {
    if (b < c) {
      // b < a, c
      answer = b;
    } else {
      // c < b < a
      answer = c;
    }
  }

  // 모범 답안
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  } // 이렇게만 해도 이미 둘 중에 작은 값으로 들어가짐
  if (c < answer) {
    answer = c;
  } // 예외 처리

  return answer;
}
