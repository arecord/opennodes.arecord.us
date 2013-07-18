Github MD File Syntax
===

## Check the GFM (Github Flavored Markdown) Syntax

* [Github document](https://help.github.com/articles/github-flavored-markdown)

## Easy instruction

### Full Link
You can use fill url as a link like:
```
[Link Name](http://link.full.url)
```

### Related Link
Or the inside wiki page link using:
```
[Link Name](index.html?page=MD_FILE_NAME)

ex: [Syntax Page](index.html?page=Syntax.md)
```
Because all the parsing of the wikitpage are using javascript to get the related md file, and display. So you need to using the "index.html?page=" to load the md file name. 

### HTML Tag - Flash
You can use html tag directly inside the md file. For example to use embed tag to include youtube video:
```
<embed width="420" height="345" 
  src="http://youtube.googleapis.com/v/QdHGTfH_WGg&hd=1" 
  type="application/x-shockwave-flash"></embed> 
```

If you want to use image, video, audio... you need to use HTML for dispkay.


### HTML Tag = Image
```
<img src="https://portal.micloud.tw/images/logo.png"/>
```

### h1, h2, h3 Level Header
```
# H1 leve text
## H2 level text
### H3 level text
```
Show like:
# H1 leve text
## H2 level text
### H3 level text

### Items
```
* Level 1 item
  * Level 1-1 item
    * Level 1-1-1 item


```

Show Like:

* Level 1 item
  * Level 1-1 item
    * Level 1-1-1 item


## Table

| aaaa | bbbb | cccc |
| ---- | ---- | ---- |
| 1111 | 2222 | 3333 |

