# N까지 합 구하기

## 문제

자연수 N이 입력되면 1부터 N까지의 합을 구하라.

## 풀이

```javascript
function solution(N) {
  let answer = 0;
  for (i = 0; i < N + 1; i++) {
    answer += i;
  }
  return answer;
}

solution(5); //15
solution(11); //66
```
