// 문자 찾기

// 답안
function solution(sentence, alp) {
  const result = sentence.split("").filter((e) => e === alp).length;
  return result;
}

solution("COMPUTERPROGRAMMING", "R"); // 3

// 선생님 답안
function solution(s, t) {
  let answer = 0;

  for (let x of s) {
    if (x === t) {
      answer++;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
solution(str, "R"); // 3

// 선생님 답안2
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
solution(str, "R"); // 3
