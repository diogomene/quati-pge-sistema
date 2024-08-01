# Documento de requisitos

# Definição de conceitos

**Processo:** Conjunto de atos e documentos que constituem a tramitação de um caso judicial.

**Prescrição:** Período após o qual um processo judicial perde seu efeito legal, impedindo a continuidade ou execução do mesmo.

**Executado:** Parte devedora em um processo judicial que está sujeita a uma execução para cumprir com suas obrigações. Pode haver mais de uma por processo.

**Movimentação:** Registro de atividades ou eventos que ocorrem durante a tramitação de um processo judicial. Pode, ou não, ser causado por um usuário. A prescrição por reconhecimento, por exemplo, pode ser considerado como evento causado por um usuário. 

**Data de distribuição:** Data em que o processo foi oficialmente registrado no sistema judicial.

**Data de prescrição:** Data limite após a qual o processo é considerado prescrito e não pode mais ser executado. Calculada com base nos registros de movimentações do processo.

**Status do processo:** Estado atual de um processo judicial, indicando se está “Em execução” - não prescrito nem prestes a prescrever - , “Prestes a prescrever”, “Prescrito reconhecido” - foi prescrito devido a reconhecimento por parte da PGE (Procuradoria Geral do Estado), “Prescrito não reconhecido” - prescrito sem ter ocorrido o reconhecimento (é a situação que se busca evitar com o sistema realizado).

# Requisitos Funcionais

## Pesquisa de processos, e reconhecimento de prescrição:

- RF1 - O sistema deve permitir a listagem de todos os processos cadastrados no sistema. As informações de número de processo, status do processo, nome do(s) executado(s), data de distribuição e data de prescrição devem ser apresentadas, para cada processo.
- RF2 - O sistema deve permitir a aplicação de ordenação por data de prescrição (de forma crescente ou decrescente) na listagem dos processos cadastrados no sistema.
- RF3 -O sistema deve permitir a aplicação de filtro na listagem de processos cadastrados no sistema, de forma que sejam apresentados apenas processos que possuam o status selecionado. O sistema deve suportar a seleção múltipla de status de processo, de forma que apenas processos cujo status esteja presente entre os selecionados, seja visível.
- RF4 - O sistema deve permitir a pesquisa de processos por número do processo. Ou seja, apenas processos com número igual ao selecionado, devem ser apresentados.
- RF5 - O sistema deve permitir a aplicação de filtro na listagem de processos cadastrados no sistema, de forma que sejam selecionadas uma data inicial de prescrição, ou uma data final de prescrição. Caso apenas a data inicial seja selecionada, apenas processos cujo a data de prescrição seja maior ou igual a data selecionada devem ser apresentados; caso apenas a data final seja selecionada, apenas processos cujo a data seja menor ou igual à selecionada devem ser apresentados; caso uma data Inicial e uma data final sejam selecionadas, apenas processos cujo a data de prescrição esteja no intervalo selecionado (incluindo as datas final e inicial) devem ser apresentados.
- RF6 - O sistema deve permitir a visão detalhada de informações de um processo, sendo essas informações: número do processo, status do processo, nome do(s) executado(s), data de distribuição, data de prescrição, valor da dívida, movimentações do processo e nome do Juiz.
- RF7 - O sistema deve permitir a listagem de movimentações de um processo, ordenados cronologicamente, com as informações de data da movimentação, tipo de movimentação e descrição da movimentação [opcional].
- RF8 - O sistema deve permitir o reconhecimento (acusamento) da data de prescrição de um processo. Ao ser realizado o reconhecimento, o sistema deve gerar e apresentar um texto padrão de reconhecimento, a fim de permitir que o usuário utilize o texto.
- RF9 - O sistema deve permitir a confirmação do reconhecimento da data de prescrição. Após requisitado reconhecimento da data de prescrição, e apresentado texto padrão gerado pelo sistema, o sistema deve permitir ao usuário que confirme o reconhecimento realizado sobre a data de prescrição de um processo **[Não implementado, devido a utilização de Mocks]**.
- RF10 - O sistema deve permitir o cálculo da data de prescrição de um processo, com base nas movimentações ligadas ao mesmo. A data de prescrição deve ser calculada como resultado da soma de cinco anos à data da última movimentação do processo - ou seja, caso a última data de movimentação de um determinado processo seja 01/08/2019, a data de prescrição do processo deve ser 01/08/2024 **[Não implementado, devido a utilização de Mocks]**.

## Autenticação e autorização de usuário **[Não implementado]**

- RF11 - O sistema deve permitir que o usuário realize sua autenticação no sistema utilizando um nome de usuário e senha como credenciais.
- RF12 - O sistema deve permitir que, uma vez autenticado, o usuário acesse as funcionalidades de **pesquisa de processos, e reconhecimento de prescrição**. Caso não esteja autenticado, o usuário não deve ser autorizado a acessar as funcionalidades, ou visualizar qualquer informação de processos.
- RF13 - O sistema deve permitir que o usuário se desautentique do sistema, de forma que o mesmo precise realizar novamente sua autenticação, por meio de suas credenciais, para acessar as funcionalidades do sistema.