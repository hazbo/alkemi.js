# Alkemi.js

Alkemi.js is a JavaScript http client for Alkemi which gives
you up-to-date exchange rate information and helps with
currency conversion.

### Usage

```javascript
Alkemi.rates('GBP', 'USD', function(rate) {
	console.log(rate);
});

Alkemi.convert('GBP', 'USD', 20, function(conversion) {
	console.log(conversion);
});
```

### Building

Requires [Gulp](https://github.com/gulpjs/gulp) to build.

```bash
$ git clone git@github.com:myguide/alkemi.js.git
$ cd alkemi.js
$ npm install
$ make
```

### Contributing

Alkemi.js accepts Github pull requests. Be sure to write a
[good commit message](http://chris.beams.io/posts/git-commit/).

  - Fork Alkemi.js
  - Create a feature branch (`git checkout -b my-feature`)
  - Commit your changes (`git commit`)
  - Push to your feature branch (`git push origin my-feature`)
  - Create new pull request
