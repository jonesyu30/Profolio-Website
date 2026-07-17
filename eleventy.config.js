import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    pathPrefix: "/Profolio-Website/", 

    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    }
  };
};
