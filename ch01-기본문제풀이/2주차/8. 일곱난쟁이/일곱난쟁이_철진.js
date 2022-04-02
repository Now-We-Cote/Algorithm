// 일곱 난쟁이

// 문제 - 일곱 난쟁이의 키의 합이 100이라고 할 때, 아홉 난쟁이의 키가 주어진 경우에
// 일곱 난쟁이를 찾는 프로그램을 작성하시오.

// 입력 - 아훕 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는
// 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나
// 출력한다.

// 출력 - 입력된 순서대로 일롭 난쟁이의 키를 출력한다.

// 입력 예시 - 20, 7, 23, 19, 10, 15, 25, 8, 13

// 출력 예시 - 20, 7, 23, 19, 10, 8, 13

{
  const solution = (dwarfs) => {
    const fakeDwarfs = dwarfs.reduce((acc, curr) => acc + curr) - 100;
    return dwarfs.filter(
      (dwarf) =>
        dwarf === fakeDwarfs - dwarf || !dwarfs.includes(fakeDwarfs - dwarf)
    );
  };
}
