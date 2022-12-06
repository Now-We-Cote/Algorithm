// 뒤집은 소수

// 답안
const solution = (arr) => {
  let answer = [];

  // 소수 구하는 함수
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (x of arr) {
    const reverseNum = Math.floor(x.toString().split("").reverse().join(""));
    if (reverseNum !== 1 && isPrime(reverseNum)) {
      answer.push(reverseNum);
    }
  }

  return answer;
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

solution(arr);
