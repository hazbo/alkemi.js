###
alkemi.js v0.0.1

(c) myguide.io 2015

@package alkemi
@version 0.0.1

@author Harry Lawrence <http://github.com/hazbo>

License: MIT

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
###
class Alkemi
	constructor: ->
		@base = "http://currency.groundsix.com"

	rates: (base, compare, callback) ->
		@make("/rates/" + base + "/" + compare, callback)
		this

	convert: (base, compare, value, callback) ->
		@make("/rates/" + base + "/" + compare + "/" + value, callback)
		this

	make: (uri, callback) ->
		request = new XMLHttpRequest()
		request.open('GET', @base + uri, true)
		request.onload = () ->
			 if request.status >= 200 && request.status < 400
			 	callback(JSON.parse(request.responseText))
			 else
			 	console.log "There was an error"

		request.onerror = ->
			console.log "There was a connection error of some sort"

		request.send()
		this

@Alkemi = new Alkemi()
