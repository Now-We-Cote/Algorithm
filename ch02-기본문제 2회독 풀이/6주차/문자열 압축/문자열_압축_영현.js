// 문자열 압축

// 답안
function solution(str) {
  const newArr = [...str];
  const result = [newArr[0]];
  let n = 1;
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] === newArr[i - 1]) {
      n++;
    } else {
      result.push(n === 1 ? newArr[i] : n, newArr[i]);
      n = 1;
    }
  }

  return result.join("");
}

const str = "KKHSSSSSSSE";
solution(str);
