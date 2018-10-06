module.exports = function longestConsecutiveLength(array) {
  // your solution here
array.sort((a, b) => a - b);
let countMax = 1;
let count = 1;
 if(array.length === 0){
  return count = 0;
}
 for(let i = 0; i < array.length; i++){
     if((array[i] + 1) === array[i+1]){
      count++;
    }
    else{
      count = 1;
    }
     
    if(count > countMax){
      countMax = count;
      count = 1;
}
 }
for (let j = 0; j < array.length; j++){
  if((array[j] + 1) === array[j+1]){
    count++;
  }
  else {
    count = 1;
  }
  if(count === countMax){
    return count;
  }
}
 return count;
}
