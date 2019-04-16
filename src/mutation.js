const Mutation = {
    createBook(parent, args, context, info) {
        return { title: 'El plan Marshall y la Guerra Fria' };
    },
};

module.exports = Mutation;