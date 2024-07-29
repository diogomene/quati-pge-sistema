# Modelo de ramificação

Este documento tem como objetivo especificar, brevemente, o modelo de ramificação escolhido para ser utilizado no projeto.

O modelo de ramificação escolhido foi o ***trunk based.*** o nome do modelo pode ser traduzido como “baseado em tronco”. Possui essa nomenclatura porque busca centralizar as contribuições e modificações de itens de configuração, em uma única ramificação, chamada de “tronco”.

As especificações do modelo ([https://trunkbaseddevelopment.com/](https://trunkbaseddevelopment.com/)) recomendam a utilização de ramificações de curto ciclo de vida (normalmente chamadas de feature branches), como auxiliares para a realização de modificações no projeto. Após conclusão das tarefas planejadas, as modificações devem ser mescladas a ramificação principal.

![Untitled](Modelo%20de%20ramificac%CC%A7a%CC%83o%20d21c39a7220a4753ad1907a7d1a1e089/Untitled.png)

 Esse modelo, embora bastante sucinto, tende a requerer que a equipe possua experiência com as ferramentas de versionamento utilizadas, e técnicas de controle de versão (porque, ao buscar sempre centralizar as features implementadas na branch principal, a possibilidade de que conflitos ocorram se torna maior, em relação a modelos que buscam mesclar features na branch principal com menor frequência, distribuindo os commits e responsabilidade de resolução de conflitos para outras ramificações, como o modelo GitFlow). Contudo, uma vez que a equipe, no projeto atual, é formada por apenas um desenvolvedor, a simplicidade do ***trunk based*** é muito bem vinda.

Embora simples, o modelo é capaz de apoiar o desenvolvimento e controle de versões que sigam boas práticas, e estejam alinhados aos interesses do gerenciamento de configuração.

No entanto, uma simples modificação, meramente semântica, deverá ser considerada no modelo. O modelo utilizado no projeto poderá nomear ramificações como **fix**. 

As ‘fix’ deverão ser criadas caso exista a necessidade de solucionar problemas que ocorram na branch principal. No modelo padrão, essas branchs seriam chamadas de feature branches; a fim de organizar melhor as nomenclaturas, essa pequena alteração será adicionada ao modelo.

## Exemplos válidos de nomenclatura de branches

- **feature/nome-da-feature**: Utilizada para implementar uma nova funcionalidade, adicionar itens de configuração e realizar melhorias
- **fix/nome-do-fix**: Usada para resolver problemas ou bugs

## Resumo

O modelo de ramificação escolhido é o trunk based, que centraliza modificações em uma única ramificação principal. Utiliza ramificações de curto ciclo de vida, como feature branches, para auxiliar nas modificações, que são mescladas à ramificação principal após a conclusão. A simplicidade do modelo é adequada para a equipe de um único desenvolvedor. Uma modificação semântica será adotada: ramificações de correções serão nomeadas como **fix**.