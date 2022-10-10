// 최대 부분 증가수열

// 답안
const solution = (arr) => {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    // j번째 항이 i번째 항 바로 앞부터 0까지 작아지면서 돌게 됨
    for (let j = i - 1; j > 0; j--) {
      // j인덱스가 i인덱스보다 작아서 앞에 항이 되는 조건 && 돌아가면서 max보다 클 때
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }

    dy[i] = max + 1; // 앞에 항에 둘 수 있는 인덱스의 값에서 +1해줌
    answer = Math.max(answer, dy[i]);
  }

  return answer;
};
const arr = [5, 3, 7, 8, 6, 2, 9, 4];
solution(arr);
