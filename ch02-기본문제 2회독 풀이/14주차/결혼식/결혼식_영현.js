// 결혼식

// 풀이
const solution = (arr) => {
  let maxPeople = 0;
  let people = 0;

  const timeArr = arr.reduce((acc, cur) => {
    return [...acc, [cur[0], 1], [cur[1], 0]];
  }, []);

  const timeSortArr = timeArr.sort((acc, cur) => {
    if (acc[0] === cur[0]) return acc[1] - cur[1];
    return acc[0] - cur[0];
  });

  timeSortArr.forEach((time) => {
    if (time[1]) {
      people++;
    } else {
      people--;
    }
    if (maxPeople < people) maxPeople = people;
  });
  return maxPeople;
};

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

solution(arr);
