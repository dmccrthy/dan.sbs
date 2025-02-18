#!/bin/bash

##
# Handles building /src files to /dist for production 
##

# Configure folders to copy
folders="./src/projects ./src/posts ./src/images"

# Specify pages to generate content for
pages="projects.html posts.html"

# Webpack clears the existing /dist so we don't have to
echo "===== Building Webpack Bundle ====="
npm run build

# Copy /src files to /dist
echo "===== Writing Files to ./dist ====="
for file in ./src/*; do
    # Prevent copying directories
    if test -f $file; then
        echo $file
        cp $file ./dist
    fi

    # Copy directories if configured
    if [[ $folders == *$file* ]]; then
        echo $file
        cp $file ./dist -r
    fi
done

echo "===== Build HTML From Markdown ====="
for file in ./dist/projects/*.md; do
    echo $file

    # $file and tempalte.html specify the target .md file and the html template
    node ./utils/markdownBuilder.js $file ./utils/template.html
    rm $file
done

for file in ./dist/posts/*.md; do
    echo $file
    
    # $file and tempalte.html specify the target .md file and the html template
    node ./utils/markdownBuilder.js $file ./utils/template.html
    rm $file
done

# echo "===== Generate Custom Content ====="
# for 

# echo "===== Create Sitemap.xml ====="
# npx sitemap < 

echo "===== Create Tailwind File ====="
npx tailwindcss -i ./src/css/style.css -o ./dist/style.css
