{
  const solution = (arr) => {
    const newArr = [arr[0]];
    const filteredArr = arr.filter((item, idx) => item > arr[idx - 1]);
    return newArr.concat(filteredArr);
  };

  const arr = [7, 3, 9, 5, 6, 12];
  solution(arr);
}
