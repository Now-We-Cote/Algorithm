// 송아지 찾기(BSF: 상태트리 탐색)

// 문제 - 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다.
// 현수의 위치와 송아 지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
// 송아지는 움직이지 않고 제자리에 있다.
// 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
// 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성 하세요.

// 입력 - 첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다. 직선의 좌표 점은 1부터 10,000 까지이다.

// 출력 - 점프의 최소횟수를 구한다. 답은 1이상입니다.

// 입력 예제 - 5, 14

// 출력 예제 - 3

// 입력 예제 - 8, 3

// 출력 예제 - 5

{
  const solution = (S, E) => {
    let result = 0;
    const distance = new Array(10001).fill(0);
    const visit = new Array(10001).fill(0);
    const queue = [];

    visit[S] = 1;
    queue.push(S);
    distance[S] = 0;

    while (queue.length) {
      let x = queue.shift();
      for (const nextX of [x - 1, x + 1, x + 5]) {
        if (nextX === E) {
          return distance[x] + 1;
        }

        if (nextX > 0 && nextX <= 10000 && visit[nextX] === 0) {
          visit[nextX] = 1;
          queue.push(nextX);
          distance[nextX] = distance[x] + 1;
        }
      }
    }

    return result;
  };
}
