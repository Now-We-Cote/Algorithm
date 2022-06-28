# Least Recently Used (삽입정렬 응용)

```javascript
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  for (x of arr) {
    // 1. Cache Miss (answer에 arr값이 존재)
    if (answer.includes(x)) {
      for (let i = arr.indexOf(x); i > 0; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    } else {
      // 2. Cache Hit (answer에 arr값이 존재하지않음)
      for (let i = answer.length - 1; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); //[ 7, 5, 3, 2, 6 ]
```
