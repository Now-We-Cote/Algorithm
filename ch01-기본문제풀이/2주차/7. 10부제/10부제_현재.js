// ▣ 입력설명
// 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.
// ▣ 출력설명
// 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니 다.
// ▣ 입력예제 1
// 3
// 25 23 11 47 53 17 33
// ▣ 출력예제 1 3

{
  // 내 풀이
  const solution = (day, cars) => {
    const banned = cars.filter((car) => +car.toString().split("")[1] === day);
    // 단순히 끝자리 비교해야된다고 생각했는데 %활용해도 좋았을 것 같다
    // const banned = cars.filter((car) => car % 10 === day) 이렇게
    return banned.length;
  };

  const day = 3;
  const cars = [25, 23, 11, 47, 53, 17, 33];

  solution(day, cars);
}
