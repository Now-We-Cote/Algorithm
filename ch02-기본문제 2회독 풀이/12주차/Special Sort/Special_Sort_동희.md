# Special Sort

```javascript
const solution = (arr) => {
  let negative = [];
  let positive = [];
  arr.forEach(num => {
    if(Number(num)<0){
      negative.push(num);
    } else {
      positive.push(num);
    }
  })
return ([...negative, ...positive])
};

solution([1, 2, 3, -3, -2, 5, 6, -6]); // -3, -2, -6, 1, 2, 3, 5, 6 ]

```