# angular2-tour-of-heroes

Tour of heroes tutorial on Angular 2 website (TypeScript).

A good starting point for using NPM, TypeScript (1.8) and Angular2 (beta8).

## Features

- Uses NPM, TypeScript (1.8), Angular2 (2.0b8), and Grunt.
- Clean separation of source and build target in a component directory
  organization suitable for Angular2 and web components.
- Create a nice automatic workflow from component source directories
  (app-src/) to target directory (app/).  Static assets are copied on
  change (html, css).  Less files (*.less, *.incl.less) are processed.
  TypeScript (ts) files are compiled and generate js and js.map files.
- Automated reloading of browser in dev mode ala lite-server
- Has a cleaned up, final version of the solution of the Angular 2
  tutorial "Tour of Heroes" for inspection.  A good, simple app to pick
  apart, which is properly organized and structured and shows most of
  the Angular2 features on needs.

## TODO

- grunt should copy files that aren't there on startup (not just on
  file change).
- Add grunt clean task

## Errors

Was getting errors on npm start until I did:

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Which fixed it.

## Setup

- npm install
- npm start (watches and compiles app-src/*.ts files and runs lite-server)
- grunt (converts .less files and copies changed .html and .css to app/
  target dir).


