// 최대점수 구하기

// 풀이
const solution = (m, ps, pt) => {
  let maxScore = 0;
  let n = ps.length;

  const DFS = (L, psSum, ptSum) => {
    if (L === n) {
      if (ptSum > m) return;
      maxScore = Math.max(maxScore, psSum);
    } else {
      DFS(L + 1, psSum + ps[L], ptSum + pt[L]);
      DFS(L + 1, psSum, ptSum);
    }
  };
  DFS(0, 0, 0);
  return maxScore;
};

const arr1 = [10, 25, 15, 6, 7];
const arr2 = [5, 12, 8, 3, 4];
solution(20, arr1, arr2);
