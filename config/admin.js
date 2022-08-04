module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f451fbcf13ac4195547b1a9722d3ec4e'),
  },
});
