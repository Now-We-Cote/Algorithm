/* 
 * 삼각형 판별하기 
 * 
 */

function solution(a, b, c) {
  let max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;

  if (max < c) max = c;
  if ((sum - max) <= max) return false;

  return true;




}

console.log(solution(5, 6, 7));