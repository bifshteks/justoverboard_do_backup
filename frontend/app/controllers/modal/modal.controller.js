class ModalController {
	constructor($uibModalInstance, $window, trackName, trackID) {
		this.qwe = 'qwe';
		this.trackName = trackName;


		// Только так можно передать в метод обьекта параметр?
		this.ok =() =>  this.closeFn($uibModalInstance);
		this.close = () => this.dismissFn($uibModalInstance);
		this.addToCart = (option) => this.addToCartFn($window, trackID, option);
	}

	closeFn($uibModalInstance){
		$uibModalInstance.close()
	}

	dismissFn($uibModalInstance){
		$uibModalInstance.dismiss()
	}

	////
	//
	////

	addToCartFn($window, trackID, option){
		console.log('add is clicked')
		var ls = $window.localStorage;


		if (ls.getItem('chosen_items') === null) {
			var chosen = []
		} else {
			var chosen = JSON.parse(ls['chosen_items'])
		}



		chosen.push({id:trackID, option:option})
		ls.setItem('chosen_items', JSON.stringify(chosen))
		console.log('lsssss', ls)


	}
}






export default ModalController