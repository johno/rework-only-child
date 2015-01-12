# Rework Only Child

[![Build Status](https://secure.travis-ci.org/johnotander/rework-only-child.png?branch=master)](https://travis-ci.org/johnotander/rework-only-child)

A [rework](https://github.com/reworkcss) implementation of the
[:only-child]([CSS Selectors Level 4](http://dev.w3.org/csswg/selectors-4/#only-child-pseudo)
pseudo-class selector based off
[CSS Selectors Level 4](http://dev.w3.org/csswg/selectors-4/#only-child-pseudo).

This will convert:

```css
.some-class,
.some-other-class:only-child {
  color: blue;
}
```

To the currently compatible equivalent:

```css
.some-class,
.some-other-class:first-child:last-child {
  color: blue;
}
```

## Installation

```bash
npm install --save rework-only-child
```

## Usage

```javascript
var fs       = require('fs');
var rework   = require('rework');
var onlyChild = require('rework-only-child');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = rework(css).use(onlyChild()).toString();
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
