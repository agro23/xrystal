Xrystal
==========
### Epicodus Javascript Week 5 Group Project
#### by Misha Petrov, Andrew Peterson,  Andy Grossberg, and Nico Daunt


#### Description
is a crypto-collectible gem stone game created on top of the Ethereum blockchain. Each xrystal is an unique collectible object generated and visualized in <strong>real time</strong>. You can buy xrystals either from our xreator page or <strong>buy</strong>, <strong>sell</strong>, and even <strong>trade</strong> them in our marketplace. You can use our visualizer to see your xrystals in one of five custom environments specificallty tailored to display your xrystal collection in all its beauty. Eventually you will even be able to trade your xrystals with other players too!
***
[VISIT THE LIVE DEMO]()
***

## Installation (build your own wallet!)

First and foremost set up a firebase project @ https://firebase.google.com/


Open your preferred terminal, and enter the following command to clone source to your local machine:
```sh
git clone https://github.com/agro23/xrystal.git
```

navigate to the Xrystal directory:
```sh
cd xrystal
```

create a place to store your api-keys:
```sh
cd src
cd app
touch api-keys.ts
```

Retrieve your api keys located @
```
https://console.firebase.google.com/project/[YOUR PROJECT HERE]/overview
```

```sh
apiKey: "",
authDomain: "",
databaseURL: "",
projectId: "",
storageBucket: "",
messagingSenderId: ""
```

Store and export firebase api-keys in api-keys.ts file with the following codeblock (syntax is important here y'all):
```sh
export var masterFirebaseConfig = {
    apiKey: "FAKESTRING-99999-999_FaKeeSTring",
    authDomain: "yourprojectname-420b3.firebaseapp.com",
    databaseURL: "https://yourprojectname-420b3.firebaseio.com",
    storageBucket: "yourproject-420b3.appspot.com",
    messagingSenderId: "10101010101"
  };
```


Install angular globally (if you haven't already):
```sh
npm install -g @angular/cli@1.6.5
```


Build out the angular project and import dependencies:
```sh
ng serve --open
```

## Further Installation (deploy your own database!)

Update node_modules and confirm project isn't throwing errors
```sh
npm install
```
If build is clean set the production version in the root directory
```sh
ng build --env=prod
```
Install the firebase-tools globally if you haven't already
```sh
npm install -g firebase-tools
```
Run the login command
```sh
firebase login
```
Initialize the firebase project
```sh
firebase init
```

Select database and hosting when prompted
```sh
? What Firebase CLI features do you want to setup for this folder?

[X] Database: Deploy Firebase Realtime Database Rules
[X] Hosting: Configure and deploy Firebase Hosting sites
```

When prompted set firebase default root from public to /dist
```sh
?(public) dist
```
set database.rule.json to true in project file
```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
deploy to firebase in command line
```sh
firebase deploy
```
open in browser from command line or firebase.com
```sh
firebase open
>Hosting: Deployed site
```

Congratulations you are now the proud owner of a clean new xrystal wallet/skin! You're one heck of a gemmer!


## Specifications

1. #### Authenticates user.

| Input      | Output           |
| ------------- |:-------------:|
| **Username**: Testo **Password**: lambchop420    | **Welcome to the Xrystal marketplace Testo!** |


2.  ####User can purchase existing xrystals in marketplace

| Input      | Output           |
| ------------- |:-------------:|
| Purchase xrystal **'green-racoon' **     | **Testo is now the proud owner of 'green racoon' xrystal** |

3. #### User can generate custom xrystals

| Input      | Output           |
| ------------- |:-------------:|
| Generate xrystal   | **'jumping-ferret' xrystal generated** |

4. #### User can view xrystals in visualizer, and wallet

| Input      | Output           |
| ------------- |:-------------:|
| View xrystals    | **Testo owns 2 xrystals. 'green-racoon, and jumping-ferret'** |



##features
1. User authentication
2. Generates xrystals based off algorithm
3. Presents user with xrystal marketplace for xrystal purchasing
4. Xrystal visualizer using Aframe

### features to come
1. Robust xrystal generation, and 3d model manipulation
2. Tie xrystals to the Ethereum network
3. Xrystal AR game for iOs/android.





## Created With
* HTML
* JavaScript
* CSS
* Angular
* Typescript
* Firebase
* Swiss ephemeris



## Contact
questions/comments/concerns
* [modesau@gmail.com](mailto:modesau@gmail.com)
* [peterson8000@yahoo.com](mailto:peterson8000@yahoo.com)
* [nico.daunt@gmail.com](mailto:nico.daunt@gmail.com)
* [andy.grossberg@gmail.com](mailto:andy.grossberg@gmail.com)





## License
Copyright 2018

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


https://codepen.io/netsi1964/full/PZJEQe/

https://codepen.io/netsi1964/pen/PZJEQe

https://www.google.com/search?q=javascript+random+svg+polygon+generation&oq=javascript+random+svg+polygon+generation+&aqs=chrome..69i57.22331j1j8&sourceid=chrome&ie=UTF-8
