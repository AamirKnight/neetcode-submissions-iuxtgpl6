class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
       
    let stack = [];

    for (let op of operations) {
        if (op === '+') {
            let last = stack[stack.length - 1];
            let secondLast = stack[stack.length - 2];
            stack.push(last + secondLast);
        } 
        else if (op === 'D') {
            stack.push(2 * stack[stack.length - 1]);
        } 
        else if (op === 'C') {
            stack.pop();
        } 
        else {
            stack.push(Number(op)); // convert string to number
        }
    }

    return stack.reduce((sum, val) => sum + val, 0);

    }
}
