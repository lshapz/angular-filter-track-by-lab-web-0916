var path = require('path');

describe('Events Test', function() {
	browser.get('http://localhost:8080');

	var list = element.all(by.css('li'));
	var input = element(by.css('input'));

	it('should have 4 items on load', function() {
		expect(list.count()).toEqual(4);
	});

	it('should filter on the search term', function() {
		input.click();
		input.sendKeys('Bill');
		
		expect(list.count()).toEqual(1);
	});
});
