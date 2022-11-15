// 보이는 학생

// 답안
function solution(arr) {
  let result = 1; // 첫번째 학생은 무조건 보이니까 1
  let tallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tallest) {
      result++;
      tallest = arr[i];
    }
  }
  return result;
}

let arr = [130, 135, 148, 140, 14, 150, 153];
solution(arr);
