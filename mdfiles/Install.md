Install - GitHub Page Hosted
===

### Step 1: Fork wikitpage 

You can fork this project [HERE](https://github.com/peihsinsu/wikitpage/fork_select). 
This repository include some default page md files, default project folders and architecture for build the framework.

* README.md: This is the file you see now.
* index.html: The enter page that you can configure a document.location javascript to redirect to the wiki page.
* wikitpage.js: The control file that specify where the md file folder, welcome page, menu page and your github information.
* mdfiles/: The default md file folder, that you can use another folder by change the wikitpage.js
* wiki/: The default wiki framework folder.

After fork, check the branch in "gh-pages". And after about 15-30 minutes, you can view your wikitpage at :
```
http://[your_github_name].github.com/[project_name].
```
PS: If you have different default branch, please check the gh-pages repository again.

### Step 2: Config github repository

Go to your project and open the $project/wikitpage.js and edit the content follow the description:

```
# vi $project/wikitpage.js
var config={
  user:'peihsinsu',
  project:'wikitpage',
  md_file_path: '../mdfiles',
  md_folder_name: 'mdfiles', 
  welcome_page: 'Main.md',
  menu_page: 'Menu.md'
};
```

* config.user: The github owner or group name, that will use for build edit link
* config.project:The github project name, that will use for build edit link
* config.md_file_path:The md file folder that for read md file use
* config.md_folder_name: The md folder name, use for open the edit url from github
* config.welcome_page: The welcome page, default location that access from root url
* config.menu_page: The menu page, that shows in the left of the page

### Step 3: Check and Use

After configure the wikitpage.js, you can access the wiki using the link that Step1 says.
If any problem about GitHub Page, you can follow the [Github Page Instruction](https://help.github.com/articles/creating-project-pages-manually) to check the use of github page.



Install - Using Other Web Server
===

Using Github... or you can clone this project and start by nginx, httpd, node.js or other http web server... (Descript bellow...)

```
# git clone git@github.com:peihsinsu/wikitpage.git [YOUR PROJECT NAME]
```

### Using Node.js Start WikitPage

* Install [express.js](http://expressjs.com/), and initial project using express command
```
# cd [YOUR PROJECT NAME] && express . && npm install
```
* Linking the static resource
You need to update the static resource config for using node.js to open the site.
```
# vi app.js
```
In the app.js file (the default start point of express.js), and update the app.configure file that change the static resource path:
```
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  ...(skip)
  app.use(express.static('/the/path/to/wikitpage'));
});
```

* Start the app
```
# node app.js
```

* View the page
```
http://your.ip.address:port/index.html
```

### Using Nginx or HTTPD Start WikitPage

* Copy the cloned folder ($project) to the www folder ($httpd-www) that you defined in the Nginx or HTTPD
```
# cp $project $httpd-www
```
And there will exist a folder: $httpd-www/$project

* View the site
```
http://your.ip.address:port/$project/index.html
```
