// 쇠막대기

// 답안
const solution = (str) => {
  let answer = 0;
  const arr = [...str];
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    } else {
      // 바로 앞 요소가 "("면 레이저
      if (arr[i - 1] === "(") {
        stack.pop(); // 레이저 용 "(" 이기 때문에 한 개는 pop 해줘야 함
        answer += stack.length;
      }
      // 바로 앞 요소가 ")"면 맨 위의 막대기가 끝난 것
      else {
        stack.pop(); // 끝난 쇠막대기 하나 지워줌
        answer++;
      }
    }
  }
  return answer;
};
const str = "(((()(()()))(())()))(()())";
solution(str);
