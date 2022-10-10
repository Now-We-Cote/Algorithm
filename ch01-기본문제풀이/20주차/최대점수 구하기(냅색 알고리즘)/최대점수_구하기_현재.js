{
  const solution = (m, arr) =>{ // m = 제한시간
    let answer = 0;
    let dy = Array.from({length: m + 1}, () => 0)
    for(let i = 0; i < arr.length; i++) { 
      let ps = arr[i][0]; // 점수
      let pt = arr[i][1]; // 소요시간
      for(let j = m; j >= pt; j--){ // 맨 끝, 문제를 다 푸는 경우의 수부터 순차적으로 구한다
        dy[j] = Math.max(dy[j], dy[j - pt] + ps) // 기존 값 대비 새로 추가되는 경우의 수가 더 큰 값인지 확인 후 교체 
      }
    }
    answer = dy[m] // 제한시간(20) 내 최대 문제 풀 수 있는 경우의 수
    return answer;
  }
  
  
  const arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]
  solution(20, arr)
}
