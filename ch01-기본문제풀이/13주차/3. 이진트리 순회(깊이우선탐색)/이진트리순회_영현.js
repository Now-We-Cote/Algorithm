// 이진트리순회

// 답안
const answer = [];

const DFS = (v) => {
  if (v > 7) return;
  console.log(v); //1245367 전위순회: 처음 넘어온 부모부터 출력 후 왼쪽 자식으로
  DFS(v * 2);
  console.log(v); //4251637 중위순회: 부모 노드가 출력이 안되고 왼쪽 자식부터 출력, 왼쪽 자식 쪽으로 계속 출력 후 처리가 끝나면 되돌아가서 부모를 출력, 그리고 오른쪽 자식으로 이동
  DFS(v * 2 + 1);
  console.log(v); //4526731 후위순회: 왼쪽 오른쪽 자식들 처리 후 부모 노드 출력(병합과 관련있다고 함)
};

const solution = (num) => {
  DFS(num);
};

const num = 1;
solution(num);
