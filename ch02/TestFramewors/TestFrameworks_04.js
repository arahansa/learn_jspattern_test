function createReservation(passenger, flight, saver){
	var reservation = {
		passengerInformation : passenger,
		fligtInformation: flight
	}
	saver.saveReservation(reservation);
	return reservation;
}

// 샬럿이 작성한 ReservationSaver
function ReservationSaver(){
	this.saveReservation = function(reservation){
		// 예약정보를 저장하는 웹 서비스와 연동하는 복잡한 코드가 들어있을 것이다.
	}
}
