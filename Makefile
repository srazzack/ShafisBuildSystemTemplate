.PHONY: install clean

PROJECT=split
DESTDIR?=/tmp/$(LOGNAME)/$(PROJECT)

install:
	tar cf - -C dist . | tar xvf - -C $(DESTDIR)


install_bak:
	rm -rf dist/
	bower install
	npm cache clean
	npm install imagemin-gifsicle
	npm install
	node_modules/gulp/bin/gulp.js dist
	mkdir -p $(DESTDIR)
	tar cf - -C dist . | tar xvf - -C $(DESTDIR)

clean:
	git clean -fxd