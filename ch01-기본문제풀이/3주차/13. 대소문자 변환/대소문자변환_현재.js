{
  const solution = (val) => {
    const valArr = val.split("");
    const newChar = valArr.map((item) => {
      if (item === item.toUpperCase()) {
        return item.toLowerCase();
      } else {
        return item.toUpperCase();
      }
    });
    return newChar.join("");
  };
}
