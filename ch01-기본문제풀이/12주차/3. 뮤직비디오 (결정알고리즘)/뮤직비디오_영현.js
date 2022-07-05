// 뮤직비디오

// 답안
const count = (songs, capacity) => {
  let cnt = 1,
    sum = 0; //dvd 한 장 이상은 필수기 때문에 cnt는 1
  for (let x of songs) {
    //저장할 수 없다면 (계속 누적해서 노래를 저장하다가 메모리가 다 차면)
    if (sum + x > capacity) {
      cnt++; //새로운 dvd 마련
      sum = x; //누적하다가 이전 dvd에 누적하지 못했던 첫번째 숫자를 dvd에 저장
    } else {
      sum += x;
    }
  }
  return cnt;
};

const solution = (m, songs) => {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); //mid값 설정
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;
solution(num, arr);
