
/*
alkemi.js v0.0.1

(c) myguide.io 2015

@package alkemi
@version 0.0.1

@author Harry Lawrence <http://github.com/hazbo>

License: MIT

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
 */
var Alkemi;

Alkemi = (function() {
  function Alkemi() {
    this.base = "http://currency.groundsix.com";
  }

  Alkemi.prototype.rates = function(base, compare, callback) {
    this.make("/rates/" + base + "/" + compare, callback);
    return this;
  };

  Alkemi.prototype.convert = function(base, compare, value, callback) {
    this.make("/rates/" + base + "/" + compare + "/" + value, callback);
    return this;
  };

  Alkemi.prototype.make = function(uri, callback) {
    var request;
    request = new XMLHttpRequest();
    request.open('GET', this.base + uri, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        return callback(JSON.parse(request.responseText));
      } else {
        return console.log("There was an error");
      }
    };
    request.onerror = function() {
      return console.log("There was a connection error of some sort");
    };
    request.send();
    return this;
  };

  return Alkemi;

})();

this.Alkemi = new Alkemi();
