// 가장 짧은 문자거리

// 답안

const solution = (str, a) => {
  let map = [];
  let result = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === a) {
      map.push(i);
    }
  }
  for (i = 0; i < str.length; i++) {
    let dd = map.map((e) => Math.abs(e - i));
    result.push(Math.min(...dd));
  }
  return result.join("");
};

const str = "teachermode";
const a = "e";

solution(str, a); //'10121012210'
