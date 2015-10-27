angular.module('curd.services', [])
.factory('UserService', function() {
	var users=[
		{"id":"1",
		"name":"liu",
		"sex":"male",
		"location":"101070201",
		"hobby":[{"name":"game"},{"name":"football"},{"name":"travel"},{"name":"muzzy"}]},
		{"id":"2",
		"name":"zhang",
		"sex":"female",
		"location":"101020100",
		"hobby":[{"name":"travel"}]},
		{"id":"3",
		"name":"li",
		"sex":"male",
		"location":"101040100",
		"hobby":[{"name":"football"}]},
	]
	var service = {
		restore:function(){
			users=angular.fromJson(sessionStorage.AllUsers) || users
			return users;
		},
		save: function(user) {
			users.push(user);
			sessionStorage.AllUsers=angular.toJson(users);
		},
		update:function(obj){
			var id=obj.id;
			for (var i = 0; i < users.length; i++) {
		        if (users[i].id === id) {
		            users.splice(users.indexOf(users[i]), 1);
		            break;
		        }
		    }
		   users.push(obj);
		   sessionStorage.AllUsers=angular.toJson(users);
		},
		remove:function(user){
			 users.splice(users.indexOf(user), 1);
			 sessionStorage.AllUsers=angular.toJson(users);

		},
		getAll:function(){
			return users;
		},
		getById:function(id){
			for (var i = 0; i < users.length; i++) {
		        if (users[i].id === id) {
		          return users[i];
		        }
		    }
		   	return null;
		}
	};
	return service;
})
.factory('LocationService', function () {
	var locationVal = [{
		"name": "北京",
		"value": "101010100"
	}, {
		"name": "上海",
		"value": "101020100"
	}, {
		"name": "广州",
		"value": "101280101"
	}, {
		"name": "武汉",
		"value": "101200101"
	}, {
		"name": "南京",
		"value": "101190101"
	}, {
		"name": "重庆",
		"value": "101040100"
	}, {
		"name": "大连",
		"value": "101070201"
	}]
	var service = {
		getAll:function(){
			return locationVal;
		}
	};
	return service;
})