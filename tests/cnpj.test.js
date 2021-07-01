const br = require('../lib/cnpj');
test('CNPJ formatado', () => {
    expect(br("12345678000109")).toBe("12.345.678/0001-09");
});