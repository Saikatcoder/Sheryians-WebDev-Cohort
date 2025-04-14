// Using BrootFrouce method...
function CalculateTwoSum(nums, target){
    let n =nums.length;
    for (let i = 0; i < n.length; i++) {
       for(let j=i+1; i<n; j++){
        if(nums[i]+nums[j] == target){
            return[i,j]
        }
       }
        
    }
}



function CalculateTwoSum(nums,target){
    let map = new Map()
    for(let i=0; i<nums.length;i++){
        let compliment = target - nums[i]
        if(map.has(compliment)){
            return [map.get(compliment),i]
        }
        map.set(nums[i],i)
    }
    return []
}