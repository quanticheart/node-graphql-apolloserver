const Produto = require("../models/Produtos")

const produtoResolver = {
    Query: {
        produtos() {
            return Produto.find();
        },
        produto(_, {id}) {
            return Produto.findById(id)
        }
    },
    Mutation: {
        cadastro(_, {produto}) {
            const novoProduto = new Produto(produto);
            novoProduto.save();
        },
        atualizar(_, {id, produto}) {
            return Produto.findByIdAndUpdate(id, produto, {new: true});
        },
        deletar(_, {id}) {
            return Produto.findByIdAndDelete(id);
        }
    }
}

module.exports = produtoResolver;