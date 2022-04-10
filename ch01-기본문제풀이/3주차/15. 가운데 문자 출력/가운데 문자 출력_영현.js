// 가운데 문자 출력

// 답안
// 선생님 답안과 동일
function solution(str) {
  const midIdx = parseInt(str.length / 2);
  if (str.length % 2 === 0) {
    return str.substr(midIdx - 1, 2);
  } else {
    return str.substr(midIdx, 1);
  }
}
solution("stussy"); //'us'
