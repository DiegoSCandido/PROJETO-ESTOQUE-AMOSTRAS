const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require('fs');

class Produto {
    constructor(nome, quantidade, dataSaida, cliente) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.dataSaida = dataSaida;
        this.cliente = cliente; 
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    cadastrarProduto(nome, quantidade) {
        this.produtos.push(new Produto(nome, quantidade));
    }

    acrescentarEstoque(nome, quantidade) {
        let produto = this.produtos.find(produto => produto.nome === nome);
        if (produto) {
            produto.quantidade += quantidade;
        } else {
            console.log('Produto não encontrado.');
        }
    }

    saidaEstoque(nome, quantidade, cliente) {
        let produto = this.produtos.find(produto => produto.nome === nome);
        if (produto) {
            if (produto.quantidade >= quantidade) {
                produto.quantidade -= quantidade;
                console.log(`Saida registrada: ${produto.nome}: ${quantidade}`);
            } else {
                console.log('Quantidade insuficiente no estoque.');
            }
        } else {
            console.log('Produto não encontrado.');
        }
    }

    relatorioDeEstoque() {
        this.produtos.forEach(produto => {
            console.log(`Produto: ${produto.nome}, Quantidade: ${produto.quantidade}`);
        });
    }

    salvarDados() {
        fs.writeFileSync('estoque.json', JSON.stringify(this.produtos), 'utf-8');
    }

    carregarDados() {
        if (fs.existsSync('estoque.json')) {
            const dados = fs.readFileSync('estoque.json', 'utf-8');
            this.produtos = JSON.parse(dados);
        } else {
            console.log('Arquivo não encontrado.');
        }
    }
}

let estoque = new Estoque();
estoque.carregarDados();


function menu() {
    console.log('\n1 - Cadastrar produto');
    console.log('2 - Acrescentar estoque');
    console.log('3 - Saida de estoque');
    console.log('4 - Relatório de estoque');
    console.log('5 - Sair\n');

    readline.question('Escolha uma opção: ', (opcao) => {
        switch(opcao) {
            case '1':
                readline.question('Digite o nome do produto: ', (nome) => {
                    readline.question('Digite a quantidade do produto: ', (quantidade) => {
                        estoque.cadastrarProduto(nome, parseInt(quantidade));
                        estoque.salvarDados();
                        menu();
                    });
                });
                break;
            case '2':
                readline.question('Digite o nome do produto: ', (nome) => {
                    readline.question('Digite a quantidade a acrescentar: ', (quantidade) => {
                        estoque.acrescentarEstoque(nome, parseInt(quantidade));
                        estoque.salvarDados();
                        menu();
                    });
                });
                break;
            case '3':
                readline.question('Digite o nome do produto: ', (nome) => {
                    readline.question('Digite a quantidade de saida: ', (quantidade) => {
                        readline.question('Digite para quem foi enviado: ', (cliente) => {
                        estoque.saidaEstoque(nome, parseInt(quantidade),);
                        estoque.salvarDados();
                        menu();
                        })
                    });
                });
                break;
            case '4':
                estoque.relatorioDeEstoque();
                menu();
                break;
            case '5':
                readline.close();
                break;
            default:
                console.log('Opção inválida.');
                menu();
        }
    });
}

menu(); // inicia o menu