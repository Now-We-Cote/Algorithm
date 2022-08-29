{
  const solution = (n, k, arr, m) => {
    let answer = 0;
    const DFS = (L, s, sum) => {
      // s = start number ( 조합 구하는 용), sum = 뽑은 3개의 원소 합
      if (L === k) {
        // 종착점
        if (sum % 6 === 0) {
          answer++;
        }
      } else {
        for (let i = s; i < n; i++) {
          // i = 인덱스번호여서 n전까지 해야됨
          DFS(L + 1, i + 1, sum + arr[i]);
        }
      }
    };
    DFS(0, 0, 0);
    return answer;
  };

  const arr = [2, 4, 5, 8, 12];
  solution(5, 3, arr, 6);
}
