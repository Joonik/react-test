# react-test
React test with webpack, bootstrap and redux

Mostly based on this tutorial:
https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack

With some code taken from the React Slingshot project:
https://github.com/coryhouse/react-slingshot


### How-To

After installing the project dependencies using `npm install` you can run any of the two following scripts:

* `npm run build`: Builds the public folder, this will be the production output with all the files minified. If the folder already exists it will be removed first then re-created.
* `npm run devel`: Builds the public folder, creates a simple HTTP server with LiveReload enabled for development. The server address is http://localhost:8080


### Note for Windows users

In order to build the public folder you should run `npm run build-win`.

Because some of the used modules uses `node-gyp` you have to have a C compiler, like the one included with Visual Studio, and specify the installed version with the flag `--msvs_version`. For example, if you have the latest VS Community you should run:
```
npm install --msvs_version=2015
```
