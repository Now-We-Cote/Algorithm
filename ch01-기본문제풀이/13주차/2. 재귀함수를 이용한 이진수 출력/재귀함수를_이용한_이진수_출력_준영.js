/**
 * 재귀함수를 이용한 이진수 출력
 *
 * 문제 - 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.
 *
 * 입력 - 첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.
 *
 * 출력 - 첫 번째 줄에 이진수를 출력하세요.
 *
 * 입력 예시 - 11
 *
 * 출력 예시 - 1011
 */

const solution = (N) => {
  let result = []
  result = getBinary(N, result)

  result = result.join('')

  return result;
}

const getBinary = (num, result) => {
  if (num === 0) {
    return;
  } else {
    result.unshift(num % 2)
    getBinary(Math.floor(num / 2), result);
    return result;
  }
}

console.log(solution(11));
