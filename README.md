Survey Making App using ngbp (AngularJS)

***

## Quick Start

Install Node.js and then:

```sh
$ git clone https://github.com/aaqibhabib/surveymonkey.git
$ cd surveymonkey
$ sudo npm -g install grunt-cli bower
$ npm install
$ bower install
$ grunt watch
```

Finally, open `file:///path/to/surveymonkey/build/index.html` in your browser.

## Notes

This is a quick solution to the given coding exercise. I don't do much styling,
input validation, error checking, or unit testing. The app structure is important.
src/app/home has the app. If the app were larger, I would build pages out like src/app/about.
I made sure to group related file together such as home and home/modal.
