module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("styles");

  return {
    templateFormats: ["liquid", "md"],
    dir: {
      input: ".",  
      output: "_site",  
      includes: "_includes",  
    }
  };
};
