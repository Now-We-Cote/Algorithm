# k번째큰수

```javascript
function solution(n, k, arr) {
  //여기서 왜 new Set(arr)이 아니라 new Set()일까?
  const set = new Set();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        set.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let newArr = [...set];
  newArr.sort((a, b) => b - a);
  return newArr[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
```
