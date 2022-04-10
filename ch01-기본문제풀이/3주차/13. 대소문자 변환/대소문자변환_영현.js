// 대소문자 변환

// 답안
// map 안에 함수를 넣어보고 싶었음
function solution(sentence) {
  return sentence
    .split("")
    .map((a) => {
      if (a === a.toUpperCase()) {
        return a.toLowerCase();
      } else {
        return a.toUpperCase();
      }
    })
    .join("");
}

solution("giVeMeSoME"); //'GIvEmEsOme'

// 두번째 답안
// 삼항연산자로 하면 더 잘 보일까해서 바꿔봄
function solution(sentence) {
  return sentence
    .split("")
    .map((a) => {
      return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
    })
    .join("");
}

solution("giVeMeSoME"); //'GIvEmEsOme'

// 선생님 답안
function solution(s) {
  let answer = "";

  for (let x of s) {
    // 만약 소문자라면
    if (x === x.toLowerCase()) {
      // 대문자로 변경하여 저장
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
  }
  return answer;
}

let str = "giVeMeSoME";
solution(str); // 'GIvEmEsOme'
