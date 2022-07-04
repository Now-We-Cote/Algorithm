{
  const count = (songs, capacity) => {
    // 답이 유효한지 유효하지 않은지 확인하는 곳
    // 매우 중요
    let cnt = 1,
      sum = 0; // cnt = 앨범 장수, sum = 노래 길이
    for (let song of songs) {
      if (sum + song > capacity) {
        // 용량이 초과하는 경우
        cnt++;
        sum = song;
      } else {
        sum += x;
      }
    }
    return cnt; // cnt는 필요한 장수
  };

  const solution = (total, seriesNum, songs) => {
    // 이것도 이분 검색 활용하는 것..!
    // n = dvd에 들어가는 곡 수
    // m = 발행할 dvd 수
    let answer = 0;
    let rt = songs.reduce((a, b) => a + b, 0);
    let lt = Math.max(...songs); // dvb 1개의 최소 용량 = 노래 중 가장 긴 노래

    // 외우세요
    while (lt <= rt) {
      let half = Math.floor((lt + rt) / 2);
      // dvd 1장의 최대 용량
      // half 기준으로 잘랐을 때 3개가 나오는지 확인
      // 용량이 적을 수록 좋은거여서 half는 작아질 수록 좋다
      // half를 기준으로 잘랐을 때 3개가 초과되면 lt = half + 1
      if (count(songs, half) <= seriesNum) {
        // 해당 용량으로 발행한 dvd 갯수가 seriesNum보다 작으면, 더 쪼갤 수 있다는 것이니까 rt를 앞으로 당긴다
        answer = half;
        rt = half - 1;
      } else {
        lt = half + 1;
      }
    }
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  solution(9, 3, arr);
}
