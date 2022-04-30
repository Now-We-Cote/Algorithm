// 문자열 압축

// 답안

const solution = (str) => {
  const arr = str.split("");
  const newArr = [...new Set(arr)];
  let result = [];
  for (i = 0; i < newArr.length; i++) {
    const comboNum = arr.filter((e) => e === newArr[i]);
    result.push(newArr[i]);
    if (comboNum.length !== 1) {
      result.push(comboNum.length);
    }
  }
  return result.join("");
};

const str = "TTTEEESSSSSSSJ";

solution(str); //'T3E3S7J'
