
angular.module('curd.directive', [])
.directive('setCheckBoxVal', function() {
  return {
    link: function(scope, element, attrs, controller) {

    	angular.forEach(scope.user.hobby,function(n,i){
    			if(n.name==attrs.value){
    				element.attr("checked","checked");
    			}
    	});	
    }
  };
})
