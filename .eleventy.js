const ampPlugin = require("@ampproject/eleventy-plugin-amp");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(ampPlugin);
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addNunjucksFilter("json", function (value) {
    return JSON.stringify(value);
  });
};
