/**
 * This file handles creating HTML pages from markdown files.
 * It is run directly by build.sh during the webiste build process.
 * All this file does is take the name of a markdown file, and
 * creates an HTML file in ./dist, nothing else.
 *
 * Arguments:
 *      argv[2] - Markdown File
 *      argv[3] - HTML Template
 */

// Imports
const md = require("markdown-it")();
const fs = require("fs");
const path = require("path");
const process = require("process");

/**
 * Build formatted HTML using data
 * @param {*} content
 * @param {*} meta
 * @param {*} template
 * @returns {string} Formatted HTML
 */
function buildPageData(content, meta, template) {
    template = template.replace(/{title}/g, meta.title);
    template = template.replace(/{content}/g, content);

    template = template.replace(/{keywords}/g, meta.tags);
    template = template.replace(/{slug}/g, meta.slug);
    template = template.replace(/{image}/g, meta.image);

    return template;
}

/**
 * Handle reading markdown, and writing to html in ./dist
 * @param {string} file Markdown file to read from
 * @param {string} template HTML template to use
 */
function main(file, template) {
    const templateData = fs.readFileSync(template).toString();
    const fileData = fs.readFileSync(file).toString();

    // Catch errors on frontmatter
    if (fileData.charAt(0) != "{") {
        console.log("ERROR: Markdown frontmatter  missing '{' on " + file);
        return;
    }

    if (fileData.indexOf("}") === -1) {
        console.log("ERROR: Markdown frontmatter missing '}' on " + file);
        return;
    }

    // Catch any errors building the frontmatter JSON object
    // I'm using 'var' due to its function scope
    try {
        var metaData = JSON.parse(
            fileData.substring(0, fileData.indexOf("}") + 1)
        );
    } catch (err) {
        console.log(
            "ERROR: Incorrect frontmatter format on " + `${file}\n` + err
        );
        return;
    }

    const pageData = md.render(fileData.substring(fileData.indexOf("}")));
    const outputData = buildPageData(pageData, metaData, templateData);

    // Creat dir for page
    fs.mkdirSync(`./dist/${metaData.slug}`);

    // Write html file to ./dist
    fs.writeFileSync(
        path.resolve(`./dist/${metaData.slug}/index.html`),
        outputData
    );
}

// Run main with node arguments
main(path.resolve(process.argv[2]), path.resolve(process.argv[3]));
