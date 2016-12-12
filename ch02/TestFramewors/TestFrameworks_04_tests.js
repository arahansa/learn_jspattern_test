describe('createReservation(passenger, flight)', function(){
	var testPassenger = null, testFlight = null, testReservation = null, testSaver = null;

	beforeEach(function(){
		testPassenger = {
			firstName: "윤지", 
			lastName: "김"
		};

		testFlight = {
			number : '3443',
			carrier: '대한항공',
			destination: '울산'
		};

		testSaver = new ReservationSaver();
		spyOn(testSaver, 'saveReservation');
		testReservation  = createReservation(testPassenger, testFlight, testSaver);
	});

	it('passenger를 passengerInformation 프로퍼티에 할당한다', function(){
		expect(testReservation.passengerInformation).toBe(testPassenger);
	});

	it('fligt를 fligtInformation 프로퍼티에 할당한다', function(){
		expect(testReservation.fligtInformation).toBe(testFlight);	
	});

		
	
});