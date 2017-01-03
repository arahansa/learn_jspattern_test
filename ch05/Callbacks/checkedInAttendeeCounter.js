

Conference.checkedInAttendeeCounter = function(){
	var checkedInAttendees = 0;
	var self = {
		increment:function(){
			checkedInAttendees++;
		},
		getCount: function(){
			return checkedInAttendees;
		},
		countIfCheckedIn : function(attendee){
			if(attendee.isCheckedIn()){
				this.increment();
			}
		}
	}
	return self;
}