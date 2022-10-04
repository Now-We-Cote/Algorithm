{
  const solution = (arr) => {
  let answer = 0;
  let dy = Array.from({length : arr.length + 1 }, () => 0)
  dy[0] = 1 // 초기화
  for(let i = 1; i < arr.length; i ++) {
      let max = 0; // 초기화
      for(let j = i - 1; j >=0; j--) { // j를 사용해 i 앞부분을 탐색하기에 i-1부터 시작해야
        if(arr[j] < arr[i] && dy[j] > max) { // 앞의 항 이면서 dynamic 배열에서 최대값인지 확인
          max = dy[j]
        }
      }
      dy[i] = max + 1 // max가 가장 큰 경우의 수가 되기에 추가 (1을 더해주는 이유는 j -> i 까지 가는 경우의 수가 1개 뿐이기 때문에 더해줄 것)
      answer = Math.max(answer, dy[i])
    }

    return answer;
  }


  const Arr = [5,3 ,7, 8, 6, 2, 9, 4]
  solution(Arr)
}
