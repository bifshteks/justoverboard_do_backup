

class CustomFilter {
	static sec2min (value) {

		function _isNumeric(n){
		    return !isNaN(parseFloat(n)) && isFinite(n)
		}


		if ( value && _isNumeric(value)){
			var sec = value % 60
			// console.log(sec)
			sec = sec === 0 ? sec + '0' : sec
			// console.log(sec) 
			var timeNormalDisplay = Math.floor(value / 60) + ':' + sec;

			return timeNormalDisplay
		}
	
	}
}

export default CustomFilter.sec2min;