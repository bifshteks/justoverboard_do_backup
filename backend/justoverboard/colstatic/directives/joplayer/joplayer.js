// module.exports = function(ngModule){
// 	ngModule.directive('joplayer', joplayerFn)

// 	function joplayerFn(){
// 		return {
// 			restrict: 'EA',
// 			templateUrl: 'directives/joplayer/joplayer.template.html'
// 		}
// 	}
// }

class PlayerDirective {
	constructor() {
		this.restrict = 'EA'
		this.templateUrl = 'directives/joplayer/joplayer.template.html'
		this.scope = {
		}
	}

	controller($scope) {
		$scope.repeatToggle = function(){
			const toggle = angular.element(document.querySelector(".glyphicon-repeat"));
			// console.log(toggle, 'qweqweqweqwe', toggle.css('color'))

			if (toggle.css('color') == 'rgb(255, 255, 255)'){
				console.log('white to black')
				toggle.css('color', 'black')
			} else {
				console.log('black to white')
				toggle.css('color','white')
			}
		
		}


		$scope.isMuted =  false;
		$scope.volumeToggle = 'glyphicon glyphicon-volume-up';
		$scope.changeMute = function(){
			$scope.isMuted = !$scope.isMuted;
			$scope.volumeToggle = $scope.isMuted ? 'glyphicon glyphicon-volume-off' : 'glyphicon glyphicon-volume-up'
			// console.log('ch', $scope.volumeToggle)
		}

		// $scope.volumeToggle = function(){
		// 	const toggle = angular.element(document.querySelector(".glyphicon-volume-up"));
		// 	// console.log('mute ',toggle)

		// 	// toggle.childen()[0].toggleClass('glyphicon glyphicon-volume-off')
		// 	// const toggleSpan = toggle.children()[0];
		// 	if (toggle.hasClass('glyphicon-volume-up')) {
		// 		toggle.toggleClass('glyphicon glyphicon-volume-off')
		// 	} else {
		// 		toggle.toggleClass('glyphicon glyphicon-volume-up')
		// 	}
		// }


	}

}

export default PlayerDirective