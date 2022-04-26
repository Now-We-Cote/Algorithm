/** 
 * 유효한 펠린드롬 확인
 * 펠린드롬이란 앞으로 읽으나 뒤로 읽으나 같은 문자열 인데 중간에 알파벳이 아닌 문자는 제외ex) 기!#러$%기 -> YES
 * 문자열중 회문 문자열의 경우 YES 아닌경우 NO 반환
 */

{
  const solution = (string) => {
    const alphabetRegex = /[a-z]/gi;
    const onlyAlphabet = string.match(alphabetRegex);
    const length = onlyAlphabet.length;
    const halfLength = length / 2;
    const forwardAarray = onlyAlphabet.slice(0, halfLength);
    const backwardArray = onlyAlphabet.slice(-halfLength);
    let result = "YES"

    forwardAarray.forEach((char, index) => {
      if (char != backwardArray[index]) {
        result = "NO"
      }
    })
    return result
  };
}
