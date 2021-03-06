Attendee = function(attendeeId){

	// 'new'로 생성하도록 강제한다. 
	if(!(this instanceof Attendee)){
		return new Attendee(attendeeId);
	}

	this.attendeeId = attendeeId;

	this.service = new ConferenceWebSvc();
	this.messanger = new Messanger();
};

// 주어진 세션에 좌석 예약을 시도한다. 
// 성공/실패 여9부를 메시지로 알려준다. 

Attendee.prototype.reserve = function(sessionId){
	if(this.service.reserve(this.attendeeId, sessionId)){
		this.messanger.success('좌석 예약이 완료되었습니다! 고객님은 '+this.service.getRemainingReservations()+ ' 좌석을 추가 예약하실 수있습니다.');
	}else{
		this.messanger.failure('죄송합니다. 해당 좌석은 예약하실 수 없습니다');
	}
}