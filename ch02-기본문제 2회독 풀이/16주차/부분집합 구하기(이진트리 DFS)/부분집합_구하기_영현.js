// 부분집합 구하기

// 풀이
const solution = (v) => {
  let answer;

  const DFS = (v) => {
    if (v > 7) return;
    else {
      console.log("전위순회 >>>", v); // 일단 첫번째 부모 출력 -> 전위순회
      DFS(v * 2); // 왼쪽 자식으로 이동
      console.log("중위순회 >>>", v); // -> 중위순회
      DFS(v * 2 + 1); // 오른쪽 자식으로 이동
      console.log("후위순회 >>>", v); // -> 후위순회
    }
  };
  DFS(v);
  return answer;
};

solution(1);
