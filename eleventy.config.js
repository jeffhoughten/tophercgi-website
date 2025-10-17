import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addCollection("navigationEntries", function(collectionApi) {
        return collectionApi.getAll().filter(item => "eleventyNavigation" in item.data);
    });

    eleventyConfig.addPassthroughCopy("_src/media");
    eleventyConfig.addPassthroughCopy("_src/js");
    eleventyConfig.addPassthroughCopy("_src/css");
    eleventyConfig.addPassthroughCopy("_src/fonts");

    eleventyConfig.addFilter('stringify', (data) => {
        return JSON.stringify(data, null, "\t")
    });

    eleventyConfig.addFilter('rootNav', function(nav) {
        return nav.filter(item => !item.parent);
    });


    return {
        dir: {
            data: "_data",
            includes: "_includes",
            input: "_src",
            output: "_site"
        }
    };
};