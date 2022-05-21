{
  // 주어진 두 집합의 공통원소를 추출하여 오름차순으로 출력하는 프로그램
  const solution = (a, b) => {
    const same = a.filter((item) => b.includes(item)).sort((a, b) => a - b);
    return same;
  };

  const arg1 = [1, 3, 9, 5, 2];
  const arg2 = [3, 2, 5, 7, 8];

  solution(arg1, arg2);
}
