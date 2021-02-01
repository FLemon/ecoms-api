module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: process.env.DATABASE_HOST || 'db',
        port: process.env.DATABASE_PORT || 5432,
        database: process.env.DATABASE_NAME || 'strapi',
        username: process.env.DATABASE_USERNAME || 'strapi',
        password: process.env.DATABASE_PASSWORD || 'strapi',
        ssl: process.env.DATABASE_SSL || false,
      },
      options: {}
    },
  },
});
