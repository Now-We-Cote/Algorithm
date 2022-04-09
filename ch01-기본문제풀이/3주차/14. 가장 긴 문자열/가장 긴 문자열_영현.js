// 가장 긴 문자열

// 답안
function solution(arr) {
  const maxLength = arr.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  return maxLength;
}
const arr = [4, "young", "sung", "kim", "dong"];
solution(arr); //'young'

// 두번째 답안
// 중복된 길이가 있을 경우에는 배열로
function solution(arr) {
  const maxLength = arr.reduce((a, b) => {
    return a.length > b.length ? a : b;
  }).length;

  return arr.filter((x) => x.length === maxLength);
}
const arr = [4, "young", "seung", "kim", "dong"];
solution(arr); //[ 'young', 'seung' ]

// 선생님 답안
function solution(s) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

const arr = ["young", "seung", "kim", "dong"];
solution(arr); //'young'
