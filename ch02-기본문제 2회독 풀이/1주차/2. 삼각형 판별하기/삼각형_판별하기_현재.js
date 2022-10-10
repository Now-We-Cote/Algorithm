{
  const solution = (arr) => {
    // 길이가 가장 긴 변은 다른 두 변의 길이의 합보다 작아야한다
    const triangleArr = arr.sort((a, b) => a - b)
    if(triangleArr[2] < triangleArr[0] + triangleArr[1]) {
      return "YES"
    } else {
      return "NO"
    }

  }

  const arr = [13, 33, 17]

  solution(arr)
}
