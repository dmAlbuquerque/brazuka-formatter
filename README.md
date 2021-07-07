# Funções para formatação de Documentos no padrão BRASILEIRO

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
![Issues](https://img.shields.io/github/issues/dmAlbuquerque/brazuka-formatter)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![Open Source Love png3](https://badges.frapsoft.com/os/v3/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Sobre o projeto
O objetivo do projeto é facilitar a vida dos Devs fornecendo uma biblioteca completa de formatação de documentos no padrão Brasileiro.

Confira abaixo a **Documentação** completa de como **_instalar_**, **_importar_** e **_utilizar_** as funções disponíveis para formatação.

<br>

# Instalando

```shell
npm i brazuka-formatter
```
ou

```shell
yarn add brazuka-formatter
```
<br>

# Importando


### Exemplo 1 de importação
- Você pode utilizar uma variável para ter acesso a todas as funções, como o exemplo abaixo:
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

## formatHtmlToZap( value ):
Essa função vai retornar o texto com tags html convertido para tags do WhatsApp
- O parâmetro value deve ser do tipo string 

<br>

### Conversões de tags disponíveis
- Negrito: < b > ou < strong > para *
- Itálico: < i > para _
- Sublinhado: < u > para ~
- Monoespaçados: < tt > para ```

```js
const {formatHtmlToZap} = require('brazuka-formatter')

var message = "<i>Eu amo </i><b>Café</b>"
formatHtmlToZap( message ) 
//results _Eu amo_ *Café*
```

<br>

## formatReplace( value, search, replace ):
Essa função vai retornar o texto com a nova substituição de caracteres de acordo com os parâmetros passados.
- O parâmetro value deve ser do tipo string 
- O parâmetro search pode ser do tipo string ou array
- O parâmetro replace pode ser do tipo string ou array

<blockquote><b>Obs.:</b> Caso deseje passar o parâmetro <i>search</i> e <i>replace</i> como array, os dois parâmetros devem possuir a mesma quantidade de elementos.</blockquote>

<br>

### Substituição Simples
```js
const {formatReplace} = require('brazuka-formatter')

var message = "Meu nome é João" //mensagem
var search  = "João" //valor a ser procurado
var replace = "Daniel" //novo valor que vai substituir o 'search'
formatReplace( message, search, replace ) 
//results Meu nome é Daniel
```

<br>

### Substituição Multipla
```js
const {formatReplace} = require('brazuka-formatter')

var message = "João, Maria e José são programadores e amam chocolate" //mensagem
var search  = ["João", "Maria", "José", "chocolate"] //valor a ser procurado
var replace = ["Daniel", "Macley", "Fernando", "café"] //novo valor que vai substituir o 'search'
formatReplace( message, search, replace ) 
//results Daniel, Macley e Fernando são programadores e amam café
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

