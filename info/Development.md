# Developer notes

## Install (Typescript) type definitions (if you want to use third-party modules)

See https://github.com/DefinitelyTyped/DefinitelyTyped. Use the following command as example `npm install --save-dev @types/service-worker`


##  Unit testing

### Setup
See this [tutorial](http://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/)

`npm install -g karma-cli`
`npm install karma --save-dev` (also: karma-typescript, jarmine-core)
`npm install --save @types/jasmine`
`karma init karma.conf.js` (accept default values)

(we use phantomJS instead of chrome to support headless testing)

## Reference Projects
* [Clicker](https://github.com/lathonez/clicker)