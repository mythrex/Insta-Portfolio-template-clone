#Profile

## How to use?
Install Packages
```
npm install
```
then, run for dev
```
npm run dev
```
the files will be served on **localhost:8080**

for production run 
```
npm run prod
```
and copy all the contents from /dist folder to your server.

### Why to use it?
It minifies js,css and images. It optimizes the js and html page for better *page-insights* score.

### File Structure
All the work is done in __src__ folder.
1. All the css are in **/src/css**.
2. All the js are in **/src/js**.
3. All the bundles are required in **app.js**
4. Index.ejs is the home page.

> You can add mode pages but you will have to configure _webpack.config.js_.

### Changing the title
Just replace the __Webpack__ in this line in package.json
```
template: 'ejs-simple-loader?title=Webpack&activePage=home!./src/index.ejs',
```
> It will probably be line no 49.
> You need to suppy html-webpack-plugin template option a title 


##### Have fun

