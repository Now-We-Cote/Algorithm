{
  const solution = (n, k, arr) => {
    const newArr = arr.map((item, idx) => {
      const slicedArr = arr.slice(idx, idx + k).reduce((a, b) => a + b);
      return slicedArr;
    });

    return Math.max(...newArr);
  };
}
