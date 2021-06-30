const moment = require('moment');

moment.locale('en');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/main.css");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter('formatDate', date => {
        return moment(date).utc().format('LL');
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}