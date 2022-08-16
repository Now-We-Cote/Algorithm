{
  // 그냥 순열이기 때문에 중복을 허용하지 않는다
  // 중복 순열이 아니기 때문에 check arr 만들어서, 해당 요소가 체크가 되었던 것인지 확인이 필요하다 (중복 순열과의 차이)
  // -> dfs 분기하기 전에 check arr를 돌려서, 해당 요소를 이미 넣었던 것인지 확인 필요
  const solution = (arr, m) => {
    const number = arr.length;
    let answer = [];
    let chkArr = new Array(number).fill(0);
    let temp = new Array(m).fill(0);
    const DFS = (level) => {
      if (level === m) {
        // 종료 지점
        answer.push(temp.slice()); // 깊은 복사 - 각 시점의 참조값을 보여준다
      } else {
        for (let i = 0; i < number; i++) {
          // 순열과 조합은 그냥 외워야 함
          if (chkArr[i] === 0) {
            chkArr[i] = 1;
            temp[level] = arr[i];
            DFS(level + 1);
            // 한번 간 곳은 다시 초기화 해줘야한다!!! (예외 처리하는 게 아님. 그냥 안감)
            chkArr[i] = 0;
          }
          // 내 풀이 방식 - 1이 아닌 경우로 풀어봄. 그리고 초기화 방식이 조금 서투르게 진행됨
          // if(chkArr[i] === 1) {
          // chkArr[i] = 0
          // DFS(level + 1);
          // } else {
          // temp[level] = arr[i];
          // chkArr[i] = 1
          // DFS(level + 1);
          // }
        }
      }
    };
    DFS(0);
    return answer;
  };

  const arr = [3, 6, 9];
  const m = 2;

  solution(arr, m);
}
