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

{
  // 위의 직접 푼 풀이는 이중 for문이기에 복잡도가 증가
  // 아래 방식은 O(n)으로 푼 것
  const solution = (s, t) => {
    // key사이즈로 비교할 거임
    // s =  t의 key에 value를 -1로 프리셋 해두고
    // t와 일치하는게 있을때마다 +1을 해준다
    // -1 + 1 = 0이니까 0 sH의 size가 0이되는 경우 t와 모든 값이 일치한다고 추측할 수 있다

    let answer = 0;
    let sH = new Map(); // S를 추종하는 map
    for (let x of t) {
      sH.set(x, (sH.get(x) || 0) - 1); // -1로 t 값 추종하게 초기화
    }

    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
      // 기본 세팅  -처음에 필요한 idx 2 까지의 값 확인 (lt = 0용 세팅) -> 가운데 값 확인을 위해 거쳐가야한다
      sH.set(s[i], (sH.get(s[i]) || 0) + 1);
      if (sH.get(s[i]) === 0) sH.delete(s[i]);
    }
    let lt = 0; // 좌측 포인터
    for (let rt = len; rt < s.length; rt++) {
      //rt = 우측 포인터
      sH.set(s[rt], (sH.get(s[rt]) || 0) + 1); // 우측이 추가될때마다 1 더해줌
      if (sH.get(s[rt]) === 0) sH.delete(s[rt]); // sH을 세팅한다음에 0인 경우 = t에 있는게 겹치니 지워준다
      if (sH.size === 0) answer++; // 0이 되면       모든 값이 t와 일치한다는 것으로 answer에 추가해준다
      // size로 확인해주는 것이기 때문에 lt, rt 사이에 끼어있는 값들도 이미 확인한 것이 되어 문제 없음
      sH.set(s[lt], (sH.get(s[lt]) || 0) - 1); // 옮겨간 lt 값 확인 (버리는 녀석이기 때문에 빼준다)
      if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
      lt++; // rt와 같은 라운드마다 올라가게 한다
    }
    return answer;
  };
  console.log(solution("bacacbcba", "abc"));
}
