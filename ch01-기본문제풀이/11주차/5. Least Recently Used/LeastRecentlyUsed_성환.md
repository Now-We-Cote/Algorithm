## Least Recently Used 문제 풀이

```js
function solution(S, N, arr) {
  let result = Array.from({ length: S }, () => 0);

  for (const num of arr) {
    if (result.includes(num)) {
      result.unshift(...result.splice(result.indexOf(num), 1));
    } else {
      result.unshift(num);
      result.pop();
    }
  }

  return result;
}

solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
```
