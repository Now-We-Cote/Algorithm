# K번째 큰 수

````javascript
const solution = (num, arr) => {
  const sumArr = [];
  let maxSum = 0;
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<i; j++){
      for(let k=0; k<j; k++){
        sumArr.push(arr[i]+arr[j]+arr[k]);
      }
    }
  }
  return sumArr.sort((a,b)=> (b-a))[2];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
solution(3, arr); //143
````