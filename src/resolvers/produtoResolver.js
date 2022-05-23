const Produto = require("../models/Produtos")

const produtoResolver = {
    Query: {
        async produtos() {
            return await Produto.find();
        },
        async produto(_, {id}) {
            return await Produto.findById(id)
        }
    },
    Mutation: {
        async cadastro(_, {produto}) {
            const novoProduto = new Produto(produto);
            return await novoProduto.save();
        },
        async atualizar(_, {id, produto}) {
            return await Produto.findByIdAndUpdate(id, produto, {new: true});
        },
        async deletar(_, {id}) {
            return await Produto.findByIdAndDelete(id);
        }
    }
}

module.exports = produtoResolver;