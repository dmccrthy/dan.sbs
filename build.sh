#!/bin/bash

##
# Handles building /src files to /dist for production 
##

# Configure folders to copy
folders="./src/projects ./src/posts ./src/public"

# Webpack clears the existing /dist so we don't have to
echo "===== Building Webpack Bundle ====="
npm run build

# Copy /src files to /dist
echo "===== Writing Files to ./dist ====="
for file in ./src/*; do
    if test -f $file; then
        echo $file
        cp $file ./dist
    fi

    # Copy folder if in folders
    if [[ $folders == *$file* ]]; then
        echo $file
        cp $file ./dist -r
    fi
done

echo "===== Build HTML From Markdown ====="
for file in ./dist/projects/*.md; do
    # $file and tempalte.html specify the target .md file and the html template
    node ./utils/markdownBuilder.js $file ./utils/template.html
    rm $file
done

# for file in ./dist/posts/*.md; do
#     node ./utils/markdownBuilder.js $file
# done

echo "===== Creating Tailwind File ====="
npx tailwindcss -i ./src/css/style.css -o ./dist/style.css
