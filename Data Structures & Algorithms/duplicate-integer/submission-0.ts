class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqeItems = [...new Set(nums)];
        return uniqeItems.length != nums.length;
    }
}
