let nums=[0,1,1,2,2,2,3,3,4]
var removeDuplicates = function(nums){
    let finalLength = 0; 
    let number;
    for(let i=0;i<nums.length();i++){
       if (number!==nums[i]){
           nums[finalLength]=nums[i];
           number=nums[i];
           finalLength++;
       }
    }
    return finalLength;
    
}
