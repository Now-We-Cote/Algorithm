// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// 문제 - S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// 입력 - 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

// 출력 - S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

// 입력 예시 - "bacaAacba", "abc"

// 출력 예시 - 3

{
  const isAnagram = (word1, hash2) => {
    const hash1 = word1.split("").reduce((wordHash2, curr) => {
      wordHash2[curr] = wordHash2[curr] + 1 || 1;
      return wordHash2;
    }, {});

    const keys = Object.keys(hash1);

    return keys.slice().reduce(
      (result, key, idx, array) => {
        hash1[key] !== hash2[key] && array.splice(idx);
        return hash1[key] === hash2[key] ? result : { isAnagram: false };
      },
      { isAnagram: true }
    ).isAnagram;
  };

  const solution = (word1, word2) => {
    const wordHash2 = word2.split("").reduce((wordHash2, curr) => {
      wordHash2[curr] = wordHash2[curr] + 1 || 1;
      return wordHash2;
    }, {});

    return word1
      .slice(1, word1.length - word2.length + 1)
      .split("")
      .reduce(
        (acc, curr, idx) => {
          const newWord = acc.prevWord.slice(1) + word1[idx + word2.length];

          return isAnagram(newWord, wordHash2)
            ? { prevWord: newWord, count: acc.count + 1 }
            : { ...acc, prevWord: newWord };
        },
        {
          prevWord: word1.slice(0, word2.length),
          count: isAnagram(word1.slice(0, word2.length), wordHash2) ? 1 : 0,
        }
      ).count;
  };
}
