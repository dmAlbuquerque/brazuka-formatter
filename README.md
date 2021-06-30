# Funções úteis para formatação no padrão BRASILEIRO

## Sobre o projeto
O objetivo do projeto é facilitar a vida dos Devs fornecendo uma biblioteca completa de formatação de documentos no padrão Brasileiro.

## Instalando
```shell
npm i brazuka-formatter
```
ou
```shell
yarn add brazuka-formatter
```

## Utilizando
#### Exemplo 1 de importação
- Você pode utilizar uma variável para ter acesso a todas funções, como o exemplo abaixo:
```js
//importando
var brazuka = require('brazuka-formatter')

//Exemplo de utilização de uma função
brazuka.formatCep("12345678")
```

#### Exemplo 2 de importação
- Você pode setar apenas as funções que deseja utilizar, como o exemplo abaixo:
```js
//Importando apenas duas funções
const {formatCep, formatCpf} = require('brazuka-formatter')

//Exemplo de utilização de uma função
formatCep("12345678")
```

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

## formatCep( value ): 
Essa função vai retornar o CEP no formato 12345-678 
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CEP
const {formatCep} = require('brazuka-formatter')

formatCep("12345678") // result -> 12345-678
```

## formatCpf( value ): 
Essa função vai retornar o CPF no formato 123.456.789-09 
- O parâmetro value deve ser do tipo string


```js
//Exemplo da formatação de CPF
const {formatCpf} = require('brazuka-formatter')

formatCpf("1234567809") // result -> 123.456.789-09 

```

## formatCnpj( value ): 
Essa função vai retornar o CNPJ no formato 12.345.678/0001-09
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de CNPJ
const {formatCnpj} = require('brazuka-formatter')

formatCnpj("12345678000109") // result -> 12.345.678/0001-09
```

## formatPisPasep( value ): 
Essa função vai retornar o PIS/PASEP no formato 123.23129.49-1
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de PIS/PASEP
const {formatPisPasep} = require('brazuka-formatter')

formatPisPasep("12323129491") // result -> 123.23129.49-1
```

## formatTelefone( value ): 
Essa função vai retornar o Telefone no formato (88) 9 1234-4321
- O parâmetro value deve ser do tipo string

```js
//Exemplo da formatação de Telefone
const {formatTelefone} = require('brazuka-formatter')

formatTelefone("88912344321") // result -> (88) 9 1234-4321
```

### Em breve
Em breve será adicionado novas funções para complementar o pacote:
- Data
- Outros documentos Brasileiros

## Contribuição
As contribuições tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito bem-vinda**.

## License
Distribuido sob a licença [MIT](LICENSE).
