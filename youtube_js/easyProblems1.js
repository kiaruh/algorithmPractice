//Two Sum algotithm
var nums = [2, 1, 15, 3, 11, 7]

function twoSum(nums,target){
   const preNumber = {}
   for(let i = 0; i < nums.length; i++){
       const currentNumber = nums[i]
       const neededNumber = target - currentNumber
       const index = preNumber[neededNumber]
       if(index!== undefined){
           return [index,i]
       }else{
           preNumber[currentNumber] = i
       }
   }
}

console.log(twoSum(nums,9))
