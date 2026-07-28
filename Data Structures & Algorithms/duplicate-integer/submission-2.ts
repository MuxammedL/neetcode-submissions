class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums: number[]): boolean {
    //     const uniqeItems = [...new Set(nums)];
    //     return uniqeItems.length != nums.length;
    // }
    hasDuplicate(nums: number[]): boolean {
        const seen =  new Set<number>()
        for(const num of nums ){
            if(seen.has(num)) return true;
            seen.add(num)
        }
        return false;
    }
}
