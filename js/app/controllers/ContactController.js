function ContactController($filter) {
	this.contacts = [{
		name: 'Bill Gates',
		email: 'bill@microsoft.com',
		phone: '01234567890',
		username: 'b1lLG4Tes'
	},{
		name: 'Steve Jobs',
		email: 'steve@apple.com',
		phone: '12345678910',
		username: 'steveJOBS!!!!!!'
	},{
		name: 'Joe Bloggs',
		email: 'joe@bloggs.com',
		phone: '13092019340',
		username: 'jb'
	},{
		name: 'President Obama',
		email: 'president@whitehouse.com',
		phone: '75934988239',
		username: 'obama44'
	}];

	this.search = '';

	this.refilter = function () {
		this.filteredList = $filter('filter')(this.contacts, this.search);
	};

	this.refilter();
}

angular
	.module('app')
	.controller('ContactController', ContactController);
