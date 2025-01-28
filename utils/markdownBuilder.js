/**
 * This file handles creating HTML pages from markdown files.
 * It is run directly by build.sh during the webiste build process.
 * All this file does is take the name of a markdown file, and
 * creates an HTML file in ./dist, nothing else
 */

const markdownit = require("markdown-it");
const fs = require("fs");
const path = require("path");
const process = require("process");

const md = markdownit();
const file = path.resolve(process.argv[2]);

console.log(file);

const data = fs.readFileSync(file);
console.log(data.toString());

console.log(md.render(data.toString()));

function createHtmlPage() {}
