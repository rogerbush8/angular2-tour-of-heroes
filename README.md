# angular2-tour-of-heroes

Tour of heroes tutorial on Angular 2 website (TypeScript).

A good starting point for using NPM, TypeScript (1.8) and Angular2 (beta8).

## Errors

Was getting errors on npm start until I did:

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Which fixed it.



