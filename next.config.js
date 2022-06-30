module.exports = {
  async rewrites() {
    return [
      {
        source: "/v2/:slug*",
        destination: "/api/:slug*",
      },
    ];
  },
};
