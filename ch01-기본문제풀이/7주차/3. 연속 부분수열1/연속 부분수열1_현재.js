{
  const solution = (total, arr) => {
    let answer = 0,
      lt = 0,
      sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt]; // rt에 변화가 있을때는 무조건 validattion check 하라
      if (sum === total) answer++;
      while (sum >= total) {
        // sum이 total과 같아도 lt는 이동됭어야 한다
        sum -= arr[lt++]; // 이렇게 쓰면 sum에서는 lt가 빠지고, lt의 값은 증가한다!
        if (sum === total) answer++;
      }
    }
    return answer;
  };

  const arr = [1, 2, 1, 3, 1, 1, 1, 2];
  solution(6, arr);
}
