const br = require('../lib/pispasep');
test('PISPASEP formatado', () => {
    expect(br("12323129491")).toBe("123.23129.49-1");
});