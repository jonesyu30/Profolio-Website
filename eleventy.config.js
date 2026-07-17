module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    pathPrefix: "/Profolio-Website/", 

    dir: {
      input: "src",          
      output: "docs",       
      includes: "_includes"  
    }
  };
};
