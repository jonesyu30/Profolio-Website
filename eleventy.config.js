import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addCollection('coding', (collection) => {
    return sortByTitle(collection.getFilteredByGlob('./src/posts/coding/*.md').filter(item => item.data.tags && item.data.tags.includes('coding')));
  });
  eleventyConfig.addCollection('books', (collection) => {
    return sortByDate(collection.getFilteredByGlob('./src/posts/books/*.md').filter(item => item.data.tags && item.data.tags.includes('books')));
  });
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, parseInt(limit, 10)));



  return {
    pathPrefix: "/Profolio-Website/",

    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    }
  };
};


/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
function sortByTitle(collection) {
  return collection.toSorted((a, b) => { return a.data.title.localeCompare(b.data.title); });
}
/**
 * Sorts a collection by date
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
function sortByDate(collection) {
  return collection.toSorted((a, b) => { return a.data["finish-date"] - b.data["finish-date"]; });
}