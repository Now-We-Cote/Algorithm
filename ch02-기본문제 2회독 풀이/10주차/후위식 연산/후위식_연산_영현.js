// 후위식 연산

// 답안

const calcNum = (ln, rn, s) => {
  if (s) {
    switch (s) {
      case "+":
        return ln + rn;
      case "-":
        return ln - rn;
      case "*":
        return ln * rn;
      case "/":
        return ln / rn;
    }
  }
};

const solution = (str) => {
  const arr = [...str];
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    let leftNum = 0;
    let rigthNum = 0;
    if (!isNaN(arr[i])) {
      stack.push(Number(arr[i]));
    } else {
      rightNum = stack.pop();
      leftNum = stack.pop();
      stack.push(calcNum(leftNum, rightNum, arr[i]));
    }
  }
  return stack[0];
};

const str = "352+*9-";

solution(str);
