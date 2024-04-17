function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length - 1; i++) {
    for (let y = 0; y < result.length - 1; y++) {
      if (result[y].year < result[y + 1].year) {
        let data = result[y]
        result[y] = result[y + 1]
        result[y + 1] = data
      }

    }
  }
  // result.sort((a, b) => b.year - a.year)
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}

