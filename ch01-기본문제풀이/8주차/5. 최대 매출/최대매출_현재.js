{
  const solution = (n, k, arr) => {
    const newArr = arr.map((item, idx) => {
      const slicedArr = arr.slice(idx, idx + k).reduce((a, b) => a + b);
      return slicedArr;
    });

    return Math.max(...newArr);
  };

  // sliding window 기법
  // [a, b, c] 이렇게 먼저 합을 구하고, 그 다음 차례가 되면 [b, c, d]이렇게 보는 것
  // [b, c, d]의 합을 구할 때 (a+b+c) + (d - a) 이런식으로 처리해주는 것을 sliding window 기법이라고 한다 => carousel같음
  // 이렇게 하면 for 하나만 돌리면 되어서 시간복잠도가 O(n)이 된다

  //! 위에 코드는 reduece가 answer 길이 만큼 반복하면서 콜백함수를 반복호출하는 구조이기 때문에 시간복잡도 O(n^2)입니다.
  //위에 코드도 reduce가 i저점부터 k번을 반복문처럼 반복하기 때문에 결국에는
  // for (let i = 0; i < arr.length; i++) {
  //   let sum=0;
  //   for(let j=i; j<i+k; j++){
  //          sum+=arr[j]
  // 과 같은 시간복잡도 O(n^2)입니다.
  // 이런문제는 슬라이딩 윈도우로 하는 습관을 들여 놓는게 좋습니다.
}

{
  // sliding window 사용
  const solution = (n, k, arr) => {
    let sum = 0;
    let answer = 0;
    for (let i = 0; i < k; i++) {
      // 첫번째 합
      sum += arr[i];
    }
    for (let i = k; i < n; i++) {
      // 최대값 구하기
      sum = sum + arr[i] - arr[i - k];
      answer = Math.max(sum, answer);
    }
    return answer;
  };
}
