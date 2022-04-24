{
  const solution = (str) => {
    const arr = str.toUpperCase().split("");
    if (arr.length % 2 === 1) return "NO"; // 홀수는 같을 수 없으니 제외
    const divider = arr.length / 2;
    const firstHalf = arr.slice(0, divider);
    const lastHalf = arr.slice(divider, arr.length).reverse(); // 뒤집어야 비교 가능
    // 배열 비교는 참조형 비교이기에 stringify로 절대화 한다
    if (JSON.stringify(firstHalf) === JSON.stringify(lastHalf)) {
      return "YES";
    } else {
      ("NO");
    }
  };

  const str = "gooG";

  solution(str);
}
