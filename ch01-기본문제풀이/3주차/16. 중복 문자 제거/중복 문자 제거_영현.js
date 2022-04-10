// 중복 문자 제거

// 답안
function solution(str) {
  let answer = "";
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      answer += arr[i];
    }
  }
  return answer;
}

solution("dfeffgidn"); // 'dfegin'

// 두번째 답안
function solution(str) {
  let arr = str.split("");
  return arr.filter((x, idx) => arr.indexOf(x) === idx).join("");
}

solution("dfeffgidn"); // 'dfegin'
