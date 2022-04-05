// 대문자 찾기

// 답안
function solution(sentence) {
  return sentence.split("").filter((x) => x === x.toUpperCase()).length;
}

solution("COMPUTERprogramming"); // 8

// 선생님 답안
function solution(s) {
  let answer = 0;

  for (let x of s) {
    //아스키넘버 찾아주는 메서드
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) {
      answer++;
    }
  }
  return answer;
}

let s = "COMPUTERprogramming";
solution(s); // 3
