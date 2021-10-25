export const getFilteredByKey = (data, key, value) => {
  return data.filter(function(e) {
    return e[key] === value;
  });
}

export const getMonthInLetter = (month) => {
  const months = [
    'Enero', 
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio', 
    'Julio',
    'Agosto', 
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'

  ]
  return months[Number(month)- 1]
}

export const sortEmpresas = (data, prop) => {
  return data.sort((a, b) => {
    if (a[prop] > b[prop]) {
      return 1;
    }
    if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  }) 
}