// 모든 아나그램 찾기

// 답안

const arrToObj = (arr) => {
  return arr.reduce((acc, cur, index) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
};

const sortObj = (obj) => {
  return Object.entries(obj).sort((a, b) => (a[0] < b[0] ? -1 : 1));
};

const solution = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const resultObj = arrToObj(arr2);
  let answer = 0;
  for (let i = 0; i <= arr1.length - arr2.length; i++) {
    const subArr = arr1.slice(i, i + 3);
    if (
      JSON.stringify(sortObj(arrToObj(subArr))) ===
      JSON.stringify(sortObj(resultObj))
    )
      answer++;
  }
  return answer;
};

solution("bacaAacba", "abc");
