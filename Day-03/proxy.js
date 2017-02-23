'use strict';

/** Oauth service
*/
class Oauth {
	authenticate(userName, pass) {
		let _dbClient = {
			'jhone123': {
				id:'4563X8',
				pass: '456',
				name: 'Jhone'
			},
			'sam333': {
				id:'123X9',
				pass: '123',
				name: 'Samuel'	
			}
		};
		return _dbClient.hasOwnProperty(userName) && _dbClient[userName].pass == pass 
	}
}

class iciciBank extends Oauth {

	constructor(userName, pass) {
		super();

		// Do not assign _proxy to this context bcz user can exploit the data by creating an instance of class
		// this._proxy = this.getProxyService(...arguments);
	}

	getAccountInfo(userName, pass) {
		return this.getProxyService(...arguments)[userName];
	}

	updateAccountInfo(userName, pass, prop, value) {
		this.getProxyService(...arguments)[userName][prop] = value;
	}

	getProxyService(userName, pass) {
		let _db ={
			'jhone123' : {
				Acc_Balance: '$676835.86'
			},
			'sam333' : {
				Acc_Balance: '$74093.86'
			}
		};

		function getHandler() {

			return {
				 get: (target, key, context) => {
				 	if(this.authenticate(userName, pass))
			            return target[key];
			        else 
			        	return 'Access Denied !!!'
		        },
		        set: (target, key, value) => {
		        	if(this.authenticate(userName, pass))
			            return target[key] = value;
			        else 
			        	return 'Access Denied !!!'
		        }    
		    }
		}

		return new Proxy(_db, getHandler.call(this));
	}

}
