/**
 * https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/
 * 2545. Sort the Students by Their Kth Score
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    return score.sort((a,b) => b[k]-a[k])
};