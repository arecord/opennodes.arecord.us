jsontool
====

## 說明

提供指令列模式操作json的排版及物件操作方式

## 套件資訊

<div class="pkginfo" data-module-name="jsontool" data-show="version,dependencies"></div>

## Installation

```
# npm install jsontool -g
```

## 範例

Sample execute:
```
curl http://search.twitter.com/search.json?q=node.js | json
```

Sample output:
```
 curl http://search.twitter.com/search.json?q=node.js | json
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 12566  100 12566    0     0  24705      0 --:--:-- --:--:-- --:--:-- 36423
{
  "completed_in": 0.03,
  "max_id": 335659522125336600,
  "max_id_str": "335659522125336576",
  "next_page": "?page=2&max_id=335659522125336576&q=node.js",
  "page": 1,
  "query": "node.js",
  "refresh_url": "?since_id=335659522125336576&q=node.js",
  "results": [
    {
      "created_at": "Sat, 18 May 2013 07:34:00 +0000",
      "from_user": "NewsNodejs",
      "from_user_id": 486450041,
      "from_user_id_str": "486450041",
      "from_user_name": "nodejs-news",
      "geo": null,
      "id": 335659522125336600,
      "id_str": "335659522125336576",
      "iso_language_code": "en",
      "metadata": {
        "result_type": "recent"
      },
      "profile_image_url": "http://a0.twimg.com/profile_images/1812607216/nodejs-news_normal.png",
      "profile_image_url_https": "https://si0.twimg.com/profile_images/1812607216/nodejs-news_normal.png",
      "source": "&lt;a href=&quot;http://nodejs-news.com&quot;&gt;dashboard-stream&lt;/a&gt;",
      "text": "How We Built eBay’s First Node.js Application #nodejs #ebays http://t.co/izNKJ7kcLT"
    },
    ...
  ],
  "results_per_page": 15,
  "since_id": 0,
  "since_id_str": "0"
}
```

Sample Controll JSON Object:
```
# curl -sS http://search.twitter.com/search.json?q=node.js | json results_per_page
{
  "results_per_page": 15
}
```

Sample Operation for Json within Array:
```
# curl -sS http://search.twitter.com/search.json?q=node.js | json results[0]
{
  "results": [
    {
      "created_at": "Sat, 18 May 2013 07:38:42 +0000",
      "from_user": "maxmilovanov",
      "from_user_id": 45791733,
      "from_user_id_str": "45791733",
      "from_user_name": "Максим Милованов",
      "geo": null,
      "id": 335660703245561860,
      "id_str": "335660703245561856",
      "iso_language_code": "en",
      "metadata": {
        "result_type": "recent"
      },
      "profile_image_url": "http://a0.twimg.com/profile_images/268832122/i_normal.jpg",
      "profile_image_url_https": "https://si0.twimg.com/profile_images/268832122/i_normal.jpg",
      "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;",
      "text": "@nodejs Why #Myspace is not in the list of those who use node.js?",
      "to_user": "nodejs",
      "to_user_id": 91985735,
      "to_user_id_str": "91985735",
      "to_user_name": "node js"
    }
  ]
}
```
