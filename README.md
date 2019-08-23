# frankie-code-challenge

# Introduction

This is a coding challenge from Frankie Financial which a company is solving a problem that connected 100+ different vendors and data sources into a single platform along with an orchestration layer to create workflow.

Tech stack: Vue JS, Vue CLI, SCSS.

## Installation

Clone this project: 

```
git clone git@github.com:Tony1106/Frankie-Code-Test.git
```

Install dependency
```bash
npm install
```

Run the project on local host: 
```bash
npm  run serve
```

## Usage
.
📦src
 ┣ 📂assets                 # Store image and other assets.
 ┣ 📂components             # Vue components
 ┣ 📂constants              # Application instants: styles, themes
 ┣ 📂layouts                # Create page for Single Page Application: Sign In, Reset Password, Not Found
 ┃ ┗ 📜layoutController.js  # Store state to controll the application layour: Spinner, Menu, Side Bar...
 ┣ 📂mixins                 # Vue mixins, reuse logic for component
 ┣ 📂routes                 # Custom router for application
 ┣ 📂services               # Helper function for project: fetch, localStorage...
 ┣ 📜App.vue
 ┗ 📜main.js
src
 ┣ assets
 ┃ ┣ login-shield.svg
 ┃ ┣ login-user.svg
 ┃ ┗ logo.png
 ┣ components
 ┃ ┣ Buttons
 ┃ ┃ ┗ index.vue
 ┃ ┣ Containers
 ┃ ┃ ┗ index.vue
 ┃ ┣ Forms
 ┃ ┃ ┗ TextInput
 ┃ ┃ ┃ ┗ index.vue
 ┃ ┣ Images
 ┃ ┃ ┣ Avatar
 ┃ ┃ ┃ ┗ index.vue
 ┃ ┃ ┗ SideImage
 ┃ ┃ ┃ ┗ index.vue
 ┃ ┣ Pages
 ┃ ┃ ┣ Footer
 ┃ ┃ ┗ Header
 ┃ ┃ ┃ ┗ index.vue
 ┃ ┣ Spinner
 ┃ ┃ ┗ index.vue
 ┃ ┣ Typography
 ┃ ┃ ┗ index.vue
 ┃ ┗ HelloWorld.vue
 ┣ constants
 ┃ ┗ styles
 ┃ ┃ ┣ _global.scss
 ┃ ┃ ┣ _mixins.scss
 ┃ ┃ ┗ _variables.scss
 ┣ layouts
 ┃ ┣ NotFound
 ┃ ┃ ┗ index.vue
 ┃ ┣ ResetPassword
 ┃ ┃ ┗ index.vue
 ┃ ┣ SignIn
 ┃ ┃ ┗ index.vue
 ┃ ┗ layoutController.js
 ┣ mixins
 ┃ ┣ authentication.js
 ┃ ┗ handleURLImport.js
 ┣ routes
 ┃ ┗ index.vue
 ┣ services
 ┃ ┗ index.js
 ┣ App.vue
 ┗ main.js
## Author

Tony Bui
Phone: 0449 70 1106
Email: buiminhtien06@gmail.com

Tech Stacks: React, Vue, Node, PHP, Firebase, MongoDB, MySQL...
