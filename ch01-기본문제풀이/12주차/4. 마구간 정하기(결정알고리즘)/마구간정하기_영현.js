// 마구간정하기

// 답안
const count = (stable, dist) => {
  let cnt = 1; //한 마리는 무조건 배치
  let ep = stable[0]; //마구간의 맨 앞(배열의 0번 인덱스)에 넣어줌
  for (let i = 1; i < stable.length; i++) {
    //가장 가까운 두 말의 거리(dist)보다 크거나 같으면
    if (stable[i] - ep >= dist) {
      //마구간에 말 배치
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
};

const solution = (c, stable) => {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1]; //맨 끝

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); //mid값 설정 + 가장 가까운 말의 거리를 정해줌
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
};
const arr = [1, 2, 8, 4, 9]; //마구간 좌표
const num = 3; //배치해야할 말의 마리수
solution(num, arr);
