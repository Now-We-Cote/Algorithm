{
  const solution = (str) => {
    const arr = str
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split(""); // 정규표현식을 사용하여 알파벳이 아닌것만 소거
    if (arr.length % 2 === 1) return "NO";
    // 철진님의 풀이방식을 참고
    return arr.slice(0, arr.length / 2).every((str, idx) => str === arr[arr.length - idx - 1]) ? "YES" : "NO";
  };

  const str = "found7, time: study; Yduts; emit, 7Dnuof";

  solution(str);
}
