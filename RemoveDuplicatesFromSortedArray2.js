nums =
[1,1,1,2,2,3]


var removeDuplicates = function(nums) {
    for (let i=nums.length; i>1; i--  ){
        if(nums[i]===nums[i-2]){
            nums.splice(i-1,1)
        }
    }
    
};