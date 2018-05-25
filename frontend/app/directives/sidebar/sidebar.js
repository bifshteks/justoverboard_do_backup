// module.exports = function(ngModule){
// 	ngModule.directive('sidebar', sidebarFn)

// 	function sidebarFn(){
// 		return {
// 			restrict: 'EA',
// 			templateUrl: 'directives/sidebar/sidebar.template.html'
// 		}
// 	}
// }

class SidebarDirective {
    constructor() {
        this.restrict = 'EA'
        this.templateUrl = 'directives/sidebar/sidebar.template.html'
        this.scope = {}
    }

    controller() {
        
    }
}

export default SidebarDirective