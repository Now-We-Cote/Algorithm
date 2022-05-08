// K번째 큰수

// 답안

const solution = (num, k, arr) => {
  const answer = [];

  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      for (let s = j + 1; s < num; s++) {
        answer.push(arr[i] + arr[j] + arr[s]);
      }
    }
  }
  const newArr = [...new Set(answer.sort((a, b) => b - a))];

  return newArr[k - 1] || -1;
};

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

solution(10, 3, arr); // '143'
