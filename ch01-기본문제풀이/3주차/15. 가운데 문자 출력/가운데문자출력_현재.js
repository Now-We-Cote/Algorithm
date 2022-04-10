{
  const solution = (val) => {
    const valArr = val.split("");
    // 홀수 체크
    const length = val.length % 2;
    const spliter = Math.round(val.length / 2);
    if (length) {
      return valArr[spliter - 1];
    } else {
      const a = valArr[spliter - 1];
      const b = valArr[spliter];
      return [a, b].join("");
    }
  };
}

// 철진님의 명풀이를 참조
{
  const solution = (val) => {
    // subString param : starting idx, end idx => end idx전까지 반환한다
    // subStr는 depreciated
    return val.length % 2 === 1 ? val.substring(Math.floor(val.length / 2), Math.floor(val.length / 2 + 1)) : val.substring(val.length / 2 - 1, val.length / 2 + 1);
  };
}
