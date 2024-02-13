const isValidAge = (date) => {
  const nowDate = new Date().getFullYear();
  const checkedDate = new Date(date).getFullYear();

  return nowDate - checkedDate > 14;
};

console.log(isValidAge("2015-01-05"));
console.log(isValidAge("2010-06-30"));
console.log(isValidAge("2008-05-04"));
