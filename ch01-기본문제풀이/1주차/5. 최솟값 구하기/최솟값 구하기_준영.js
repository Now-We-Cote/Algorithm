//7개의 수 가운데 최솟값 구하기 문제 

function solution(arr) {
  let min = arr[0];

  for (let i of arr) {
    if (min > i) min = i;
  }
  return min;
}

console.log(solution([5, 4, 3, 2, 1]));