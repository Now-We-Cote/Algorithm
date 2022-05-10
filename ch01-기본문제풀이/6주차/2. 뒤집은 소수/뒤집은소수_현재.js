{
  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const solution = (arr) => {
    const answer = [];
    for (let item of arr) {
      // 1. 뒤집는다
      const reverse = +item
        .toString()
        .split("")
        .reduce((a, b) => b + a);
      // 2, 소수인지 여부를 판별한다 - 브루트포스 식으로...
      if (isPrime(reverse)) answer.push(reverse);
    }
    return answer;
  };

  const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

  solution(arr);
}

{
  // isPrime 더 적게 도는 법
  // 소수는 제곱근까지만 돌면 더 돌 필요가 없다
  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
      // sqrt : 제곱근 반환함
      if (num % i === 0) return false;
    }
    return true;
  };
}
