/** 
 * 회문 문자열 문제
 * 회문 문자열이란 앞으로 읽으나 뒤로 읽으나 같은 문자열 ex) 기러기
 * 문자열중 회문 문자열의 경우 YES 아닌경우 NO 반환
 */

{
  const solution = (string) => {
    const length = string.length;
    const halfLength = length / 2;
    const forwardAarray = string.substr(0, halfLength).split("");
    const backwardArray = string.substr(-halfLength).split("").reverse();
    let result = "YES"

    forwardAarray.forEach((char, index) => {
      if (char != backwardArray[index]) {
        result = "NO"
      }
    })
    return result;
  };
}
