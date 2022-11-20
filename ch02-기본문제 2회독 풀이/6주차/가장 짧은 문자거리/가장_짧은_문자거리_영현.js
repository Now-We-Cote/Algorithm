// 가장 짧은 문자거리

// 답안
function solution(str, t) {
  const tIndex = [];
  const newArr = str.split("");
  let fromIndex = newArr.indexOf(t);
  while (fromIndex !== -1) {
    tIndex.push(fromIndex);
    fromIndex = newArr.indexOf(t, fromIndex + 1);
  }

  return newArr
    .map((e, idx) => Math.min(...tIndex.map((e) => Math.abs(idx - e))))
    .join("");
}

const str = "teachermode";
solution(str, "e");
