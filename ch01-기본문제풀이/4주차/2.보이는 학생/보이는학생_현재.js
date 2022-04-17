{
  // 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않는다
  const solution = (students) => {
    // 기준값 하나 두고 그거보다 큰놈만 저장해야겠네
    let criteria = arr[0];
    const answer = [arr[0]];
    for (let student of students) {
      if (student > criteria) {
        answer.push(student);
        criteria = student;
      }
    }
    return answer.length;
  };

  const arr = [130, 135, 148, 140, 150, 150, 153];
  solution(arr);
}
