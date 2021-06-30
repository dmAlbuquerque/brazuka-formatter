# Funções Úteis para formatação no padrão BRASILEIRO

## Instalando
```shell
npm i brazuka-formatter
```

## Utilizando
```js
const {formatCEP, formatMoney, formatCPF, formatCNPJ} = require('brazuka-formatter')
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

#### formatCEP(value): 
Essa função irá formatar um CEP - O value pode ser do tipo int ou string

```js
//Exemplo da formatação de CEP
const {formatCEP} = require('brazuka-formatter')

console.log(formatCEP("12345678"))

//Resultado
12345-678
```

#### formatCPF(value): 
Essa função irá formatar um CPF - O value deve ser do tipo string

```js
//Exemplo da formatação de CPF
const {formatCPF} = require('brazuka-formatter')

console.log(formatCPF("1234567809"))

//Resultado
123.456.789-09
```

#### formatCNPJ(value): 
Essa função irá formatar um CNPJ - O value deve ser do tipo string

```js
//Exemplo da formatação de CNPJ
const {formatCNPJ} = require('brazuka-formatter')

console.log(formatCNPJ("12345678000109"))

//Resultado
12.345.678/0001-09
```

### Em breve
Em breve será adicionado novas funções para complementar o pacote:
- Data      | 22/07/2025
