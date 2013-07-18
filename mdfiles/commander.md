commander
===

commander是一套讓建立Node.js CLI(Command Line Interface)更快速的方法，讓使用者可以更快速且更彈性的抓取command line的參數，也提供預設的help page，讓需要寫指令模式的開發者更方便！

## 套件資訊

<div class="pkginfo" data-module-name="commander" data-show="version,dependencies,repository"></div>

## Installation

```
npm install request
```

## Sample Usage

<pre class="code" data-js="commander/test-commander.js"></pre>

Result:
```
# node examples/commander/test-commander.js
you ordered a pizza with:
  - marble cheese

# node examples/commander/test-commander.js -P 123
you ordered a pizza with:
  - pineappe
  - marble cheese
```
