function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.forEach(mobil => (mobil.available === true) ? result.push(mobil) : null);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  console.table(result)
  return result;
}