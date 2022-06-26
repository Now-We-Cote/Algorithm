// 답안
const solution = (length, arr) => {
  let cache = [];
  for (i = 0; i < arr.length; i++) {
    let tmp = arr[i]; // 기준인 i값

    for (j = cache.length; j >= 0; j--) {
      // j는 cache를 도는 for문
      if (cache[j] === tmp) {
        cache.splice(j, 1); // 똑같은 작업이 들어오면 cache안에서 제거해줌
      }
    }

    if (cache.length === length) {
      cache.pop(); // 길이가 5일 경우 새로운 작업이 들어올 공간을 만들어준다.
    }
    cache.unshift(tmp);
  }
  return cache;
};

const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
solution(5, arr);
