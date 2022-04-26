// 문자열 압축

// 답안

const solution = (str, a) => {
  let map = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === a) {
      map.push(i);
    }
  }
  for (i = 0; i < str.length; i++) {
    let dd = map.map((e) => Math.abs(e - i));
    console.log(Math.min(...dd));
  }
};

const str = "teachermode";
const a = "e";

solution(str, a);
