// 이분검색

// 풀이
const solution = (t, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    const midIdx = parseInt((lt + rt) / 2);
    if (arr[midIdx] === t) {
      answer = midIdx + 1;
      break;
    } else if (arr[midIdx] > t) {
      rt = midIdx - 1;
    } else {
      lt = midIdx + 1;
    }
  }
  return answer;
};

const arr = [23, 87, 65, 12, 57, 32, 99, 81];

solution(32, arr);
