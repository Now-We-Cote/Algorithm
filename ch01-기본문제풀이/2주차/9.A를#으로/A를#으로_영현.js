// A를 #으로

// 답안

function solution(word) {
  // replaceAll은 최신 스펙이라 브라우저 지원 안될수도 있음
  // return word.replaceAll("A", "#");

  // 좀 더 맘편한 replace + 정규 표현식을 쓰자..
  return word.replace(/A/g, "#");
}
solution("BANANA"); //B#N#N#

// 선생님 답안

function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str = "BANANA";

console.log(solution(str)); // B#N#N#
