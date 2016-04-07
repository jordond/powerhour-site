# Power Hour Web
[![Build Status](https://ci.hoogit.ca/buildStatus/icon?job=PowerHour.Site.master&build=2)](https://ci.hoogit.ca/job/PowerHour.Site.master/2/) [![Build Status](https://ci.hoogit.ca/buildStatus/icon?job=PowerHour.Site.develop)](https://ci.hoogit.ca/job/PowerHour.Site.develop/) [![Build Status](https://drone.hoogit.ca/api/badges/jordond/powerhour-site/status.svg)](https://drone.hoogit.ca/jordond/powerhour-site)

Website front end for my Power Hour Android applicaion, the source for which can be found [here](http://github.com/jordond/powerhour).

<a href="https://play.google.com/store/apps/details?id=ca.hoogit.powerhour&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png" width="150px" /></a>

Powered by my [ES6 Angular seed](https://github.com/jordond/angular-es6-starter)

Site is live @ [powerhourapp.ca](https://powerhourapp.ca)

# Install
1. Download and extract latest compiled files from [here](https://ci.hoogit.ca/job/PowerHour.Site.master/lastSuccessfulBuild/artifact/*zip*/archive.zip).
2. Change into directory and run `NODE_ENV=production npm install`.
3. Start server by running `npm start`.
  - or `NODE_ENV=production PORT=8080 node ./bin/server.js`
4. Navigate to `http://localhost:8080`

## From source
1. Clone the repo `git clone http://github.com/jordond/powerhour-site`
1. Run `npm install`
1. Run `npm run build`
1. Run `npm start`
1. Navigate to `http://localhost:8080`

## Docker
1. Clone the repo: `git clone http://github.com/jordond/powerhour-site`
1. Build docker image: `docker build -t jordond/powerhour docker/`
1. Create a container:

```
  docker run -d \
    --name=powerhour \
    --restart=always \
    -p <port>:8080 \
    jordond/powerhour
```

###Notes
- I run this in a docker container, then have my nginx server reverse proxy to this.
- Add `-e staging=true` to the `docker run` command to enable running from the `develop` branch.

# Features
- Written with the following technologies:
  - Webpack
  - ES6
  - Angular
  - Node
  - Love
- Run simple server to serve angular files.

## To Do
- TESTS
- ~~Build front-end.~~
- ~~Dockerize website for easier managment.~~
- ~~Add to my Jenkins instance.~~

# Development
1. Clone the repo `git clone http://github.com/jordond/powerhour-site`
1. Run `npm install`
1. Run `npm run hook-install` to setup the precommit hook.
1. Then run `npm run dev` *or* `npm run dev-prod` for testing production mode.
1. Edit away, webpack will detect changes and rebuild, and then BrowserSync will reload.

## NPM Scripts
- `npm run lint`         - Run eslint on all javascript files in `src/`.
- `npm run start`        - Start the server by running `bin/server.js`.
- `npm run start-dev`    - Start server in development mode.
- `npm run build`        - Build all of the front-end javascript with webpack.
- `npm run build-dev`    - Build, and watch for changes.
- `npm run dev`          - Run server in development, and build & watch front end javascript.
- `npm run hook-install` - Install a precommit hook that will run the tasks in the `package.json`.
- `npm run hook-remove`  - Remove the precommit.

# License

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
