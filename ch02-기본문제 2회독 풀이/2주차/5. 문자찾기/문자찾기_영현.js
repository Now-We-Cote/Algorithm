// 문자찾기

// 답안

const solution = (str, t) => {
  let count = 0;
  let position = str.indexOf(t);

  while (position !== -1) {
    count++;
    position = str.indexOf(t, position + 1);
  }
  return count;
};

const str = "COMPUTERPROGRAMMING";

console.log(solution(str, "R")); // 3
