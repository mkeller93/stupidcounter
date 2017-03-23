// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB108nk06hXNqEPSVIJIyW0AYtSkWoJZUc",
    authDomain: "stupidcounter-dev.firebaseapp.com",
    databaseURL: "https://stupidcounter-dev.firebaseio.com",
    storageBucket: "stupidcounter-dev.appspot.com",
    messagingSenderId: "364175487286"
  },
  MAX_CLICKS: 2
};