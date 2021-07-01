const br = require('../lib/cpf');
test('CPF formatado', () => {
    expect(br("12345678909")).toBe("123.456.789-09");
});