# Funções Úteis para formatação no padrão BRASILEIRO

## Instalando
```shell
npm i brazuka-formatter
```
ou
```shell
yarn add brazuka-formatter
```

## Utilizando
```js
const {formatCEP, formatMoney, formatCpf, formatCnpj, formatPisPasep} = require('brazuka-formatter')
```

#### formatMoney(value, symbol):
Essa função irá formatar o dinheiro para o padrão Brasileiro, podendo retornar com o símbolo "R$" (através do parâmetro symbol). 
- O parâmetro symbol (opcional), pode ser passado como true ou false. Por padrão é false 

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

#### formatCep(value): 
Essa função vai retornar o CEP no formato 12345-678 
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CEP
const {formatCep} = require('brazuka-formatter')

console.log(formatCep("12345678"))

//Resultado
12345-678
```

#### formatCpf(value): 
Essa Essa função vai retornar o CPF no formato 123.456.789-09 
- O parâmetro value deve ser do tipo string


```js
//Exemplo da formatação de CPF
const {formatCpf} = require('brazuka-formatter')

console.log(formatCpf("1234567809"))

//Resultado
123.456.789-09
```

#### formatCnpj(value): 
Essa função vai retornar o CNPJ no formato 12.345.678/0001-09
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CNPJ
const {formatCnpj} = require('brazuka-formatter')

console.log(formatCnpj("12345678000109"))

//Resultado
12.345.678/0001-09
```





#### formatPisPasep(value): 
Essa função vai retornar o PIS/PASEP no formato 123.23129.49-1
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CNPJ
const {formatPisPasep} = require('brazuka-formatter')

console.log(formatPisPasep("12323129491"))

//Resultado
123.23129.49-1
```


### Em breve
Em breve será adicionado novas funções para complementar o pacote:
- Data
- Outros documentos Brasileiros
