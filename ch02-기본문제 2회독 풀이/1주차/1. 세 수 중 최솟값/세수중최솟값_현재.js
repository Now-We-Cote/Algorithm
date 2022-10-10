{
  const solution = (a, b, c) => {
    let answer = 0;
    if(a < b) {
      answer = a;
    } else {
      answer = b;
    }
    if( c < answer) {
      answer = c;
    }

    return answer;
  }

  solution(6, 5, 11)
}
