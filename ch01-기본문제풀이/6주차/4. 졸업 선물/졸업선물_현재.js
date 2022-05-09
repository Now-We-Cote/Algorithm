{
  const solution = (budget, students) => {
    let answer = 0;
    // 경우의 수
    // 상품 중 하나 반값+ 운송비 값 더한 금액 중 제일
    // 중 경우의수로 찾으면 되지 않을까?
    students.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 제일 저렴한 순으로 정렬
    for (let i = 0; i < students.length; i++) {
      let money = budget - students[i][0] / 2 - students[i][1]; // 순서대로 /2를 해본다
      let cnt = 1; // 무조건 한명은 사줄 수 있다
      for (let j = 0; j < students.length; j++) {
        // 그 다음 아이템을 더해보면서 큰지 작은지 check
        if (j !== i && students[j][0] + students[j][1] > money) break; // 두번째 아이템 더했을 때 초과하는 경우 pass
        if (j !== i && students[j][0] + students[j][1] <= money) {
          money -= students[j][0] + students[j][1];
          cnt++;
        }
      }
      answer = Math.max(answer, cnt); // 가장 높은 경우의 수로 answer 지정
    }
    return answer;
  };
}
