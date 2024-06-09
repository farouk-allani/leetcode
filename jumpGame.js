var canJump = function(nums) {
    let maxJump=nums[0]
    for (let i=1; i < nums.length; i++) {
     if (i> maxJump) return false
     maxJump= Math.max(maxJump, nums[i]+i)
     
    }
 
    return true
 
 };