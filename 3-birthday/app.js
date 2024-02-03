const isValidAge = (date) => {
    const nowDate = new Date().getFullYear()
    const checkedDate = new Date(date).getFullYear();
    const different = nowDate - checkedDate;

    if(different > 14 ){
        return true;
    } else {
        return false;
    }

}

console.log(isValidAge('2015-01-05'));
console.log(isValidAge('2010-06-30'));
console.log(isValidAge('2008-05-04'));
