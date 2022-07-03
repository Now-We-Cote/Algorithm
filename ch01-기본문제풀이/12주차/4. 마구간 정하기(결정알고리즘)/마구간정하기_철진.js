// 마구간 정하기(결정 알고리즘)

// 문제 - N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마 구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

// 입력 - 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
// 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

// 출력 - 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

// 입력 예시 - 5, 3,  [1, 2, 8, 4, 9]

// 출력 예시 - 3

{
  const getStableCount = (stables, dist) => {
    let count = 1;
    let endPoint = stables[0];

    for (const stable of stables) {
      if (stable - endPoint >= dist) {
        count++;
        endPoint = stable;
      }
    }

    return count;
  };

  const solution = (N, C, stables) => {
    const sortStables = [...stables].sort((a, b) => a - b);

    let left = Math.min(...sortStables);
    let right = Math.max(...sortStables);
    let result = 0;

    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (getStableCount(sortStables, mid) >= C) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };
}
