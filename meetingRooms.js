// Given an array of meeting time intervals consisting of start and end
// times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */

 //sample input [{start:0,end:30},{start:5,end:10},{start:15,end:20}]
var canAttendMeetings = function(intervals) {
 
    if(!intervals[0]){
        return true
    }
    intervals.sort(function(a,b){
        if(a.start>b.start){
            return 1
        }else{
            return -1
        }
    })
    for(var i=1; i<intervals.length; i++){
        if(intervals[i].start<intervals[i-1].end){
            
            return false
        }
    }
    return true
    
};