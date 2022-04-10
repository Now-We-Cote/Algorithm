{
  const solution = (val) => {
    const arr = [];
    for (let item of val) {
      if (!arr.includes(item)) {
        arr.push(item);
      }
    }
    return arr.join("");
  };
}
