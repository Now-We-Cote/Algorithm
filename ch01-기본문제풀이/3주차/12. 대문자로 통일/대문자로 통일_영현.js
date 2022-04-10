// 대문자로 통일

// 답안
function solution(sentence) {
  return sentence
    .split("")
    .map((x) => x.toUpperCase())
    .join("");
}

solution("ItisTimeToStudy"); // 'ITISTIMETOSTUDY'

// 선생님 답안
function solution(s) {
  let answer = "";

  for (let x of s) {
    // 만약 소문자라면
    if (x === x.toLowerCase()) {
      // 대문자로 변경하여 저장
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "ItisTimeToStudy";
solution(str); // 'ITISTIMETOSTUDY'

// 그놈의 아스키코드..패스
