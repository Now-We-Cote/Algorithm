# Least Recently Used

```javascript
const solution = (arr, s) => {
  let cache = Array.from({length: s}, () => 0);
  arr.filter((num,idx) => {
    if(cache.includes(num)){
      const arr = cache.filter(x => x!==num);
      arr.unshift(num);
      cache = arr;
    } else{
      cache.unshift(num);
      cache.pop();
    }
  })
  return cache;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
let s=5;
solution(arr, s); //[ 7, 5, 3, 2, 6 ]
```