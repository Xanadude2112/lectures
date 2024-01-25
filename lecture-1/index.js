const sum = function(arg){
  let sum = 0;
    for(let i = 0; i < arg.length; i++){
      let num = Number(arg[i]);
    if(!isNaN(num)){
      sum += num; 
      return
    }
    console.log(`Skipping non-numeric arguments ${arg[i]}`);
  }
  return sum;
}
console.log(process.argv.slice(2))