const money = require('./lib/money');
const cep = require('./lib/cep');
const cpf = require('./lib/cpf');
const cnpj = require('./lib/cnpj');
const pispasep = require('./lib/pispasep');
const telefone = require('./lib/telefone');

test('Dinheiro com simbolo', () => {
    expect(money(1489.98, true)).toBe("R$ 1.489,98");
    expect(money(1489.98)).toBe("1.489,98");
    expect(cep("62340000")).toBe("62340-000");
    expect(cpf("1234567809")).toBe("123.456.789-09");
    expect(cnpj("12345678000109")).toBe("12.345.678/0001-09");
    expect(pispasep("12323129491")).toBe("123.23129.49-1");
    expect(telefone("88912345689")).toBe("(88) 9 1234-5689");
});

