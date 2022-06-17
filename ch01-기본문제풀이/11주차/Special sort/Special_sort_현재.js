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
