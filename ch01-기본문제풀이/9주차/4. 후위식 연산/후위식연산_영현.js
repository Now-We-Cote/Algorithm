// 후위식 연산

// 답안

// 연산식 계산 함수
const calc = (x, a, b) => {
  switch (x) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "-":
      return a - b;
  }
};

const solution = (str) => {
  const arr = [];
  for (x of str) {
    if (!isNaN(x)) {
      arr.push(x);
    } else {
      const a = Number(arr.pop());
      const b = Number(arr.pop());
      arr.push(calc(x, a, b));
    }
  }

  return arr[0];
};
const str = "352+*9-";

solution(str);
