// 아나그램

// 답안

// 배열 객체로 변환 함수
const arrToObj = (arr) => {
  return arr.reduce((acc, cur, index) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
};

// 알파벳을 아스키코드로 비교하여 sorting
const sortObj = (obj) => {
  return Object.entries(obj).sort((a, b) => (a[0] < b[0] ? -1 : 1));
};

const solution = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  return (
    JSON.stringify(sortObj(arrToObj(arr1))) ===
    JSON.stringify(sortObj(arrToObj(arr2)))
  );
};

solution("AbaAeCe", "baeeACA");
