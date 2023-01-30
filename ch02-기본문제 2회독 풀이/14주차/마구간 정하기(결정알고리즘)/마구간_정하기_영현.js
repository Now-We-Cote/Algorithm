// 마구간 정하기

// 풀이

// 마구간에 몇 마리를 배치할 수 있는지 알려주는 함수
const count = (arr, dist) => {
  let cnt = 1; //말의 개수
  let ep = arr[0]; // 첫번째 마구간에 넣는 게 무조건 유리하기 때문에
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};

const solution = (C, arr) => {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); //가장 가까운 두말의 거리
    if (count(arr, mid) >= C) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
};

const arr = [1, 2, 8, 4, 9];

solution(3, arr);
