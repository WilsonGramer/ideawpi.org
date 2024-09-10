module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/**/*.{jpg,png,gif,svg}");

    eleventyConfig.addPlugin(require("@jamshop/eleventy-plugin-typography"));

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
        },
        htmlTemplateEngine: "njk",
    };
};
