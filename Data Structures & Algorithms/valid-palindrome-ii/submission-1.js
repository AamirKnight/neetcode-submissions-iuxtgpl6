class Solution {
    validPalindrome(s) {

        const isPalindrome = (l, r) => {
            while (l < r) {
                if (s[l] !== s[r]) return false;
                l++;
                r--;
            }
            return true;
        };

        let i = 0, j = s.length - 1;

        while (i < j) {
            if (s[i] === s[j]) {
                i++;
                j--;
            } else {
                // try skipping either left OR right
                return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);
            }
        }

        return true;
    }
}