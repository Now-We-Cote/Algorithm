{
  const solution = (arr) => {
    // 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
    // 하나만 큰 절대적으로 큰 경우
    // 동시에 여러개가 큰 경우
    const newArr = arr.map((item) => {
      const numberArr = item.toString().split("");
      return {
        char: item,
        total: numberArr.map(Number).reduce((a, b) => a + b),
      };
    });
    // sort 사용하면 복잡도가 nlogn으로..좋다고는 말하기 어려움!
    // 이런경우는 차라리 for가 나을수도 있다
    newArr.sort((a, b) => b.total - a.total);
    const max = newArr.filter((item) => item.total === newArr[0].total);
    if (max.length > 1) {
      // 혹시라도 중복되는 경우가 없을 경우 sort 생략할 수 있도록 함
      max.sort((a, b) => b.char - a.char);
      return max[0].char;
    }
    return max[0].char;
  };

  const arr = [129, 460, 603, 40, 521, 137, 123];

  solution(arr);
}

{
  // 선생님 답안 -> o(n)
  function solution(n, arr) {
    let answer,
      max = Number.MIN_SAFE_INTEGER; // 최소값으로 초기화
    for (let x of arr) {
      let sum = 0,
        tmp = x;
      while (tmp) {
        sum += tmp % 10; // 숫자가 10진법이기 때문에 10으로 나눈 나머지를 계속 더해가면 자릿수의 합이 나옴
        tmp = Math.floor(tmp / 10); // 몫으로 바꿔버리기
      }
      if (sum > max) {
        max = sum;
        answer = x;
      } else if (sum === max) {
        // 이렇게 모든 경우의 수를 파악하는게 브루트포스
        if (x > answer) answer = x;
      }
    }
    return answer;
  }
}
{
  // while말고 배열을 사용한 경우
  function solution(n, arr) {
    let answer,
      max = Number.MIN_SAFE_INTEGER; // 최소값으로 초기화
    for (let x of arr) {
      let sum = x
        .toString()
        .split("")
        .reduce((a, b) => (a + Number(b), 0));
      if (sum > max) {
        max = sum;
        answer = x;
      } else if (sum === max) {
        // 이렇게 모든 경우의 수를 파악하는게 브루트포스
        if (x > answer) answer = x;
      }
    }
    return answer;
  }
}
