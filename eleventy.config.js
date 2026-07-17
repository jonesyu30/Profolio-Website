import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  return {
    pathPrefix: "/Profolio-Website/", 

    dir: {
      input: "src",
      output: "docs",
      includes: "_includes"
    }
  };
};
