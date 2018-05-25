// module.exports = function(ngModule){
// 	ngModule.directive('jofooter', jofooterFn)

// 	function jofooterFn(){
// 		return {
// 			restrict: 'EA',
// 			templateUrl: 'directives/jofooter/jofooter.template.html'
// 		}
// 	}
// }

class JofooterDirective {
    constructor() {
        this.restrict = 'EA'
        this.templateUrl = 'directives/jofooter/jofooter.template.html'
        this.scope = {}
    }

    controller() {
        
    }
}

export default JofooterDirective