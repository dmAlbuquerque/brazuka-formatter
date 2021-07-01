# Funções para formatação de Documentos no padrão BRASILEIRO

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Sobre o projeto
O objetivo do projeto é facilitar a vida dos Devs fornecendo uma biblioteca completa de formatação de documentos no padrão Brasileiro.

Confira abaixo as funções disponíveis para formatação.

<br>

## Instalando

<br>

```shell
npm i brazuka-formatter
```
ou

```shell
yarn add brazuka-formatter
```
<br>

## Importando

<br>

### Exemplo 1 de importação
- Você pode utilizar uma variável para ter acesso a todas funções, como o exemplo abaixo:
```js
//importando
var brazuka = require('brazuka-formatter')

//Exemplo de utilização de uma função
brazuka.formatCep("12345678")
```

### Exemplo 2 de importação
- Você pode setar apenas as funções que deseja utilizar, como o exemplo abaixo:
```js
//Importando apenas duas funções
const {formatCep, formatCpf} = require('brazuka-formatter')

//Exemplo de utilização de uma função
formatCep("12345678")
```

<br>

# Utilização dos Métodos

<br>

## formatMoney( value, symbol ):
Essa função irá formatar o dinheiro para o padrão Brasileiro, podendo retornar com o símbolo "R$" (através do parâmetro symbol). 
- O parâmetro symbol (opcional), pode ser passado como true ou false. Por padrão é false 

```js
//Exemplo da formatação de Dinheiro
const {formatMoney} = require('brazuka-formatter')

//Exemplo 1 - Com o Simbolo R$
formatMoney(1958.66, true) //result -> R$ 1.958,66

//Exemplo 2 - Sem o Simbolo R$
formatMoney(1958.66) // result -> 1.958,66
```

<br>

## formatCep( value ): 
Essa função vai retornar o CEP no formato 12345-678 
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CEP
const {formatCep} = require('brazuka-formatter')

formatCep("12345678") // result -> 12345-678
```

<br>

## formatCpf( value ): 
Essa função vai retornar o CPF no formato 123.456.789-09 
- O parâmetro value deve ser do tipo string


```js
//Exemplo da formatação de CPF
const {formatCpf} = require('brazuka-formatter')

formatCpf("1234567809") // result -> 123.456.789-09 

```

<br>

## formatCnpj( value ): 
Essa função vai retornar o CNPJ no formato 12.345.678/0001-09
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CNPJ
const {formatCnpj} = require('brazuka-formatter')

formatCnpj("12345678000109") // result -> 12.345.678/0001-09
```

<br>

## formatPisPasep( value ): 
Essa função vai retornar o PIS/PASEP no formato 123.23129.49-1
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de PIS/PASEP
const {formatPisPasep} = require('brazuka-formatter')

formatPisPasep("12323129491") // result -> 123.23129.49-1
```

<br>

## formatTelefone( value ): 
Essa função vai retornar o Telefone no formato (88) 9 1234-4321
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de Telefone
const {formatTelefone} = require('brazuka-formatter')

formatTelefone("88912344321") // result -> (88) 9 1234-4321
```

<br>

## formatInscricaoEstadual( value ): 
Essa função vai retornar a Inscrição Estadual no formato 119.022.490.114
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação da Inscrição Estadual
const {formatInscricaoEstadual} = require('brazuka-formatter')

formatInscricaoEstadual("119022490114") // result -> 119.022.490.114
```

<br>

## formatCns( value ): 
Essa função vai retornar a CNS (Carteira Nacional de Saúde - SUS) no formato 119 0224 4902 1144
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação da CNS
const {formatCns} = require('brazuka-formatter')

formatCns("119022449021144") // result -> 119 0224 4902 1144
```

<br>

## formatRenavam( value ): 
Essa função vai retornar o Renavam no formato 119 0224 4902 1144
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de Renavam
const {formatRenavam} = require('brazuka-formatter')

formatRenavam("41854498526") // result -> 4185.449852-6
```
<br>

## formatProcessosJudiciais( value ): 
Essa função vai retornar o Processo Judicial no formato 0042022.68.2021.7.22.1520
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de Processos Judiciais
const {formatProcessosJudiciais} = require('brazuka-formatter')

formatProcessosJudiciais("00420226820217221520") // result -> 0042022.68.2021.7.22.1520
```

<br>

## 🛠️ Em breve 🛠️
Em breve será adicionado novas funções para complementar o pacote:
- Data
- Outros documentos Brasileiros

<br>

## 🚀 Contribuição
As contribuições tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito bem-vinda**.

<br>

## ✔️ License
Distribuido sob a licença [MIT](LICENSE). © Daniel Albuquerque
