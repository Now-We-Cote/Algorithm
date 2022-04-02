// ▣ 입력설명
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// ▣ 출력설명
// 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
// ▣ 입력예제 1
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13

{
  const solution = (dwarfs) => {
    const totalHeights = dwarfs.reduce((a, b) => a + b);
    const fakeHeights = totalHeights - 100;
    // 빙빙 돌면서 두개 합이 40이 나오는 경우를 찾으면 되지 않을까?
    for (let i = 0; i < dwarfs.length; i++) {
      for (let j = i + 1; j < dwarfs.length; j++) {
        if (dwarfs[i] + dwarfs[j] === fakeHeights) {
          return dwarfs.filter((dwarf) => dwarf !== dwarfs[i] && dwarf !== dwarfs[j]);
        }
      }
    }
    // 보다 근사한 철진님의 솔루션..
    // dwarfs.filter(
    //   (dwarf) =>
    //     dwarf === fakeDwarfs - dwarf || !dwarfs.includes(fakeDwarfs - dwarf)
    // );
  };

  const dwarfs = [20, 7, 23, 19, 10, 15, 25, 8, 13];
  solution(dwarfs);
}
