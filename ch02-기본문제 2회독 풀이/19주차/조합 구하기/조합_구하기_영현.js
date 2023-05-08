// 조합 구하기

// 풀이
const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); //바뀌는 조합 계속 저장하는 배열

  const DFS = (L, s) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i; //1,2,3,4로 돌고있는 for문의 i를 L(레벨) idx에 맞춰 넣어줌
        DFS(L + 1, i + 1); //L 1증가, i에 1을 더해줘서 다음 DFS함수의 for문에서 i가 tmp에서 겹치지 않게 하기위함
      }
    }
  };
  DFS(0, 1); //1부터 tmp에 들어가야하기 때문에 0,1로 시작

  return answer;
};

solution(4, 2);
