/** 
 * 문자열 압축
 * 문자열을 받아 문자가 연속으로 반복되는 경우 문자 바로 오른쪽에 반복되는 횟수 표기
 * ex) KKHSSSSSSSE -> K2HS7E
 */

{
  const solution = (string) => {
    const array = string.split("")
    let idx = 0;
    const length = array.length;
    let result = [];
    while (idx < length) {
      let repeat = 1;
      const char = array[idx];
      while (array[idx] === array[idx + 1]) {
        repeat++;
        idx++;
      }
      result.push(`${char}${repeat}`)
      idx++;
    }
    return result.join("").replaceAll(1, "")
  };

  solution('KKHSSSSSSSE')
}
