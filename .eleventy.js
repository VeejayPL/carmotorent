// 11ty configuration
module.exports = (config) => {
  config.addPassthroughCopy("./src/css/");
  config.addPassthroughCopy("./src/js/");
  config.addPassthroughCopy("./src/images/");
  config.addWatchTarget("./src/css/");
  config.addWatchTarget("./src/js/");
  config.addWatchTarget("./src/images/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
