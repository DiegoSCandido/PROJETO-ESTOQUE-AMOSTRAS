*Sistema de Gerenciamento de Estoque*<span>

Este é um sistema simples de gerenciamento de estoque desenvolvido em Node.js. Ele permite cadastrar produtos, acrescentar estoque, registrar saídas de estoque e gerar relatórios de estoque.

*Instalação*

Certifique-se de ter o Node.js instalado em seu sistema.
Clone este repositório em seu ambiente local.
Execute npm install para instalar as dependências necessárias.
Utilização
Para iniciar o programa, execute node nome_do_arquivo.js no terminal.

*Funcionalidades*

Cadastrar produto: Permite adicionar um novo produto ao estoque, fornecendo o nome e a quantidade desejada.
Acrescentar estoque: Incrementa a quantidade de um produto existente no estoque, fornecendo o nome do produto e a quantidade a ser acrescentada.
Saída de estoque: Registra a saída de um produto do estoque, fornecendo o nome do produto e a quantidade a ser retirada. (Nota: Funcionalidade de registro de data e cliente será implementada em uma atualização futura.)
Relatório de estoque: Exibe um relatório com todos os produtos no estoque e suas quantidades atuais.

*Estrutura do Código*

Produto: Classe que representa um produto com nome, quantidade, data de saída e cliente. (Nota: Data de saída e cliente serão adicionados em uma atualização futura.)
Estoque: Classe responsável por gerenciar o estoque, com métodos para cadastrar produtos, acrescentar estoque, registrar saída de estoque, gerar relatório de estoque, salvar e carregar dados do arquivo JSON.
menu(): Função principal que exibe o menu de opções e controla a interação com o usuário.
Persistência de Dados
Os dados do estoque são salvos e carregados de um arquivo JSON chamado estoque.json.

*Tecnologias Utilizadas*

Node.js
readline (módulo para interação com o usuário)
fs (módulo para operações de sistema de arquivos)

*Autor* <br>
Diego Candido
