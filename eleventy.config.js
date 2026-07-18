import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addCollection('posts', (collection) => {
    return sortByTitle(collection.getFilteredByGlob('./src/posts/*.md').filter(item => item.data.tags && item.data.tags.includes('posts')));
  });



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