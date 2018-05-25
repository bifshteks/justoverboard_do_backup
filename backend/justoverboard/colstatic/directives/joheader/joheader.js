// module.exports = function(ngModule){
// 	ngModule.directive('joheader', joheaderFn)

// 	function joheaderFn(){
// 		return {
// 			restrict: 'EA',
// 			templateUrl: 'directives/joheader/joheader.template.html'
// 		}
// 	}
// }

class JoheaderDirective {
    constructor() {
        this.restrict = 'EA'
        this.templateUrl = 'directives/joheader/joheader.template.html'
        this.scope = {}
    }

    controller() {
        
    }
}

export default JoheaderDirective