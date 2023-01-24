// 장난꾸러기 현수

// 답안
const solution = (arr) => {
  let answer = [];
  const newArr = [...arr].sort();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== newArr[i]) {
      const hyunIdx = i + 1;
      const partnerIdx = newArr.indexOf(arr[i]) + 1;
      answer.push(hyunIdx, partnerIdx);
      break;
    }
  }
  return answer;
};

const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
solution(arr);
