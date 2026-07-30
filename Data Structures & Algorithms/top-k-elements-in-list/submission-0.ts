class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const seen = new Map<number, number>();
        for (const num of nums) {
            if (!seen.has(num)) seen.set(num, 0);

            seen.set(num, seen.get(num) + 1);
        }

        const sortedKeys = [...seen.entries()].sort((a, b) => b[1] - a[1]).map(([key]) => key);
        return sortedKeys.slice(0, k);
    }
}
