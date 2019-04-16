const Query = {
    books(parent, args, context, info) {
        return [{
            title: 'Historia Universal'
        }];
    },
};

module.exports = Query;