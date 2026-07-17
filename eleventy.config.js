module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: {
      input: "src",          // Tells Eleventy to build ONLY what is inside /src
      output: "docs",       // Compiles output files directly into the root /_site
      includes: "_includes"  // Resolves paths relative to src/ (src/_includes)
    }
  };
};