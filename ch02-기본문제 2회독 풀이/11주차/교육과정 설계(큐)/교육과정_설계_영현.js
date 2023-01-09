// 교육과정 설계

// 답안
const solution = (sub, curr) => {
  const newSub = [...curr]
    .filter((item) => {
      if ([...sub].indexOf(item) > -1) return item;
    })
    .join("");

  return sub === newSub ? "YES" : "NO";
};

const str = "CBA";
const str2 = "CBDAGE";
solution(str, str2);
