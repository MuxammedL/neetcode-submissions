class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
  productExceptSelf(nums: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i <= nums.length - 1; i++) {
      let res = 1;
      for (let j = 0; j <= nums.length - 1; j++) {
        if (i != j) {
          res = res * nums[j]
        }
      }
      result.push(res)
    }
    return result
  }
}
