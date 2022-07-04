// 이분 검색

// 답안
// 이렇게 풀면 안될 것 같음
const solution = (arr, num) => {
  return (
    arr
      .sort((a, b) => {
        return a - b;
      })
      .indexOf(Math.floor(num)) + 1
  );
};

const arr = [23, 87, 65, 12, 57, 32, 99, 81];
const num = 32;
solution(arr, num);

// 선생님 답안
const solution = (arr, num) => {
  let answer;
  arr.sort((a, b) => a - b); //일단 먼저 정렬
  let lt = 0,
    rt = arr.length - 1; //lt와 rt는 index
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    //중간값이 num이면 값이 구해진 것이니 break
    if (arr[mid] === num) {
      answer = mid + 1;
      break;
    }
    //중간값이 num보다 크면 뒷쪽을 날려버림(rt값을 중간값 -1로)
    else if (arr[mid] > num) {
      rt = mid - 1;
    }
    //중간값이 num보다 작으면 앞쪽을 날려버림(lt값을 중간값 +1 로)
    else {
      lt = mid + 1;
    }
  }
  return answer;
};

const arr = [23, 87, 65, 12, 57, 32, 99, 81];
const num = 32;
solution(arr, num);
