{
  const solution = (str) => {
    // 반복되는 것을 찾아내야되지않나
    const arr = str.split("");
    const filteredArr = [...new Set(arr)]; // set을 사용하여 중복지표들을 뽑아낸다
    const answer = [];
    filteredArr.map((item) => {
      const firstIdx = arr.indexOf(item);
      const lastIdx = arr.lastIndexOf(item);
      if (firstIdx === lastIdx) {
        // 첫번째 idx와 마지막 idx가 같으면 => 하나밖에 없다는 것 => 그냥 item만 추가
        answer.push(item);
      } else {
        answer.push(item);
        answer.push(lastIdx - firstIdx + 1); //첫번째 idx와 마지막 idx가 다르면 그 길이만큼 숫자를 추가
      }
    });
    return answer.join("");
  };

  const str = "KKHSSSSSSSE";

  solution(str);

  // 해당 풀이법의 한계 : KKHSSKKKSS처럼 중간에 기존과 동일한 문자가 또다시 반복되는 경우 count 불가 => set의 한계
}

{
  // 선생님 풀이
  const solution = (s) => {
    let answer = "";
    let cnt = 1;
    s = s + ""; // 문자열처리
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) cnt++; // 이 다음거랑 중복되는 경우 +1 해준다
      else {
        // 다음거랑 다른 경우
        answer += s[i]; // answer에 알파벳 입력
        if (cnt > 1) answer += String(cnt); //지금까지 누적된 count 수를 입력 (1은 입력 안하기로 했으니까 제외)
        cnt = 1; //count 초기화
      }
    }
    return answer;
  };
}
