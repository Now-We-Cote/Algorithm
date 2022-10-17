// 10부제

// 답안

const solution = (arr, day) => {
  return arr.filter((e) => e % 10 === num).length;
};

const arr = [25, 23, 11, 47, 53, 17, 33];
const day = 3;

console.log(solution(arr, day)); // 3
