# Rotas da API

Esse documento reúne o conjunto de definições de rotas planejadas para a API RESTfull que será oferecida pelo server side, de forma a disponibilizar os dados para o client side.

Abaixo serão encontradas as rotas, os métodos HTTP 2.0 suportados por cada uma, uma breve descrição, especificações de ‘sub-rotas’, queryParams, header content ou body content(POST), e se a rota pode ser acessada ou não por um cliente não autorizado.

## /processo/[id]

**Métodos HTTP**: GET

**Autorização**: Obrigatória

### Path Params:

- id - opcional, referente ao id do processo

### Header content:

- Authorization - Token autorização

### Query Params:

- ordenacaoDataPrescricao - opcional, pode ser “ASC“ ou “DESC”, referente a ordenação por data de prescricao.
- statusProcesso - opcional, pode ser “A_PRESCREVER” ou “PRESCRITO”, referente ao status atual do processo.
- numeroProcesso - opcional, refere-se ao número do processo
- dataInicialPrescricao - opcional, refere-se a uma data de início de intervalo de prescrição
- dataFinalPrescricao - opcional, refere-se a uma data de fim de intervalo de prescrição

## /login [Não implementado]

**Métodos HTTP**: POST

**Autorização**: Não obrigatória

### Body content:

- username - obrigatótio, Usuário (parte da credencial)
- password - obrigatório, Senha (parte da credencial)