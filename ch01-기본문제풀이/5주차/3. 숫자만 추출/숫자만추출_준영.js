/** 
 * 숫자만 추출하여 자연수 만들기
 * 문자와 숫자가 섞여있는 문자열에서 숫자만 추출하여 자연수 만들기
 * ex)나는123개발45자 -> 12345
 */

{
  const solution = (string) => {
    return Number(string.match(/[0-9]/gi).join(""));
  };
}
