{
  const solution = (val) => {
    let long = "";
    for (let item of val) {
      if (item.length > long.length) {
        long = item;
      }
    }
    return long;
  };
}
