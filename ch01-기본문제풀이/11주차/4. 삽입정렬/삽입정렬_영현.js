// 삽입정렬

// 답안
const solution = (arr) => {
  let answer = arr;
  for (i = 1; i < arr.length; i++) {
    let tmp = arr[i]; // 기준인 i값을 저장해야 함
    for (j = i - 1; j >= 0; j--) {
      // j는 i-1부터 제일 앞의 0까지
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else break; // arr[j]지점이 tmp보다 작을 때 break!
    }
    arr[j + 1] = tmp; // j지점이 아닌 +1한 곳에 tmp를 넣어 줌
  }
  return answer;
};

const arr = [11, 7, 5, 6, 10]; //[ 5, 6, 7, 10, 11 ]
solution(arr);

// [ 궁금한점 ]
// let으로 for문 안에서 선언하지 않으면 스코프가 바뀌는 건지?? 지역변수에서 전역으로 그렇다면 var로 선언하는 것과 같은 것인지??
