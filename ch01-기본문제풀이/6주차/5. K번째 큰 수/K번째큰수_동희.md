# k번째큰수

```javascript
function solution(n, k, arr) {
  //질문 : 여기서 왜 new Set(arr)이 아니라 new Set()일까?
  //답변 : 뽑을 수 있는 카드의 패가 담긴 arr에서 중복을 제거하면 안되고, 이후 합의 중복을 제거해야한다.
  //예시 : 13 13 13이 있을 경우 39라는 합이 나올 수 있는데 중복을 제거하면 합이 아예 사라진다. (thanks to 현재님)
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
```
