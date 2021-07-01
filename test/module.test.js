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
const inscricaoEstadual = require('../lib/inscricaoEstadual');
const cns = require('../lib/cns');
const renavam = require('../lib/renavam');
const processosJudiciais = require('../lib/processosJudiciais');

console.log({
    Tests: {
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
            cpf_formatted: cpf("09856474125"),
            cpf_error: cpf("0856474125")
        },
        cnpj: {
            cnpj_formatted: cnpj("98745214000185"),
            cnpj_error: cnpj("9874521400018")
        },
        pispasep: {
            pispasep_formatted: pispasep("25865230214"),
            pispasep_error: pispasep("2586523214")
        },
        telefone: {
            telefone_formatted: telefone("88910236589"),
            telefone_error: telefone("8891023659")
        },
        inscricaoEstadual: {
            inscricaoEstadual_formatted: inscricaoEstadual("119022490114"),
            inscricaoEstadual_error: inscricaoEstadual("11022490114")
        },
        cns: {
            cns_formatted: cns("119022449021144"),
            cns_error: cns("11902244021144")
        },
        renavam: {
            renavam_formatted: renavam("41854498526"),
            renavam_error: renavam("4185448526")
        },
        processos_judiciais: {
            processosJudiciais_formatted: processosJudiciais("00420226820217221520"),
            processosJudiciais_error: processosJudiciais("004202268202172215")
        }

    }
})
