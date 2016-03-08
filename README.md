# Power Hour Web

Website front end for my Power Hour Android applicaion, the source for which can be found [here](http://github.com/jordond/powerhour).

<a href="https://play.google.com/store/apps/details?id=ca.hoogit.powerhour&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png" width="150px" /></a>

## Install
1. Clone the repo `git clone http://github.com/jordond/powerhour-site`
1. Run `npm install`
1. Run `npm start`
1. Navigate to `localhost:8080`

## Features
- Written with the following technologies:
  - Webpack
  - ES6
  - Angular
  - Node
  - Love
- Run simple server to serve angular files.

## To Do
- Build front-end.
- Dockerize website for easier managment.
- Add to my Jenkins instance.

## Development
1. Clone the repo `git clone http://github.com/jordond/powerhour-site`
1. Run `npm install`
  - Note: This will install all dependencies then it will build a production ready version.
1. Then run `npm run dev`
1. Edit away, webpack will detect changes and rebuild, and then BrowserSync will reload.

## NPM Scripts
- `lint` - Run eslint on all javascript files in `src/`.
- `start` - Start the server by running `bin/server.js`.
- `start-dev` - Start server in development mode.
- `build` - Build all of the front-end javascript with webpack.
- `build-dev` - Build, and watch for changes.
- `dev` - Run server in development, and build & watch front end javascript.
- `hook-install` - Install a precommit hook that will run the tasks in the `package.json`.
- `hook-remove` - Remove the precommit.

## License

```
The MIT License (MIT)

Copyright (c) 2015 Jordon de Hoog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
