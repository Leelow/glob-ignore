# glob-ignore

[![Greenkeeper badge](https://badges.greenkeeper.io/Leelow/glob-ignore.svg)](https://greenkeeper.io/)
[![NPM downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Codacy Coverage][codacy-coverage-image]][codacy-coverage-url]
[![Codacy Grade][codacy-grade-image]][codacy-grade-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]

Match files using the patterns the shell uses, like stars and stuff.

## Install

```
$ npm install --save glob-ignore
```

## Usage

```js
const glob = require('glob-ignore');

// same usage as node-glob
glob('**', function(err, res) {            // async
  if(err) throw err;
  console.log(res);
});

glob('**');                                // sync

glob('**', 'dir/to/filter/**');            // the second arg is a filter
glob(['a/**', 'b/**'], ['c/**', 'd/**']);  // multiple patterns are allowed 

```

## Test and coverage
You just have to clone the repo and run

```
$ npm test
$ npm run coverage
```

## License

[MIT](LICENSE) © [Léo Lozach](https://github.com/Leelow)

[downloads-image]: https://img.shields.io/npm/dt/glob-ignore.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/glob-ignore
[travis-image]: https://travis-ci.org/Leelow/glob-ignore.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/glob-ignore
[appveyor-image]: https://ci.appveyor.com/api/projects/status/8akmc1deeva0vh9i?svg=true
[appveyor-url]: https://ci.appveyor.com/project/Leelow/glob-ignore
[codacy-coverage-image]: https://api.codacy.com/project/badge/Coverage/12d65abc0f0b42009532571e3c382cb0
[codacy-coverage-url]: https://www.codacy.com/app/Leelow/glob-ignore?utm_source=github.com&utm_medium=referral&utm_content=Leelow/glob-ignore&utm_campaign=Badge_Coverage
[codacy-grade-image]: https://api.codacy.com/project/badge/Grade/12d65abc0f0b42009532571e3c382cb0
[codacy-grade-url]: https://www.codacy.com/app/Leelow/glob-ignore?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/glob-ignore&amp;utm_campaign=Badge_Grade
[dependencies-image]: https://david-dm.org/leelow/sha512sum/status.svg
[dependencies-url]: https://david-dm.org/leelow/sha512sum?type=dev
[dev-dependencies-image]: https://david-dm.org/leelow/glob-ignore/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/leelow/glob-ignore?type=dev
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
