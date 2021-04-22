function TwoSums(arr, target) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i)
        result.push(j)
        break
      }
    }
  }
  return result
}

console.log(TwoSums([2,7,11,15], 13))
console.log(TwoSums([3,2,4], 6))
console.log(TwoSums([3,3], 6))
