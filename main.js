function smaller(nums) {

  let amountSmallerArr = []
  
  for (let i = 0; i < nums.length; i++) {
    
    let counter = 0

    for (let j = i+1; j < nums.length; j++) {
      
      if (nums[j] < nums[i]) counter++
      
    }
    
    amountSmallerArr.push(counter)
  }
  
  return amountSmallerArr
}


console.log(smaller( [7, 2, 3, 8] ))
// [2, 0, 0, 0]


// amountSmallerArr to push counts to 
// for loop outer
  // counter variable that will reset at each increment through nums array
  // for loop inner. j = i + 1
    // if nums[j] is less than nums[i], counter++
  // end inner loop
  // push counter to amountSmallerArr
// end outer loop
// return amountSmallerArr

