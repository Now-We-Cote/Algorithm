{
  const solution = (S, T) => {
    let sum = [];
    let answer = [];
    let map = new Map();

    // setting guide map
    const start = () => {
      for (let char of T) {
        if (map.has(char)) {
          map.set(char, map.get(char) + 1);
        } else {
          map.set(char, 1);
        }
      }
    };

    const init = () => {
      for (let char of T) {
        map.set(char, 1);
      }
    };

    const checkValidation = (arr) => {
      init();
      for (let char of arr) {
        if (!map.has(char) || map.get(char) < 0) return;
        map.set(char, map.get(char) - 1);
      }
      // 값이 모두 0인 경우에만 answer push 시켜주자
      const validEntries = [];
      for (let [key, value] of map) {
        if (value !== 0) return; // 0이 아닌 요소가 있는 경우 여기서 걸러진다
        validEntries.push(value);
      }
      if (validEntries) {
        answer.push(arr.join(""));
      }
    };

    // begins at here
    start();

    // first char
    for (let i = 0; i < T.length; i++) {
      sum.push(S[i]);
    }
    checkValidation(sum);

    //여기서 하나씩 대조해봐야함
    for (let i = T.length; i < S.length; i++) {
      sum.splice(0, 1);
      sum.push(S[i]);
      checkValidation(sum);
    }

    return answer;
  };

  const S = "bacaAacba";
  const T = "abc";

  solution(S, T);
}
