A framework (template? boilerpalate?) for multiple webapps in a single domain.
(It's a Single Page Application getter. Get it?)
To run locally:

$ npm install

then test, of course

$ npm test

Put your app in its own folder in webapps/, with an index.html (mandatory) and whatever else you want

Put the name of that folder, as a string, in the 'webapps' array in app.js

$ npm test , again

$ npm start

Navigate to localhost:3000/<whateveryouadded> and check it out!

The development server restarts itself on every save.

I suggest: 
1) adding your own apps to .gitignore for Spagetter itself.
2) creating your own version control and dependency management setup within the folder for each webapp.
3) not using this in production. It's not complicated and it's tested, but consider it very alpha.
4) showing me cool stuff

