const br = require('../lib/telefone');
test('Telefone formatado', () => {
    expect(br("88912344321")).toBe("(88) 9 1234-4321");
});