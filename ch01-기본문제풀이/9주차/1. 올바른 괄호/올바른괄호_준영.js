/**
 * 올바른 괄호
 *
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
 *
 * 입력 - 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
 *
 * 출력 - 첫 번째 줄에 YES, NO를 출력한다.
 *
 * 입력 예시 - "(()(()))(()"
 *
 * 출력 예시 - "NO"
 */

const solution = (str) => {
  const strToArr = [...str]
  const result = []
  if (strToArr[0] !== '(') return 'NO'
  strToArr.forEach((string) => {
    if (string === '(') {
      result.push('(')
    } else if (string === ')') {
      result.pop()
    }
  })

  if(result.length === 0) return 'YES'
  return 'NO'
}

console.log(solution("(()(()))(()"))