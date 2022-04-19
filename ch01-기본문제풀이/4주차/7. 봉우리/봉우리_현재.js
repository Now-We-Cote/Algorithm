{
  // 모두 봉우리보다 높이가 낮다고 전제할 것 (0쪽은)
  // 어딘가에 나보다 큰게 존재한다 ? 봉우리 (return) : 봉우리 O (count++)
  // 이차원 탐색은 이중포문
  // i, j의 위쪽을 보고싶다? dx=[-1, 0 ...] (행방향), dy=[0](열방향) > i + dx[k] , j+dy[k] 이런식으로 방향을 찾는다

  const solution = (arr) => {
    let answer = 0;
    let dx = [-1, 0, 1, 0]; // 상우하좌 (x방향) = 되게 많이사용함!
    let dy = [0, 1, 0, -1]; //상우하좌 (y방향)

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let flag = 1; //봉우리 유무 =>  flag가 1이면 참, 0이면 false
        for (let k = 0; k < 4; k++) {
          // 방향 찾는 놈
          let nx = i + dx[k]; //가려고 하는 방향 (행 좌표 = idx)
          let ny = j + dy[k]; // 가려고 하는 방향 (열 좌표 = idx)
          if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] >= arr[i][j]) {
            // nx, ny가 0 보다 커야 인덱스를 돌 수 있으니 필터링해주기
            // 그리고 또한 배열 인덱스보다 크면 안되기때문에 arr.length보다 작도록 조건을 걸어주었다
            //nx, ny는 ij의 상하좌우를 돈다. 이들이 더 크면 봉우리가 아니다
            flag = 0;
            break; //더 돌 필요 없으니까 for문 멈춘다
          }
        }
        if (flag) answer++; // flag가 되버리면 answer를 증가해준다
      }
    }

    return answer;
  };
}
