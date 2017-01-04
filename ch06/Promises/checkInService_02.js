
var Conference = Conference || {};
Conference.checkInService = function(checkInRecorder) {
	'use strict';

	// 주입한 checkInRecorder의 참조값을 보관한다.
	var recorder = checkInRecorder;

	return{
		checkIn : function(attendee){
			attendee.checkIn();
			return recorder.recordCheckIn(attendee).then(
				function onRecordCheckInSucceeded(checkInNumber){
					attendee.setCheckInNumber(checkInNumber);
					return Promise.resolve(checkInNumber);
				},
				function onRecordCheckInFailed(reason){
					attendee.undoCheckIn();
					return Promise.reject(reason);
				}
			);
		}
	};
};