all: alkemi

alkemi: src/alkemi.coffee clean
	gulp build
	gulp minify

clean:
	rm -f dist/*.js
