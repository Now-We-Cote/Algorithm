# `A`를 `#`으로

## 문제

문자 중 `A`를 `#`으로 변경하는 함수를 작성하라

## 풀이

```javascript
function solution(str) {
  const answer = str.replaceAll("A", "#");
  return answer;
}

let str = "ORANGE ADE";
solution(str); //OR#NGE #DE
```
