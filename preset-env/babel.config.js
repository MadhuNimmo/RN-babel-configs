module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["module:metro-react-native-babel-preset", ['@babel/preset-env',
      {
        "loose": true,
        "useBuiltIns": "entry",
        "corejs": "2.6.8",
        "modules": false,
      }]],
    plugins: ['remove-use-strict']
  };
};
