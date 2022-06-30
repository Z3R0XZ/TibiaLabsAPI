module.exports = {
  async rewrites() {
    return [
      {
        source: "/v2/:slug*",
        destination: "/api/:slug*",
      },
      {
        source: "/v1/:slug*",
        destination: "/api/:slug*",
      },
    ];
  },
};
