# package.json Format

Hain plugin is just a nodejs module.  
All plugin configurations must be located in package.json  

* `name` String - Plugin name, must be prefixed with `hain-plugin-` (**required**)
* `author` String or Object - Name of Plugin Author (**required**)
* `version` String - Plugin version 'x.y.z' (**required**)
* `dependencies` Array - If your plugin has external dependencies, include them here. (required if applicable)
* `hain` Object - (**required**)
  - `prefix` String - Plugin command prefix which starts with one of `?@=\/#`, e.g. '/g' (**required**)
  - `usage` String - Plugin usage to be displayed in the empty ResultList. e.g. 'type /g' (optional, default is `prefix` value)
  - `icon` String - Icon URL, see [Icon URL Format]({{ site.baseurl }}/docs/icon-url-format/) (**required**)
  - `redirect` String - Query to redirect user input when user did select intro help (optional)
  - `group` String - Default result group name (optional, default is `name` value)

**And...**

* `keywords` Array\<String\> - Add Base API version `hain-0.6.0` for sharing your plugin (**required**)

**Example**  

- package.json

```json
{
  "name": "hain-plugin-google",
  "author": "Heejin Lee",
  "version": "0.0.1",
  "keywords": [
    "hain-0.6.0"
  ],
  "hain": {
    "prefix": "/g",
    "usage": "type /g something to google it",
    "icon": "#fa fa-google",
    "redirect": "/g "
  }
}
```
