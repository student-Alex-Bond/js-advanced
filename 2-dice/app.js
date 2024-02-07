const dice = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
 }
console.log(dice(1,6));