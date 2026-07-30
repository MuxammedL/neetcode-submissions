class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";
        for (const s of strs) {
            res += `${s.length}` + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] != "#") {
                j++;
            }
            let length = Number(str.slice(i, j));
            res.push(str.slice(j + 1, length + j + 1));
            i = j + length + 1;
        }

        return res;
    }
}
