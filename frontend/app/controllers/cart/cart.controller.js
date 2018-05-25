class CartController {
	constructor($window){
		var ls = $window.localStorage;
		this.orderedTracks = ls.getItem('chosen_items') === null ? 
								false : JSON.parse(ls.getItem('chosen_items'));
		this.thereAreOrdered = Boolean(this.orderedTracks );
		console.log('constructor have started', this.orderedTracks, this.thereAreOrdered);
		
	}

}

export default CartController