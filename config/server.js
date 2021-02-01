module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.PORT || 1337,
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET || '480e771b3dc3a897248d4f2b0418476d',
    },
  },
});
