
const nums=[2,2,1,1,1,2,2]
var majorityElement = function(nums) {
    let hash={}
    let size=nums.length
    let majority=0
    for(let n of nums) {
        hash[n]=1+ (hash[n] || 0)
        if(hash[n] > size/2){
            majority=n
        }


    }

    return majority


    
};

majorityElement(nums)