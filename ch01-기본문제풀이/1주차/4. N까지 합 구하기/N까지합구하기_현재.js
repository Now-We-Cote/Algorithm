// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..
// ▣ 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.
// ▣ 입력예제 1 6
// ▣ 출력예제 1 21
// ▣ 입력예제 2 10
// ▣ 출력예제 2 55

{
  // 내가 푼 방식 (모던자바스크립트 재귀함수 참고..)
  const solution = (num) => {
    return num != 1 ? num + solution(num - 1) : 1;
  };

  // 선생님 답안
  const goodSolution = (num) => {
    let answer = 0;
    for (let i = 0; i <= num; num++) {
      answer = answer + i; // answer += i 로 작성할 수 있지 않을까?
    }
    return answer;
  };
  // 작성하기는 편하지만 for는 값 반환 시간이 오래걸리는 편!
}
