module.exports = function(eleventyConfig) {
  // Optionally, add more LiquidJS filters or features here if needed

  return {
    templateFormats: ["liquid", "md"],  // Ensure Liquid templates are supported
    dir: {
      input: ".",  // Root input directory
      output: "_site",  // Output directory
      includes: "_includes",  // Layouts and partials folder
    }
  };
};
