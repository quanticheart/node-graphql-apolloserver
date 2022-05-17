const {gql} = require("apollo-server")

const mutation = gql`
    type Mutation{
        cadastro(produto: ProdutoInput): Produto
        atualizar(id:String, produto: ProdutoInput): Produto
        deletar(id:String): Produto
    }

    input ProdutoInput{
        nome:String,
        descricao:String,
        preco:String,
        fornecedor: FornecedorInput
    }

    input FornecedorInput{
        razaosocial:String,
        cnpj:String
    }
`;

module.exports = mutation