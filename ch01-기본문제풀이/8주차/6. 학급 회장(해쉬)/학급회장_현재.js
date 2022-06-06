{
  /* 해시함수
장점
중복을 제거할 수 있다.
데이터 캐싱, 보안에 주로 사용된다.
배열의 인덱스로 접근하기 때문에 삽입, 삭제 등의 연산이 빠르다.
단점
공간 복잡도가 커진다.
충돌이 발생할 수 있다.
- 충돌이 발생할 경우 시간 복잡도는 O(n)에 가까워진다.
순서가 있는 배열에는 어울리지 않는다. */

  // 해시는 객체로 처리하여 연산한다
  const solution = (n, arr) => {
    let obj = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    };

    for (let char of arr) {
      if (char in obj) {
        obj[char] += 1;
      }
    }
    const maxValue = Math.max(...Object.values(obj));
    const maxKey = Object.keys(obj).find((key) => obj[key] === maxValue);

    return maxKey;
  };
}

{
  // case 1.
  // reduce를 가지고 객체 count 할 수 있다
  //  만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다. initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.
  const solution = (n, arr) => {
    const result = arr.reduce((chars, char) => {
      if (char in chars) {
        chars[char]++;
      } else chars[char] = 1;
      return chars;
    }, {}); // 이렇게 초기값을 객체로 제공해주면 객체로 반환한다!
    const maxValue = Math.max(...Object.values(result));
    const maxKey = Object.keys(result).find((key) => result[key] === maxValue);

    return maxKey;
  };
}

{
  // case 2.
  // 일반 객체를 사용할 때보다 map을 사용하는 경우가 효율이 더 좋다 (hash를 하라고 만들어놓은 것이기에 사용이 권장됨)
  const solution = (n, arr) => {
    let answer;
    let max = 0;
    const hash = new Map();
    // map count
    for (let char of arr) {
      if (hash.has(char)) {
        hash.set(char, hash.get(char) + 1);
      } else {
        hash.set(char, 1);
      }
    }
    // find max value
    for (let [key, val] of hash) {
      if (val > max) {
        max = val;
        answer = key;
      }
    }
    return answer;
  };
}
