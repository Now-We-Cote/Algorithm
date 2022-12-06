// 졸업선물

// 답안
const solution = (m, product) => {
  let answer = 0;
  const n = product.length; // 학생들 수

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 상품 가격 + 배송비로 오름차순 정렬
  for (let i = 0; i < n; i++) {
    // 나머지 값 : 원래 예산에서 i번째 상품가격 50% 와 배송비를 뺀 값
    let restMoney = m - (product[i][0] / 2 + product[i][1]);

    let giftCount = 1;

    // 최소비용으로 정렬되었기 때문에 나머지 값으로 차례대로 값을 빼주면 됨
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] <= restMoney) {
        restMoney -= product[j][0] + product[j][1];
        giftCount++;
      }
      // restMoney가 없어질 때 break 걸어 둠
      else {
        break;
      }
    }

    answer = Math.max(answer, giftCount);
  }

  return answer;
};

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

solution(28, arr);
