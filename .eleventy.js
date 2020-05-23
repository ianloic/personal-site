const { DateTime } = require("luxon");
const ampPlugin = require("@ampproject/eleventy-plugin-amp");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(ampPlugin);
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPassthroughCopy("img");

  // Pages that have an explicit date set:
  eleventyConfig.addCollection("posts", (collections) =>
    collections.getAll().filter((t) => t.template.frontMatter.data.date)
  );

  eleventyConfig.addNunjucksFilter("json", function (value) {
    return JSON.stringify(value);
  });
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });
};
