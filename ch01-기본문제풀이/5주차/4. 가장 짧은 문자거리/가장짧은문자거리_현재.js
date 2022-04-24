{
  // 철진님의 명풀이를 참고
  const solution = (s, t) => {
    // 문자열 s의 각 문자가 문자t와 떨어진 최소거리
    const strArr = str.split("");
    return strArr
      .map((item, idx, arr) => {
        const reverse = arr
          .slice(0, idx + 1)
          .reverse()
          .indexOf(t);
        // 지금 인덱스까지의 arr를 잘라서 뒤집은 배열 내에서 t의 인덱스가 무엇인지를 반환한다 (즉 배열 내 t의 위치 확인)
        const forward = arr.slice(idx).indexOf(t);
        // 지금 인덱스까지의 arr을 자른 배열 내에서 t의 인덱스가 무엇인지를 반환한다 (즉 배열 내 t의 위치 확인)
        return Math.min(reverse > -1 ? reverse : 101, forward > -1 ? forward : 101);
        // -1은 없는 경우 -> 없는 경우는 무조건 반대쪽이 가져가는 것 -> 문자열의 길이가 100을 넘지 않으니 무조건 false를 만들려면 101로 설정하면 됨
        // -1보다 큰 경우 : 있는 경우
      })
      .join("");
  };

  const str = "teachermode";

  solution(str, "e");
}
