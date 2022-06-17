// 선택 정렬

// 문제 - N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.

// 입력 - 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

// 출력 - 오름차순으로 정렬된 수열을 출력합니다.

// 입력 예시 - 6, [13, 5, 11, 7, 23, 15]

// 출력 예시 - [5, 7, 11, 13, 15, 23]

{
  const solution = (N, array) => {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[minIndex] > array[j]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }

    return array;
  };
}
