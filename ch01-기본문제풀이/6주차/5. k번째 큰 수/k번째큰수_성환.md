## k번째 큰 수 문제풀이

```js
function solution(n, k, arr) {
  let sumArr = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sumArr = [...sumArr, arr[i] + arr[j] + arr[k]];
      }
    }
  }

  return sumArr.sort((a, b) => b - a)[k - 1];
}

solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
```
