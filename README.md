# angular2-tour-of-heroes

Tour of heroes tutorial on Angular 2 website (TypeScript).

A good starting point for using NPM, TypeScript (1.8) and Angular2 (beta8).

## TODO

- Develop this into a starting shell
  - Have source component folders
    - ** Copying of html and css when it changes (grunt copy?)
  - Separate out *.ts and have *.js go elsewhere. (tsc does this)

- Have ability to do grunt clean  

## Errors

Was getting errors on npm start until I did:

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Which fixed it.

## Setup

- npm install
- npm start (watches and compiles app/*.ts files and runs lite-server)



