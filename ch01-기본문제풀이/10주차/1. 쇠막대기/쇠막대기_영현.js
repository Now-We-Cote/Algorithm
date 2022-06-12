// 쇠막대기

// 답안

const solution = (str) => {
  let answer = 0;
  const arr = str.split("");
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ")") {
      stack.push(arr[i]);
    } else {
      // 지금 돌고있는 요소의 바로 앞의 요소가 열린 괄호인지 확인
      if (arr[i - 1] === "(") {
        stack.pop(); // 레이저이기 때문에 레이저용 열린 괄호 하나 지워주기
        answer += stack.length;
      } else {
        stack.pop(); // 잘린 쇠막대기 하나 지워주기
        answer++;
      }
    }
  }
  return answer;
};
const str = "(((()(()()))(())()))(()())";
solution(str); //24
