// 아나그램(해쉬)

// 문제 - Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아 나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면
// A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
// 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다.

// 입력 - 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.

// 출력 - 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

// 입력 예시 1 - "AbaAeCe", "baeeACA"

// 출력 예시 1 - YES

// 입력 예시 2 - "abaCC", "Caaab"

// 출력 예시 2 - NO

{
  const solution = (word1, word2) => {
    const wordHash1 = word1.split("").reduce((wordHash1, curr) => {
      wordHash1[curr] = wordHash1[curr] + 1 || 1;
      return wordHash1;
    }, {});

    const wordHash2 = word2.split("").reduce((wordHash2, curr) => {
      wordHash2[curr] = wordHash2[curr] + 1 || 1;
      return wordHash2;
    }, {});

    const keysOfWord1 = Object.keys(wordHash1);

    return keysOfWord1.slice().reduce(
      (result, key, idx, array) => {
        wordHash1[key] !== wordHash2[key] && array.splice(idx);
        return wordHash1[key] === wordHash2[key] ? result : { isAnagram: "NO" };
      },
      { isAnagram: "YES" }
    ).isAnagram;
  };
}
