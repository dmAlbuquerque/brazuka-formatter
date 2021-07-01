const br = require('../lib/money');
test('Moeda formatada', () => {
    expect(br(1235.94, true)).toBe('R$ 1.235,94')
    expect(br(1235.94)).toBe('1.235,94')
});