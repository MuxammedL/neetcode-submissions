class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map(nums.map((num, index) => [num, index]));
        for(let i=0;i<nums.length;i++){
            let difference = target - nums[i];
            if(numsMap.has(difference)){
                if(numsMap.get(difference) == i) continue;
                const index = numsMap.get(difference);
                return [i,index]
            }
        }
    }
}
