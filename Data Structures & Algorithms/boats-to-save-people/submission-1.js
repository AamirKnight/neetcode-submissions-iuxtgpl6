class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b)
        let cnt=0;
        let i=0,j=people.length-1;
        while(i<=j){
            if(people[i]+people[j]<=limit){
                i++;
                j--;
                
            }
              else {
                    j--;
                   }
                   cnt++;
        }
        return cnt;
    }
}
