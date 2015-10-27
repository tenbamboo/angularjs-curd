angular.module('curd.filters', [])
.filter('formatLocation',function(LocationService){
	return function(text){
		var l=LocationService.getAll();
		for(var i=0;i<l.length;i++){
			if(l[i].value==text){
				return l[i].name;
			}
		}
		
	};
})
.filter('formatHobby',function(){
	return function(text){
		var str="";
		for(var i=0;i<text.length;i++){
			str+=text[i].name+",";
		}
		if(str!=null||str!=""){
			str=str.substring(0,str.length-1);
		}
		
		return str;
	};
})