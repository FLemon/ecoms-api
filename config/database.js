module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        uri: process.env.DATABASE_URL || '',
        host: process.env.DATABASE_HOST || 'db',
        port: process.env.DATABASE_PORT || 5432,
        database: process.env.DATABASE_NAME || 'strapi',
        username: process.env.DATABASE_USERNAME || 'strapi',
        password: process.env.DATABASE_PASSWORD || 'strapi',
        ssl: process.env.NODE_ENV === 'production' ? { "rejectUnauthorized": false } : false,
      },
      options: {
        pool: {
          min: 0,
          max: 10,
          createTimeoutMillis: 3000,
          acquireTimeoutMillis: 30000,
          idleTimeoutMillis: 30000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 100,
          propagateCreateError: false // <- default is true, set to false
        },
      }
    },
  },
});
