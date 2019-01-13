const Query = {
    dogs(parent, args, ctx, info) {
        return [{name: 'Snickers'}, {name: 'Fluffy'}]
    }
};

module.exports = Query;
