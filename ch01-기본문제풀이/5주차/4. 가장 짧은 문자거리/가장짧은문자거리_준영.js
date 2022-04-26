/** 
 * 가장 짧은 문자거리
 * 문자열 1개와 문자 1개 입력을 받아 문자열에서 특정 문자와이 거리중 짧은 거리를 출력
 * ex)teachermode e -> 1 0 1 2 1 0 1 2 2 1 0
 */

{
  const solution = (string, char) => {
    const array = string.split('');
    console.log(array);
    let idx = array.indexOf(char);
    let indexes = [];
    while (idx != -1) {
      indexes.push(idx);
      idx = array.indexOf(char, idx + 1);
    }
    console.log(indexes);
    return array.map((char, index) => {
      return Math.min.apply(null, indexes.map((charIdx) => Math.abs(charIdx - index)));
    })

  };

  solution('teachermode', 'e')
}
