# infinicept-project

Hello Nick! <br /><br />

### High-level design: <br />
I used vue.js as my front-end framework. My 'pages' are parent components that contain it's child components like the employee cards etc. I also created components for the navbar and footer that persist across the application. Everything is mobile friendly thanks to bootstrap's css and some custom styling.

### TODO: <br />
- Create a centralized data store using Vuex (Similar to Redux in React) so that employee data can be centralized and used in any component
- Implement material design components and styling for a nicer looking UI
- Add Loki.js in-memory database to allow saving of the employee

## Usage:
### client side
http://localhost:8080
``` bash
with npm:
$ npm install
$ npm run dev
```

``` bash
with yarn:
$ npm install
$ yarn serve
```

### server side
``` bash
TODO
```
