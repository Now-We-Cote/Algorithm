{
  const solution = (str) => {
    const num = str.replace(/[^0-9]/g, "").split("");
    const finalNum = num[0] === "0" ? num.slice(1, num.length) : num;
    const answer = +finalNum.join("");
    if (answer < 100000000) return answer;
  };

  const str = "g0en2T0s8eSoft";

  solution(str);
}
