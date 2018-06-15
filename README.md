# AngularGooglePlaces
This projects demonstrates how to hit the Google Places API and retrieve lat and lon data for the results In Angular 5. It implements a Location autocomplete search form that guesses the location you are trying to find. It then plots the prediction on a Google Map.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Demo

You can test the app live here:
https://angular-google-places.stackblitz.io

## Setup

Before the project will work you need to create your environment.ts files with your own API Key.

Add `src/environments/environment.ts` to your project and copy the code below into it:
```
export const environment = {
  production: false,
  googleAPIKey: "YOUR_GOOGLE_API_KEY"
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
