# Documento de requisitos

# Definição de conceitos

**Processo:** Conjunto de atos e documentos que constituem a tramitação de um caso judicial.

**Prescrição:** Período após o qual um processo judicial perde seu efeito legal, impedindo a continuidade ou execução do mesmo.

**Executado:** Parte devedora em um processo judicial que está sujeita a uma execução para cumprir com suas obrigações.

**Movimentação:** Registro de atividades ou eventos que ocorrem durante a tramitação de um processo judicial.

**Data de distribuição:** Data em que o processo foi oficialmente registrado no sistema judicial.

**Data de prescrição:** Data limite após a qual o processo é considerado prescrito e não pode mais ser executado. Calculada com base nos registros de movimentações do processo.

**Status do processo:** Estado atual de um processo judicial, indicando se está “Em execução”, “Prestes a prescrever”, “Prescrito reconhecido”, “Prescrito não reconhecido” ou “Arquivado”.

# Requisitos Funcionais

## Pesquisa de processos, e reconhecimento de prescrição:

- RF1 - O sistema deve permitir a listagem de todos os processos cadastrados no sistema. As informações de número de processo, status do processo, nome do(s) executado(s), data de distribuição e data de prescrição devem ser apresentadas, para cada processo.
- RF2 - O sistema deve permitir a aplicação de ordenação por data de prescrição (de forma crescente ou decrescente) na listagem dos processos cadastrados no sistema.
- RF3 - O sistema deve permitir a aplicação de filtro na listagem de processos cadastrados no sistema, de forma que apenas processos prestes a prescrever - ou seja, apenas aqueles processos que ainda não foram prescritos, mas serão prescritos em até 30 dias - sejam apresentados.
- RF4 -O sistema deve permitir a aplicação de filtro na listagem de processos cadastrados no sistema, de forma que apenas processos prescritos - ou seja, apenas os processos cuja a data de prescrição é menor que a data atual - sejam apresentados.
- RF5 - O sistema deve permitir a visão detalhada de informações de um processo, sendo essas informações: número do processo, status do processo, nome do(s) executado(s), data de distribuição, data de prescrição, valor da dívida, movimentações do processo e nome do Juiz.
- RF6 - O sistema deve permitir a listagem de movimentações de um processo, ordenados cronologicamente, com as informações de data da movimentação, tipo de movimentação e descrição da movimentação [opcional].
- RF7 - O sistema deve permitir o reconhecimento (acusamento) da data de prescrição de um processo. Ao ser realizado o reconhecimento, o sistema deve gerar e apresentar um texto padrão de reconhecimento, a fim de permitir que o usuário utilize o texto.
- RF8 - O sistema deve permitir a confirmação do reconhecimento da data de prescrição. Após requisitado reconhecimento da data de prescrição, e apresentado texto padrão gerado pelo sistema, o sistema deve permitir ao usuário que confirme o reconhecimento realizado sobre a data de prescrição de um processo.
- RF9 - O sistema deve permitir o cálculo da data de prescrição de um processo, com base nas movimentações ligadas ao mesmo. A data de prescrição deve ser calculada como resultado da soma de cinco anos à data da última movimentação do processo - ou seja, caso a última data de movimentação de um determinado processo seja 01/08/2019, a data de prescrição do processo deve ser 01/08/2024.

## Autenticação e autorização de usuário

- RF10 - O sistema deve permitir que o usuário realize sua autenticação no sistema utilizando um nome de usuário e senha como credenciais.
- RF11 - O sistema deve permitir que, uma vez autenticado, o usuário acesse as funcionalidades de **pesquisa de processos, e reconhecimento de prescrição**. Caso não esteja autenticado, o usuário não deve ser autorizado a acessar as funcionalidades, ou visualizar qualquer informação de processos.
- RF12 - O sistema deve permitir que o usuário se desautentique do sistema, de forma que o mesmo precise realizar novamente sua autenticação, por meio de suas credenciais, para acessar as funcionalidades do sistema.