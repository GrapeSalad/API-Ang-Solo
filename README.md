# YarrBooty
#### A simple website for Google Geo-Caching

This project was built using [Angular CLI](https://github.com/angular/angular-cli), [Angular 2](https://angular.io/), [Typescript](https://www.typescriptlang.org/) and [NPM](https://www.npmjs.com/) for an Epicodus Solo Project 7/21/17.
<hr>
## **Specs**

### Component Checklist

| Component | Completed? |
|---|---|
| form page | X |
| enter lat/long form | X |
| enter physical address form | X |
| show output | X |
| show/hide divs | X |
| play audio | X |

| User Stories | Process |
|---|---|
| Enter in the latitude and longitude of a known geocache and receive the corresponding physical address of its location, see the most specific result available | Build service to house function to receive data from API call, build method to access API function, build form to provide user input |
| Enter in the physical address of a geocache, receive the corresponding latitude and longitude | Build service to house function to receive data from API call (different than previous), build method to access API function/service, build form to get user input |
| Only view necessary sections of website | Show/Hide sections using `*ngIf` |
| Hunch Hunch, What what? | Buh Bo |


<hr>
## Project Build
Download from the [repo](https://github.com/GrapeSalad/API-Ang-Solo.git)
Run `ng -v` to ensure than your Angular is version **4**.

| If Not Run One of these Commands |
| --- |
| For Windows |
|`npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save` |
| For Linux/Mac |
|`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save` |

Run `npm install` to install all dependencies with Node Package Manager, then `bower install` to install the styling dependencies.

## API Key

You will need to create your own API key variable to access the [Google API](https://developers.google.com/maps/documentation/geocoding/start).
A file will need to be created at `src/app/api-keys.ts` and populated with this code: `export const geoKey = "apiKey";`

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

## Credits

This project was built and is maintained by [David Wilson](https://github.com/GrapeSalad)
For any bugs and issues please message me on Github.

#### License

Built using the MIT license.

Copyright (c) 2017 **David Wilson**
