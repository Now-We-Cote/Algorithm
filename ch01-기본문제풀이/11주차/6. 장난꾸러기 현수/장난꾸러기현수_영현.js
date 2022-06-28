// 장난꾸러기 현수

// 답안
const solution = (arr) => {
  let answer = [];
  const newArr = [...arr].sort();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== newArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
};

const arr = [120, 130, 150, 150, 130, 150];
solution(arr);
