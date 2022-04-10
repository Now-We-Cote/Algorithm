// 중복 단어 제거

// 답안
function solution(arr) {
  return arr.filter((x, idx) => arr.indexOf(x) === idx);
}
const arr = ["young", "sung", "kim", "young", "dong", "sung"];
solution(arr); // [ 'young', 'sung', 'kim', 'dong' ]
