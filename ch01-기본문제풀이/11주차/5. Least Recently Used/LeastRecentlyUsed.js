{
  const solution = (S, N, arr) => {
    let cache = new Array(S).fill(0);
    console.log("캐시 메모리 상태 변화");
    for (let i = 0; i < N; i++) {
      if (cache.includes(arr[i])) {
        cache = cache.filter((item) => item !== arr[i]);
        cache.unshift(arr[i]);
      } else {
        cache.unshift(arr[i]);
        cache.pop();
      }
      console.log(cache);
    }
  };

  const S = 5;
  const N = 9;
  const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

  solution(S, N, arr);
}
