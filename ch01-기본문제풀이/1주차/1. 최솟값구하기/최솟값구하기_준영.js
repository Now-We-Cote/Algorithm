/* 
 *가장 작은 수 출력하는 문제
 * if문 사용해서 풀기
 */

function solution(a, b, c) {
  let answer;

  if (a < b) answer = a;
  else answer = b;

  if (answer > c) answer = c;

  return answer;
}

console.log(solution(5, 6, 7));