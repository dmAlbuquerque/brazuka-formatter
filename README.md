# Funções Úteis para formatação BRASIL

## Instalando
```shell
npm i brazuka-formatter
```

## Utilizando
```js
const {formatCEP, formatMoney} = require('brazuka-formatter')
```

#### formatCEP(value): 
Essa função irá formatar um CEP - O value pode ser do tipo int ou string

```js
//Exemplo da formatação de CEP
const {formatCEP} = require('brazuka-formatter')

console.log(formatCEP("12345678"))

//Resultado
12345-678
```

#### formatMoney(value, symbol):
Essa função irá formatar o dinheiro para o padrão Brasileiro, podendo retornar com o símbolo R$ ou não atráves de true ou false.  

```js
//Exemplo da formatação de Dinheiro
const {formatMoney} = require('brazuka-formatter')

//Exemplo 1 - Com o Simbolo R$
console.log(formatMoney(1958.66, true))

//Resultado 1
R$ 1.958,66

//------------------------

//Exemplo 2 - Sem o Simbolo R$
console.log(formatMoney(1958.66))

//Resultado 2
1.958,66
```

### Em breve
Em breve será adicionado novas funções para complementar o pacote:
- Formatação de CPF 
- Formatação de CNPJ
- Formatação de Data