class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const uniqueS = [...new Set(s)];
        const uniqueT = [...new Set(t)];
        if(s.length != t.length) return false;
        if(uniqueS.length != uniqueT.length) return false;
        const S = s.split("").sort()
        const T = t.split("").sort()
        for(let i=0;i<s.length;i++){
            if(S[i]==T[i]) continue; 
            return false
        }
        return true;
    }
}
