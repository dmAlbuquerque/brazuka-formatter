const br = require('../lib/cep');
test('CEP formatado', () => {
    expect(br("62340000")).toBe("62340-000");
});