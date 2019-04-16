const { Prisma } = require('prisma-binding');

const typeDefs = require('./../generated/prisma-client/prisma-schema').typeDefs;

const db = new Prisma({
    typeDefs,
    endpoint: 'https://us1.prisma.sh/alexander-silvera/graphql-library/dev',
    debug: false,

});