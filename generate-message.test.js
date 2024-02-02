const { generateMessage } = require('./generate-message');

test('Generates the message correctly', () => {
    expect(generateMessage('John Wick')).toBe('Hello John Wick!');
});