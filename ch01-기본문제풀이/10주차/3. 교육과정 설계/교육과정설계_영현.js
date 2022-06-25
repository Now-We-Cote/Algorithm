// 교육과정설계

// 답안

const solution = (a, b) => {
  let answer = "YES";
  let queue = a.split("");

  for (x of b) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }
  if (queue.length > 0) {
    return "NO";
  }
  return answer;
};

const a = "CBA";
const b = "CBDAGE";
solution(a, b); // YES
