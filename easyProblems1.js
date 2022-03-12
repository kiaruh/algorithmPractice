//Two Sum algotithm
var nums = [2, 1, 15, 7, 11, 15, 5]

function twoSum(nums,target){
    let preValue = {}
    for(let i = 0; i < nums.length; i++){
        let currentValue = nums[i]
        let neededValue = target - currentValue
        let index2 = preValue[neededValue]
        if(index2!==undefined){
            return [index2,i]
        }else{
            preValue[nums[i]] = i
        }
    }

}

console.log(twoSum(nums,9))
