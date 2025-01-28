module.exports = function(eleventyConfig) {
  return {
    templateFormats: ["liquid", "md"], 
    dir: {
      input: ".",  
      output: "_site",  
      includes: "_includes",  
    }
  };
};
