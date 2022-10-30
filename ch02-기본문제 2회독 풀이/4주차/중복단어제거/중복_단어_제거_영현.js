// 중복 단어 제거

// 답안

const solution = (arr) => {
  return arr.filter((word, i) => arr.indexOf(word) === i);
};

const solution2 = (arr) => {
  const set = new Set(arr);
  const newArr = [...set];

  return newArr;
};

const arr = ["good", "time", "good", "time", "student"];

console.log(solution(arr));
