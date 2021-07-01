/* 
Para executar o teste basta executar no terminal o comando:
npx run ./test/module.test.js
*/

const money = require('../lib/money');
const cep = require('../lib/cep');
const cpf = require('../lib/cpf');
const cnpj = require('../lib/cnpj');
const pispasep = require('../lib/pispasep');
const telefone = require('../lib/telefone');

console.log({
    My_Tests: {
        money: {
            moneyWithSymbol: money(1250.55, true),
            moneyWithoutSymbol: money(1250.55),
            money_error: money("1250.55")
        },
        cep: {
            cep_formatted: cep("95427458"),
            cep_error: cep("36549")
        },
        cpf: {
            cpf_formatted: cpf("09856474125")
        },
        cnpj: {
            cnpj_formatted: cnpj("98745214000185")
        },
        pispasep: {
            pispasep_formatted: pispasep("25865230214")
        },
        telefone: {
            telefone_formatted: telefone("88910236589")
        }
    }
})
