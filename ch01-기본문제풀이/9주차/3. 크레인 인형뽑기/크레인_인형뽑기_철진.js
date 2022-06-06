// 크레인 인형뽑기(카카오 기출)

// 문제 - 게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
// 죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.
// 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인 이 있고 오른쪽에는 바구니가 있습니다.
// (위 그림은 5 x 5 크기의 예시입니다). 각 격자 칸에 는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다.
// 모든 인형은 1 x 1 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.
// 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다.
// 집어 올린 인 형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩 니다.
// 다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습 입니다.
// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구 니에서 사라지게 됩니다.
// 위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 같은 모양 인형 두 개가 없어집니다.
// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동 시키는 경우에는 아무런 일도 일어나지 않습니다.
// 또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. (그림에서는 화면표시 제약으로 5칸만으로 표현하였음)
// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위 치가 담긴 배열 moves가 매개변수로 주어질 때,
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한 사항 - board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
// board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves 배열의 크기는 1 이상 1,000 이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

// 입력 예시 - [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] //board 배열 [1,5,3,5,1,2,1,4] //moves 배열

// 출력 예시 - 4

const board = [
  [0, 0, 0],
  [1, 3, 1],
  [2, 1, 1],
];

{
  const solution = (board, moves) => {
    let answer = 0;
    const stack = [];
    let newBoard = [...board];

    for (position of moves) {
      for (let i = 0; i < newBoard.length; i++) {
        const doll = newBoard[i][position - 1];

        if (doll > 0) {
          if (stack.length > 0 && stack[stack.length - 1] === doll) {
            stack.pop();
            answer += 2;
          } else {
            stack.push(doll);
          }
          newBoard[i][position - 1] = 0;
          break;
        }
      }
    }
    return answer;
  };
}

// 프로그래머스 채점 해보다가 신기했던 풀이 발견! 생각의 전환이 대단하다!

{
  // 2차원 배열의 행과 열을 전환하고, 0을 제거하는 함수!
  const transpose = (matrix) =>
    matrix.reduce(
      (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
      []
    );

  // 0을 제거했기 때문에 더욱 빠르게 탐색할 수 있다.
  const solution = (board, moves) => {
    const stacks = transpose(board).map((row) =>
      row.reverse().filter((el) => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
      const pop = stacks[move - 1].pop();
      if (!pop) continue;
      if (pop === basket[basket.length - 1]) {
        basket.pop();
        result += 2;
        continue;
      }
      basket.push(pop);
    }

    return result;
  };
}
