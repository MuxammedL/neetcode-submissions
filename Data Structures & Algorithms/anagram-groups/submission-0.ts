class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
       isAnagrams(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        const count = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }
        return count.every((val) => val == 0)
    }

    groupAnagrams(strs: string[]): string[][] {
        const result = new Array;
        let str = new Array;
        const seen = new Map<string, boolean>
        for (let i = 0; i < strs.length; i++) {
            if (!seen.has(strs[i])) {
                str = []
                str.push(strs[i]);
                for (let j = i + 1; j < strs.length; j++) {
                    if (this.isAnagrams(strs[i], strs[j])) {
                        str.push(strs[j]);
                        seen.set(strs[j], true)
                    }
                }
                result.push(str)
            }
        }
        return result
    }
}
