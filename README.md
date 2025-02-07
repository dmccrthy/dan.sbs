<table align="center">
    <tr>
        <th>
            <img src="./src/images/favicon.svg" height="50">           
        </th>
        <th>
            <h1>
                dan.sbs
            </h1>
        </th>
    </tr>
    
</table>

## 🗒️ License

This Website is provided under the AGPL-3.0 license. Feel free to use it as inspiration for your own website.

## 🏁 Getting Started

1.  **Clone the Repo**

    Start by cloning the repository to your device

    ```shell
    git clone https://github.com/dmccrthy/www.dmccarthy.org
    ```

2.  **Install Dependencies**

    From here you should navigate to the site folder and install the dependencies

    ```shell
    cd www.dmccarthy.org/
    npm install
    ```

3.  **Run the Website**

    ```shell
    npm run develop
    ```

    From here the site should be running at http://localhost:8000

4. **Build for Production**

    Although we're using webpack, I've written a custom script to handle building all parts of the website

    ```shell
    ./build.sh
    ```

    This should create a ./dist folder with the complete static site. Unlike webpack, this will include the html for all pages (*including ones generated from markdown*), the compiled tailwind css, and images. **This also maintains the relative path structure used in the HTML :)**

## ⚙️ General Stuff

Alongside typicaly HTML, I've implemented a component system, and a way to statically generate pages from markdown. The components are organized using [webpack-custom-elements](https://www.npmjs.com/package/webpack-custom-elements) which is a webpack loader I developed for this exact purpose. Markdown to HTML is handled by *./utils/markdownBuilder.js*, and templates are sourced from template.html. NOTE: template.html uses a number of tags like {title} which ard direct references to metadata at the top of the markdown. 

## 🧰 Tools Used

- [Webpack](https://webpack.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Markdown-it](https://github.com/markdown-it/markdown-it)

#### Credit to <a href="https://github.com/twitter/twemoji">Twemoji</a> for the favicon lol.

##

Thanks for Reading
-Dan
