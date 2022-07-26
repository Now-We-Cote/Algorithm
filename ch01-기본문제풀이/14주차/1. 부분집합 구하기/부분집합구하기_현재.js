{
  const solution = (n) => {
    let answer =[];
    let chk = new Array(n+1).fill(0)
    const DFS(v) => {
      // DFS 잘 모르겠으면 무조건  if else
      if(v === n + 1) {
        // 종착점 =>  chk 배열에서  1 로 들어온 것만 출력
        let char = ''
        for(let i = 1; i <= n; i ++) {
          if(chk[i] === 0) {
            char += i+" "
          }
        }
        if(char.length > 0) answer.push(char.trim())

      } else {
        // 포함시키는 경우
        chk[v] = 1
        DFS(v + 1)
        // 안포함시키는 경우
        chk[v] = 0
        DFS(v + 1)
      }

  }
  DFS(1)
  return answer
  }
}
