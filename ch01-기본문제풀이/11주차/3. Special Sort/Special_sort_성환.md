## Special sort 문제풀이

```js
function solution(n, array) {
  const arr = array;
  let last_idx = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let temp;
    for (let j = 0; j <= last_idx; j++) {
      if (j === last_idx) {
        last_idx--;
        break;
      }
      if (arr[j] >= 0 && arr[j + 1] < 0) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

solution(8, [1, 2, 3, -3, -2, 5, 6, -6]);
```
