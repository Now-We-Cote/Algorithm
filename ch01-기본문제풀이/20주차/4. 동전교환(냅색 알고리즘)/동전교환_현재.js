{
  // DFS를 사용해서 완전탐색으로도 풀 수 있음
  // 하지만 경우의 수가 엄청 많아지면 (동전 종류 100개 정도) DFS 시간복잡도 상 어렵다
  // dy는 거슬러줄 동전 만큼 길이를 가져간다
  // dy[i] = i금액을 거슬러주는 최소 동전 갯수
  // 초기화는 가장 큰 숫자로 초기화 한다
  // 2중 for문을 돌게 됨
  // 1중 : 동전 종류 조사
  // 2층 : 해당 동전을 사용해서 15원까지 조사
  
  const solution = (m, coin) => { // m = 거슬러줄 돈
    let answer = 0;
    let dy = Array.from({length: m + 1}, () => 1000) // 제일 큰 값으로 임의 초기화
    dy[0] = 0 // 초기화 (0원을 거슬러주는 경우는 없다. 지금 1000으로 되어있으니 0로 초기화)
    for(let i = 0; i < coin.length; i++) { // 동전 종류만큼 순회
      for(let j = coin[i]; j <= m; j++ ) { // coin의 i에 해당하는 돈부터 dy를 순회
        dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1) // 최소 경우의 수를 구하기. 지금 존재하는 dy[j]깂과 앞으로 들어갈 dy[j ]값 중 작은걸 기재
      }
    }
    answer = dy[m];
    return answer;
  }
  
  const arr = [1, 2, 5]
  solution(15, arr)
}
