Advance Customize
===

## Project structure

```
# ls -l /tmp/wikitpage
total 24
-rw-r--r--  1 simonsu  wheel  2572  4 21 15:23 README.md
-rw-r--r--  1 simonsu  wheel   805  4 21 15:23 index.html
drwxr-xr-x  5 simonsu  wheel   170  4 21 15:23 mdfiles
drwxr-xr-x  6 simonsu  wheel   204  4 21 15:23 wiki
-rw-r--r--  1 simonsu  wheel   429  4 21 15:23 wikitpage.js
```

The important page that effect the layout...

* index.html: The core view page]
* wiki/: The default wiki framework folder.
  * wiki/javascripts/: 
    * base.js: The core script to load the md file and translate to html
    * marked.js: The file copy from [marked.js](https://github.com/chjj/marked), and with a little modify to fix javascript show problem
    * other js: jQuery, blockUI, default Github Page js
  * wiki/stylesheets/: 
    * all css: The default css from GitHub Page generator
  * wiki/images/:
    * all png: My download and design images use for the web.

## Modify Hints

* If you are only the wiki user, fork project and use directly.
* If you want to have a new look and feel, you can edit the wiki/index.html, wiki/stylesheets/*.css and with your images that you can store in wiki/images/.
* If you want to enhance the wiki markdown translate, you can focus in the wiki/javascripts/marked.js file.