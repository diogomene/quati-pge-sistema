# Modelo semântico de Commit

Este documento tem como objetivo descrever o modelo semântico de *commit* definido para o projeto.

O modelo escolhido tem como base as diretrizes de contribuição definidas no repositório remoto do framework Angular ([https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)) e pela “Conventional Commits” ([https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)), que é um conjunto de especificações para commits semânticos, que utiliza como base diversos projetos do GitHub - incluindo o do já referenciado framework Angular.

A partir das especificações abaixo, juga-se que será possível realizar um controle de versões e mudanças consistente, gerenciável e verificável. Além disso, deve permitir a fácil compreensão sobre os incrementos de códigos realizados ao longo do ciclo de vida da aplicação. No caso do projeto atual, embora o ciclo de vida seja curto, o valor de utilização de um modelo bem definido de commits será de extrema utilidade para acompanhar a evolução do projeto; assim como entender melhor os efeitos das decisões tomadas, em fase de **projeto** das funcionalidades, dentro do código, e outros itens de configuração.

## Modelo geral de mensagem do commit

A mensagem do commit deve possuir obrigatóriamente um tipo, seguido de um pequeno resumo do que o respectivo commit realiza, ao alterar os itens de configuração do repositório. 

O resumo deve ser sucinto, e estar utilizar verbos no presente do indicativo.

```jsx
<tipo>(<escopo>): <pequeno resumo>
  │       │             │
  │       │             └─⫸ Resumo com verbos no tempo presente. Sem maiúsculas. Sem ponto final
  │       │
  │       └─⫸ Escopo do Commit [opcional]: ui|networking|database|authentication|notifications|storage|
  │                                         utilities|testing|build-system|dependencies|api
  │
  └─⫸ Tipo de Commit: build|ci|docs|feat|fix|perf|refactor|test
```

## Tipos de commit

- **build**: Alterações que afetam o sistema de build ou dependências externas
- **ci**: Alterações nos arquivos e scripts de configuração de CI
- **docs**: Alterações apenas na documentação
- **feat**: Uma nova funcionalidade
- **fix**: Correção de um bug
- **perf**: Uma alteração no código que melhora o desempenho
- **refactor**: Uma alteração no código que não corrige um bug nem adiciona uma funcionalidade
- **test**: Adição de testes faltantes ou correção de testes existentes

**Exemplos:**

```jsx
feat: adiciona botão de login na tela principal

fix: corrige erro de timeout na requisição de login

perf: otimiza consultas SQL para melhorar desempenho

refactor: reorganiza métodos de autenticação para maior clareza

test: adiciona testes unitários para notificações push

build: atualiza configuração do Gradle para nova versão

docs: adiciona documentação sobre o pipeline de integração contínua

ci: atualiza dependências no arquivo build.gradle
```

## Relacionamento com Issues

Uma vez que todos os commits devem estar relacionados com alguma issue, previamente criada no repositório remoto, deve-se especificar sempre as issues resolvidas, através da mensagem do commit, seguindo o seguinte padrão:

```jsx
<tipo>(<escopo>): <pequeno resumo>
Fixes #<identificador_issue>
```

Ou seja, deve-se finalizar a mensagem do commit com uma linha extra. Nessa linha deve estar presenta a palavra “Fixes”, seguida de um espaço, uma cerquilha e o identificador da issue.

**Exemplo:**

```jsx
feat: adiciona botão de login na tela principal
Fixes #123
```

## Descrição no corpo do commit

Caso seja necessário incluir informações ou justificativas, que contextualizem de alguma forma o commit realizado, pode-se adicioná-las no corpo do commit. Devem, assim como o resumo do commit, presente na primeira linha, utilizar o tempo presento do indicativo.

Deve-se considerar o corpo do commit como o conteúdo entre a primeira linha (contendo o resumo do commit, e seu tipo) e a última linha (considerando que exista sempre uma linha referenciando à uma issue) da mensagem do commit.

**Exemplo:**

```jsx
fix: corrige erro de timeout na requisição de login

Identifica e corrige um erro de timeout que ocorria durante a requisição de login.
O problema foi causado por uma configuração inadequada do tempo de espera no cliente HTTP.

Fixes #456
```