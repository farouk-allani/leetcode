// const nums =[1,2,3,4,5,6,7]


var rotate = function(nums, k) {


    k %= nums.length;
    nums.unshift(...nums.splice(nums.length - k, k));

    
};

