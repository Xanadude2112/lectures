const sum = function(arg) {
  let sum = 0;

  for (let i = 0; i < arg.length; i++) {
    let num = Number(arg[i]);
    if (!isNaN(num)) {
      sum += num;
    } else {
      console.log(`Skipping non-numeric argument ${arg[i]}`);
    }
  }
  return sum;
}

console.log(sum(process.argv.slice(2)));
