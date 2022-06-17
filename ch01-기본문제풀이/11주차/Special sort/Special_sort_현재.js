{
  const solution = (arr) => {
    const plus = [];
    const minus = [];
    for (let num of arr) {
      num < 0 ? minus.push(num) : plus.push(num);
    }
    return [...minus, ...plus];
  };

  const arr = [1, 2, 3, -3, -2, 5, 6, -6];
  solution(arr);
}

{
  // 버블 정렬로 구한 케이스
  const solution = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > 0 && arr[j + 1] < 0) {
          // 양의 정수는 뒤쪽으로 보내고, 음의 정수는 앞쪽으로 보낸다
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };
}
