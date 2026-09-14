const reverseString = require('./app');

test('reverse a String', () => {
	expect(reverseString('hello')).toBe('olleh');
});
