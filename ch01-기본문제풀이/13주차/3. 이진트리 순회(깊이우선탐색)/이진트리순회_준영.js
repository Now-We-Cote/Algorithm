/**
 * 이진트리 순회(깊이우선탐색)
 *
 * 문제 - 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
 *
 * 연습 예시 - 1 / 2, 3 / 4 5, 6 7
 *
 * 전위순회 출력  - 1 2 4 5 3 6 7
 */

const preorder = (v) => {
  if(v > 7){
    return;
  } else {
    console.log(v);
    preorder(v * 2);
    preorder(v * 2 + 1);
  }
}

preorder(1)
console.log('================')

// 중위순회 출력 - 4 2 5 1 6 3 7

const inorder = (v) => {
  if(v > 7){
    return;
  } else {
    inorder(v * 2);
    console.log(v);
    inorder(v * 2 + 1);
  }
}

inorder(1)
console.log('================')

// 후위순회 출력 - 4 5 2 6 7 3 1

const postorder = (v) => {
  if(v > 7){
    return;
  } else {
    postorder(v * 2);
    postorder(v * 2 + 1);
    console.log(v);
  }
}

postorder(1)
console.log('================')




