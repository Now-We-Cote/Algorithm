{
  // 하나씩 대조하는게 이분검색인가 싶어 만들어본 답안
  const solution = (key, numbers) => {
    let answer;
    numbers = numbers.sort((a, b) => a - b);
    for (let number of numbers) {
      // 하나씩 찾아보기때문에 이건..순차탐색 o(n)
      if (number === key) {
        answer = numbers.indexOf(number) + 1;
      }
    }
    return answer;
  };

  const num = 32;
  const arr = [23, 87, 65, 12, 57, 32, 99, 81];

  solution(num, arr);
}

{
  // 이분검색 : o(logn)번만에 적합한 것을 찾아내는 방법
  // lt, rt를 구한 다음에 /2한만큼 돌리는 것..!!
  // 그리고 반으로 나눈 것 안에서만 if로 돌리는 것...!!
  // 오름차순이여서 arr[mid]가 크다면..그거보다 작은 숫자로 찾아야된다 -> rt를 줄인다
  const solution = (key, arr) => {
    let answer;
    let rt = arr.length - 1;
    let lt = 0;

    arr = arr.sort((a, b) => a - b); // 이분검색을 하려면 무조건 정렬이 되어있어야 함
    while (lt <= rt) {
      // lt랑 rt가 똑같으면 끝나는거
      let half = Math.floor((lt + rt) / 2);
      if (arr[half] === key) {
        answer = half + 1;
        break;
      } else if (arr[half] > key) {
        rt = half - 1;
      } else {
        lt = half + 1;
      }
    }

    return answer;
  };

  const arr = [23, 87, 65, 12, 57, 32, 99, 81];
  solution(32, arr);
}
