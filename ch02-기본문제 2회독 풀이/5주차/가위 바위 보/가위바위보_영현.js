// 가위바위보

// 답안
const getGameResult = (a, b) => {
  const gameValue = a - b;
  switch (gameValue) {
    case 1:
      return "A";
      break;
    case -1:
      return "B";
      break;
    case 2:
      return "B";
      break;
    case -1:
      return "B";
      break;
    case -2:
      return "A";
      break;
    case 0:
      return "D";
      break;
    default:
      return null;
  }
};

function solution(aInfo, bInfo) {
  const result = [];

  for (let i = 0; i < aInfo.length; i++) {
    result.push(getGameResult(aInfo[i], bInfo[i]));
  }
  return result;
}

const aInfo = [2, 3, 3, 1, 3];
const bInfo = [1, 1, 2, 2, 3];
solution(aInfo, bInfo);
