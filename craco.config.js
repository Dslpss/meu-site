module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const workboxPlugin = webpackConfig.plugins.find(
            (plugin) => plugin.constructor.name === "GenerateSW"
          );
          if (workboxPlugin) {
            webpackConfig.plugins = webpackConfig.plugins.filter(
              (plugin) => plugin !== workboxPlugin
            );
          }
          return webpackConfig;
        },
      },
    },
  ],
};
